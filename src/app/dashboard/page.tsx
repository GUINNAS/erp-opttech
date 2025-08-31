'use client';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  // Exemplo: checar se o usuário está autenticado
  // Validação de login removida temporariamente

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: "2rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Dashboard ERP Ótica</h1>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <div style={{ minWidth: "200px", margin: "1rem", padding: "1rem", background: "#e3f2fd", borderRadius: "8px", textAlign: "center" }}>
            <h2>Clientes</h2>
            <p>Gestão de clientes e receitas</p>
          </div>
          <div style={{ minWidth: "200px", margin: "1rem", padding: "1rem", background: "#e8f5e9", borderRadius: "8px", textAlign: "center" }}>
            <h2>Produtos</h2>
            <p>Óculos, lentes, armações</p>
          </div>
          <div style={{ minWidth: "200px", margin: "1rem", padding: "1rem", background: "#fff3e0", borderRadius: "8px", textAlign: "center" }}>
            <h2>Vendas</h2>
            <p>Orçamentos e pedidos</p>
          </div>
          <div style={{ minWidth: "200px", margin: "1rem", padding: "1rem", background: "#f3e5f5", borderRadius: "8px", textAlign: "center" }}>
            <h2>Financeiro</h2>
            <p>Contas e relatórios</p>
          </div>
        </div>
      </div>
    </div>
  );
}
