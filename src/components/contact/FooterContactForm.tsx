"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendFooterContactEmail } from "@/app/actions";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary w-full gap-2"
    >
      {pending && <Loader2 className="w-4 h-4 animate-spin" />}
      {pending ? "Envoi..." : "Envoyer"}
    </button>
  );
}

export default function FooterContactForm() {
  const [state, formAction] = useActionState(sendFooterContactEmail, null);

  if (state?.success) {
    return (
      <div role="alert" className="alert alert-success text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-3">
      {state && !state.success && (
        <p className="text-error text-sm">{state.message}</p>
      )}

      <input
        name="nom"
        type="text"
        required
        placeholder="Votre nom"
        className="input input-bordered w-full bg-base-200 border-base-300 text-base-content placeholder:text-base-content/30 text-sm"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Votre email"
        className="input input-bordered w-full bg-base-200 border-base-300 text-base-content placeholder:text-base-content/30 text-sm"
      />
      <textarea
        name="message"
        required
        rows={3}
        placeholder="Votre message..."
        className="textarea textarea-bordered w-full bg-base-200 border-base-300 text-base-content placeholder:text-base-content/30 text-sm resize-none"
      />
      <SubmitButton />
    </form>
  );
}
