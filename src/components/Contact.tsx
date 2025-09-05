import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      emailjs.sendForm(
        "service_c0i29y9",
        "Contactform_portfolio",
        form.current!,
        "aD7kJXgS79Byc8SUi"
      )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
      });
    }
  };

  return (
    <div id="contact" style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ color: "#fff", fontSize: "2.5rem", marginBottom: "1rem" }}>
        Contact Me
      </h1>
      
      <p style={{ color: "#fff", marginBottom: "2rem" }}>
        Got a project waiting to be realized? Let's collaborate and make it happen!
      </p>

      <form ref={form} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <input
            type="text"
            name="name"  // Important: matches {{name}} in template
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ flex: 1, padding: "1rem", backgroundColor: "#fff", border: "none", borderRadius: "4px" }}
          />
          <input
            type="email"
            name="email"  // Important: matches {{email}} in template
            placeholder="Email / Phone *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ flex: 1, padding: "1rem", backgroundColor: "#fff", border: "none", borderRadius: "4px" }}
          />
        </div>

        <textarea
          name="message"  // Important: matches {{message}} in template
          placeholder="Message *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            width: "100%",
            height: "200px",
            padding: "1rem",
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "4px",
            resize: "vertical"
          }}
        />

        <button type="submit" style={{
          alignSelf: "flex-end",
          padding: "0.75rem 2rem",
          backgroundColor: "#5000ca",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          SEND <span style={{ fontSize: "1.2rem" }}>→</span>
        </button>
      </form>
    </div>
  );
}

export default Contact;