import type { Metadata } from "next";
import PageHeader from "@/components/site/page-header";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Cabalos Électricité",
  description: "Politique de confidentialité et protection des données personnelles — Cabalos Électricité.",
  alternates: { canonical: "/politique-confidentialite" },
};

const SECTIONS = [
  {
    title: "Responsable du traitement",
    content: [
      "Emma Cabal — Cabalos Électricité, Marseille (13016)",
      "Email : cabal.emma@gmail.com — Téléphone : 06 32 36 35 63",
    ],
  },
  {
    title: "Données collectées",
    content: [
      "Ce site collecte uniquement les données que vous transmettez volontairement via le formulaire de contact :",
      "• Prénom et nom",
      "• Adresse email",
      "• Numéro de téléphone (facultatif)",
      "• Nature de la prestation souhaitée",
      "• Contenu de votre message",
      "Aucune donnée n'est collectée automatiquement à des fins de profilage ou de publicité ciblée.",
    ],
  },
  {
    title: "Finalité et base légale",
    content: [
      "Les données transmises via le formulaire de contact sont utilisées exclusivement pour :",
      "• Répondre à votre demande de devis ou d'information",
      "• Organiser une intervention",
      "La base légale du traitement est votre consentement explicite, recueilli au moment de la soumission du formulaire.",
    ],
  },
  {
    title: "Durée de conservation",
    content: [
      "Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.",
      "Passé ce délai, elles sont supprimées de manière sécurisée.",
    ],
  },
  {
    title: "Destinataires des données",
    content: [
      "Vos données ne sont jamais vendues, louées ou cédées à des tiers.",
      "Elles sont transmises uniquement à Cabalos Électricité dans le cadre du traitement de votre demande, via le service d'envoi d'email Resend (resend.com), soumis aux mêmes obligations de confidentialité.",
    ],
  },
  {
    title: "Vos droits (RGPD)",
    content: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :",
      "• Droit d'accès à vos données",
      "• Droit de rectification",
      "• Droit à l'effacement (« droit à l'oubli »)",
      "• Droit à la limitation du traitement",
      "• Droit à la portabilité",
      "• Droit d'opposition",
      "Pour exercer ces droits, contactez : cabal.emma@gmail.com. Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Ce site n'utilise pas de cookies de traçage, de publicité ou d'analyse comportementale.",
      "Des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés ; ils ne nécessitent pas de consentement.",
    ],
  },
  {
    title: "Sécurité",
    content: [
      "Le site est hébergé sur Vercel (infrastructure sécurisée, HTTPS obligatoire). Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour protéger vos données contre tout accès non autorisé, perte ou divulgation.",
    ],
  },
  {
    title: "Modifications",
    content: [
      "Cette politique peut être mise à jour à tout moment. La date de dernière révision figure ci-dessous. En continuant à utiliser le site après une modification, vous en acceptez les nouvelles dispositions.",
      "Dernière mise à jour : mai 2026",
    ],
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Légal · Confidentialité"
        title="Politique de confidentialité"
        intro="Protection de vos données personnelles conformément au RGPD et à la loi Informatique et Libertés."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[72ch] flex flex-col gap-12">
            {SECTIONS.map(({ title, content }) => (
              <div key={title}>
                <h2 className="text-[18px] lg:text-[20px] font-medium mb-4 pb-3 border-b border-[var(--border)]">
                  {title}
                </h2>
                <ul className="flex flex-col gap-2">
                  {content.map((line, i) => (
                    <li key={i} className="text-[15px] leading-[1.6] text-[var(--muted-foreground)]">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
