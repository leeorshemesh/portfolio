"use client";

import { useState, type FormEvent } from "react";

export type ContactFormStatus = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!formspreeId) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Please email me directly for now.",
      );
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Formspree rejected the submission.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or email me directly.",
      );
    }
  }

  return { status, errorMessage, handleSubmit };
}
