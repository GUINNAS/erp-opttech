import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Exemplo: validação simples (substitua por consulta ao banco depois)
  if (email === "admin@opttech.com" && password === "123456") {
    return NextResponse.json({ success: true, message: "Login realizado com sucesso." });
  }

  return NextResponse.json({ success: false, message: "Credenciais inválidas." }, { status: 401 });
}
