'use client';
import React from "react";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.message);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Erro ao conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", minWidth: "320px" }}>
        <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Login</h2>
        {error && <div style={{ color: "#d32f2f", marginBottom: "1rem", textAlign: "center" }}>{error}</div>}
        {success && <div style={{ color: "#388e3c", marginBottom: "1rem", textAlign: "center" }}>{success}</div>}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: ".5rem" }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: ".5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: ".5rem" }}>Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: ".5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ width: "100%", padding: ".75rem", borderRadius: "4px", background: "#0070f3", color: "#fff", border: "none", fontWeight: "bold" }}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
