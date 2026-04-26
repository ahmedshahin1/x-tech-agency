import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import {
  CONTACT_EMAIL,
  LOCATION,
  PHONE_LINK,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — X Tech Agency" },
      {
        name: "description",
        content:
          "Tell us about your project. The X Tech Agency team will get back within 24 hours.",
      },
      { property: "og:title", content: "Contact — X Tech Agency" },
      {
        property: "og:description",
        content: "Let's talk about your next big move.",
      },
    ],
  }),
  component: ContactPage,
});

type FieldName = "name" | "phone" | "email" | "service" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

function ContactPage() {
  const { t } = useApp();

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, t.contact.errors.name).max(100, t.contact.errors.name),
        phone: z.string().trim().min(5, t.contact.errors.phone).max(30, t.contact.errors.phone),
        email: z
          .string()
          .trim()
          .max(255, t.contact.errors.email)
          .email(t.contact.errors.email)
          .optional()
          .or(z.literal("")),
        service: z.string().trim().min(1, t.contact.errors.service).max(80),
        message: z
          .string()
          .trim()
          .min(5, t.contact.errors.message)
          .max(2000, t.contact.errors.message),
      }),
    [t],
  );

  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [lastWaUrl, setLastWaUrl] = useState<string>("");

  const clearFieldError = (field: FieldName) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email") ?? "",
      service: data.get("service"),
      message: data.get("message"),
    });

    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldName | undefined;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      toast.error(t.contact.requiredError);
      // focus first invalid field
      const firstKey = Object.keys(fieldErrors)[0] as FieldName | undefined;
      if (firstKey) {
        const el = form.querySelector<HTMLInputElement>(`[name="${firstKey}"]`);
        el?.focus();
      }
      return;
    }

    setStatus("sending");
    setErrors({});

    const { name, phone, email, service, message } = parsed.data;

    const subject = encodeURIComponent(`New inquiry from ${name} — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "-"}\nService: ${service}\n\nMessage:\n${message}`,
    );
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    const waText = encodeURIComponent(
      `Hello X Tech,\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
    );
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
    setLastWaUrl(waUrl);

    try {
      const a = document.createElement("a");
      a.href = mailto;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      // ignore
    }

    setStatus("ok");
    form.reset();
    toast.success(t.contact.success);
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 400);
  };

  const sendAnother = () => {
    setStatus("idle");
    setErrors({});
    setLastWaUrl("");
  };

  return (
    <>
      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 -z-10 hero-bg" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold tracking-tight sm:text-6xl"
          >
            <span className="text-gradient-brand">{t.contact.title}</span>
          </motion.h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t.contact.lead}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <div className="glass rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold">X Tech Agency</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Marketing · Technology · Automation
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-foreground/90 hover:text-primary"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-3 text-foreground/90 hover:text-primary"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  {PHONE_NUMBER}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/90 hover:text-primary"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  +20 114 522 2991
                </a>
                <div className="flex items-start gap-3 text-foreground/90">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-brand text-white">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="pt-2">{LOCATION}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait" initial={false}>
              {status === "ok" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="glass relative overflow-hidden rounded-3xl p-10 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div
                    className="absolute inset-0 -z-10 opacity-60"
                    style={{ background: "var(--gradient-radial-glow)" }}
                  />
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 14 }}
                    className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[oklch(0.65_0.18_145)] text-white shadow-elevated"
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-2xl font-bold">
                    {t.contact.successTitle}
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                    {t.contact.successBody}
                  </p>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    {lastWaUrl && (
                      <a
                        href={lastWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white shadow-elevated transition-transform hover:scale-[1.03]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {t.contact.reopenWhatsapp}
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={sendAnother}
                      className="inline-flex h-11 items-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="glass rounded-3xl p-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      icon={<User className="h-4 w-4" />}
                      label={t.contact.name + " *"}
                      error={errors.name}
                      htmlFor="cf-name"
                    >
                      <Input
                        id="cf-name"
                        name="name"
                        required
                        maxLength={100}
                        invalid={!!errors.name}
                        onChange={() => clearFieldError("name")}
                      />
                    </Field>
                    <Field
                      icon={<Phone className="h-4 w-4" />}
                      label={t.contact.phone + " *"}
                      error={errors.phone}
                      htmlFor="cf-phone"
                    >
                      <Input
                        id="cf-phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={30}
                        invalid={!!errors.phone}
                        onChange={() => clearFieldError("phone")}
                      />
                    </Field>
                    <Field
                      icon={<Mail className="h-4 w-4" />}
                      label={t.contact.email}
                      error={errors.email}
                      htmlFor="cf-email"
                    >
                      <Input
                        id="cf-email"
                        type="email"
                        name="email"
                        maxLength={255}
                        invalid={!!errors.email}
                        onChange={() => clearFieldError("email")}
                      />
                    </Field>
                    <Field
                      label={t.contact.service + " *"}
                      error={errors.service}
                      htmlFor="cf-service"
                    >
                      <select
                        id="cf-service"
                        name="service"
                        required
                        defaultValue=""
                        onChange={() => clearFieldError("service")}
                        className={selectClass(!!errors.service)}
                      >
                        <option value="" disabled>
                          —
                        </option>
                        {t.contact.services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field
                      label={t.contact.message + " *"}
                      error={errors.message}
                      htmlFor="cf-message"
                    >
                      <textarea
                        id="cf-message"
                        name="message"
                        required
                        rows={5}
                        maxLength={2000}
                        onChange={() => clearFieldError("message")}
                        className={textareaClass(!!errors.message)}
                      />
                    </Field>
                  </div>

                  {status === "error" && Object.keys(errors).length > 0 && (
                    <div
                      role="alert"
                      className="mt-5 flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{t.contact.requiredError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white shadow-elevated transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    {status === "sending" ? "..." : t.contact.submit}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

function inputClass(invalid: boolean) {
  return `h-11 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-colors ${
    invalid
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-primary"
  }`;
}

function selectClass(invalid: boolean) {
  return inputClass(invalid);
}

function textareaClass(invalid: boolean) {
  return `w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors ${
    invalid
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-primary"
  }`;
}

function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean },
) {
  const { invalid, className, ...rest } = props;
  return <input {...rest} className={className ?? inputClass(!!invalid)} />;
}

function Field({
  label,
  icon,
  error,
  htmlFor,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block">
        <span className="mb-1.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {icon}
          {label}
        </span>
        {children}
      </label>
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            key="err"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.18 }}
            className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
          >
            <AlertCircle className="h-3 w-3 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
