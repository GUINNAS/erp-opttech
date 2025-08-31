import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  // Verifica se o email já está cadastrado
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return NextResponse.json({ success: false, message: "Email já cadastrado." }, { status: 400 });
  }

  // Gera o hash da senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Cria o usuário no banco
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return NextResponse.json({ success: true, message: "Usuário cadastrado com sucesso.", user: { id: user.id, email: user.email, name: user.name } });
}
