"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactEmail } from "@/app/actions";
import { Loader2 } from "lucide-react";

const PRESTATIONS = [
  "Installation électrique neuve",
  "Rénovation électrique",
  "Mise aux normes NF C 15-100",
  "Tableau électrique",
  "Dépannage urgence",
  "Éclairage LED",
  "Climatisation réversible",
  "Autre",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary btn-lg w-full gap-2"
    >
      {pending && <Loader2 className="w-4 h-4 animate-spin" />}
      {pending ? "Envoi en cours..." : "Envoyer ma demande"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, null);

  if (state?.success) {
    return (
      <div role="alert" className="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <h3 className="font-heading font-semibold">Message envoyé !</h3>
          <p className="text-sm">{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      {state && !state.success && (
        <div role="alert" className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm">{state.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prenom" className="label">
            <span className="label-text font-medium">Prénom <span className="text-error">*</span></span>
          </label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            required
            placeholder="Marie"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="nom" className="label">
            <span className="label-text font-medium">Nom <span className="text-error">*</span></span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            placeholder="Dupont"
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="label">
            <span className="label-text font-medium">Email <span className="text-error">*</span></span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="marie@exemple.fr"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="label">
            <span className="label-text font-medium">Téléphone</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="06 12 34 56 78"
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor="prestation" className="label">
          <span className="label-text font-medium">Type de prestation</span>
        </label>
        <select
          id="prestation"
          name="prestation"
          className="select select-bordered w-full"
        >
          <option value="">Sélectionner une prestation...</option>
          {PRESTATIONS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label">
          <span className="label-text font-medium">Votre message <span className="text-error">*</span></span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet ou votre besoin en détail..."
          className="textarea textarea-bordered w-full resize-none"
        />
      </div>

      <SubmitButton />

      <p className="text-xs text-base-content/50 text-center">
        * Champs obligatoires. Vos données ne seront jamais partagées avec des tiers.
      </p>
    </form>
  );
}
