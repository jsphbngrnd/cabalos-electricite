"use server";

import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail =
  process.env.CONTACT_EMAIL || "cabal.emma@gmail.com";

function getResend() {
  if (!resendApiKey) return null;
  return new Resend(resendApiKey);
}

export async function sendContactEmail(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  // Honeypot: bots fill hidden fields, humans don't
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    return { success: true, message: "Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais." };
  }

  const nom = formData.get("nom") as string;
  const prenom = formData.get("prenom") as string;
  const email = formData.get("email") as string;
  const telephone = formData.get("telephone") as string;
  const prestation = formData.get("prestation") as string;
  const message = formData.get("message") as string;

  if (!nom || !email || !message) {
    return {
      success: false,
      message: "Veuillez remplir tous les champs obligatoires.",
    };
  }

  const resend = getResend();

  if (!resend) {
    // Mode dev: simuler succès
    console.log("[Dev] Contact form submission:", {
      nom,
      prenom,
      email,
      telephone,
      prestation,
      message,
    });
    return {
      success: true,
      message:
        "Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.",
    };
  }

  try {
    await resend.emails.send({
      from: "Cabalos Electricité <noreply@cabalos-electricite.fr>",
      to: [contactEmail],
      replyTo: email,
      subject: `Nouveau message de contact – ${prenom} ${nom}`,
      html: `
        <h2>Nouveau message depuis le formulaire de contact</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; font-weight: bold;">Nom</td><td style="padding: 8px;">${prenom} ${nom}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Téléphone</td><td style="padding: 8px;">${telephone || "Non renseigné"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Prestation</td><td style="padding: 8px;">${prestation || "Non renseignée"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${message.replace(/\n/g, "<br>")}</td></tr>
        </table>
      `,
    });

    return {
      success: true,
      message:
        "Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.",
    };
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return {
      success: false,
      message:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.",
    };
  }
}

export async function sendFooterContactEmail(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    return { success: true, message: "Message envoyé ! Nous vous répondrons rapidement." };
  }

  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!nom || !email || !message) {
    return {
      success: false,
      message: "Veuillez remplir tous les champs.",
    };
  }

  const resend = getResend();

  if (!resend) {
    console.log("[Dev] Footer contact form:", { nom, email, message });
    return {
      success: true,
      message: "Message envoyé ! Nous vous répondrons rapidement.",
    };
  }

  try {
    await resend.emails.send({
      from: "Cabalos Electricité <noreply@cabalos-electricite.fr>",
      to: [contactEmail],
      replyTo: email,
      subject: `Message rapide de ${nom}`,
      html: `
        <h2>Message rapide depuis le footer</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message :</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      success: true,
      message: "Message envoyé ! Nous vous répondrons rapidement.",
    };
  } catch (error) {
    console.error("Erreur envoi email footer:", error);
    return {
      success: false,
      message: "Erreur lors de l'envoi. Veuillez réessayer.",
    };
  }
}
