import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  // cookies() pode ser síncrono, então não use await
  const token = cookies().get("token")?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET || "segredo_super_secreto");
    return NextResponse.json({ authenticated: true });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}
