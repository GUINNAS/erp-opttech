import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Busca o usuário pelo email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  // Verifica se usuário existe e compara o hash da senha
  if (user && await bcrypt.compare(password, user.password)) {
    return NextResponse.json({ success: true, message: "Login realizado com sucesso." });
  }

  return NextResponse.json({ success: false, message: "Credenciais inválidas." }, { status: 401 });
}
