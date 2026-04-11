import { useState } from "react";
import { PERSONAL_INFO } from "../../data/portfolioData";
import FadeIn from "../FadeIn/FadeIn";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Connect.module.css";

const CONTACT_ITEMS = [
  { label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, icon: "@" },
  { label: "LinkedIn", value: PERSONAL_INFO.linkedinDisplay, href: PERSONAL_INFO.linkedin, icon: "in" },
  { label: "GitHub", value: PERSONAL_INFO.githubDisplay, href: PERSONAL_INFO.github, icon: "gh" },
  { label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`, icon: "☎" },
];

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Connect() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent'

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");
  const res = await fetch("https://formspree.io/f/mreonkzd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (res.ok) {
    setStatus("sent");
    setForm(INITIAL_FORM);
  } else {
    setStatus("error");
  }
};

  return (
    <section id="connect" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          number="05"
          title="Connect"
          subtitle="Open to full-time opportunities in backend & full-stack development. Reach out — I'd love to connect."
        />

        <div className={styles.grid}>
          {/* Contact cards */}
          <FadeIn>
            <div className={styles.contactCards}>
              {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={styles.contactCard}
                >
                  <div className={styles.contactIcon}>{icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{label}</div>
                    <div className={styles.contactValue}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {[
                { name: "name", label: "YOUR NAME", type: "text", placeholder: "John Doe" },
                { name: "email", label: "YOUR EMAIL", type: "email", placeholder: "you@example.com" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name} className={styles.field}>
                  <label className={styles.fieldLabel}>{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className={styles.input}
                  />
                </div>
              ))}

              <div className={styles.field}>
                <label className={styles.fieldLabel}>MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity..."
                  required
                  rows={5}
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`${styles.submitBtn} ${status === "sent" ? styles.submitSent : ""}`}
              >
                {status === "sending"
                  ? "OPENING MAIL..."
                  : status === "sent"
                  ? "✓ MESSAGE READY"
                  : "SEND MESSAGE"}
              </button>

              {status === "sent" && (
                <p className={styles.successMsg}>
                  ✓ Your mail client should open with the message pre-filled.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
