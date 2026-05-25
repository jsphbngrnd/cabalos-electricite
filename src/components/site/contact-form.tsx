"use client";

import { useActionState } from "react";
import { sendContactEmail } from "@/app/actions";
import { SERVICES } from "@/lib/content";

const PRESTATION_OPTIONS = [
  "Choisir…",
  ...SERVICES.map((s) => s.t),
  "Autre",
];

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-[.2em] text-[var(--muted-foreground)] mb-2">
        {label}
        {required && <span style={{ color: "var(--primary)" }}> *</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full bg-transparent border border-[var(--input)] rounded-[var(--radius)] px-3 py-2.5 text-[15px] focus-ring outline-none focus:border-[var(--foreground)] transition-colors";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, null);

  if (state?.success) {
    return (
      <div className="py-12 flex flex-col items-start gap-4">
        <div
          className="inline-flex items-center gap-2 text-[13px] px-3 py-1.5 rounded-[var(--radius)] font-mono uppercase tracking-[.16em]"
          style={{ background: "var(--success)", color: "#fff" }}
        >
          ✓ Demande envoyée
        </div>
        <p className="text-[16px] leading-[1.55] text-[var(--muted-foreground)] max-w-[48ch]">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={action}>
      <div className="h-px bg-[var(--border)]" />
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 py-8">
        <Field label="Prénom" required>
          <input name="prenom" type="text" required className={inputCls} placeholder="Emma" />
        </Field>
        <Field label="Nom" required>
          <input name="nom" type="text" required className={inputCls} placeholder="Cabal" />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required className={inputCls} placeholder="emma@…" />
        </Field>
        <Field label="Téléphone">
          <input name="telephone" type="tel" className={inputCls} placeholder="06 00 00 00 00" />
        </Field>
        <div className="col-span-2">
          <Field label="Prestation">
            <div className="relative">
              <select name="prestation" className={`${inputCls} appearance-none pr-9`}>
                {PRESTATION_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </Field>
        </div>
        <div className="col-span-2">
          <Field label="Message" required>
            <textarea
              name="message"
              rows={5}
              required
              className={`${inputCls} resize-none`}
              placeholder="Type de logement, nature des travaux, contraintes éventuelles…"
            />
          </Field>
        </div>
        <div className="col-span-2 flex items-start gap-3 mt-2">
          <input type="checkbox" id="rgpd" name="rgpd" required className="mt-1 accent-[var(--primary)]" />
          <label htmlFor="rgpd" className="text-[13px] text-[var(--muted-foreground)] leading-[1.5]">
            J&rsquo;accepte que mes informations soient utilisées pour me recontacter au sujet de cette demande.
            Aucun envoi à des tiers, aucune newsletter.
          </label>
        </div>
        {state?.success === false && (
          <div className="col-span-2 text-[13.5px] text-[var(--destructive)]">
            {state.message}
          </div>
        )}
        <div className="col-span-2 flex items-center justify-between mt-4 gap-4 flex-wrap">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-[var(--radius)] h-12 px-6 text-[15px] bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 disabled:opacity-50"
          >
            {pending ? "Envoi en cours…" : "Envoyer la demande"}
            {!pending && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-[var(--muted-foreground)]">
            Réponse sous 48 h
          </span>
        </div>
      </div>
      <div className="h-px bg-[var(--border)]" />
    </form>
  );
}
