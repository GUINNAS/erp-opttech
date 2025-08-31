

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Busca o usuário pelo email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  // Verifica se usuário existe e compara o hash da senha
  if (user && await bcrypt.compare(password, user.password)) {
    // Gera o token JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "segredo_super_secreto",
      { expiresIn: "1d" }
    );

    // Envia o token como cookie HTTP-only
    const response = NextResponse.json({ success: true, message: "Login realizado com sucesso." });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 dia
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ success: false, message: "Credenciais inválidas." }, { status: 401 });
}
