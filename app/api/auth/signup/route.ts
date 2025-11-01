import { NextResponse } from "next/server";
import argon2 from "argon2";
import { prisma } from "@/prisma/prisma";

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 },
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const displayName =
      typeof name === "string" && name.trim().length > 0 ? name.trim() : null;

    if (!normalizedEmail || !password.trim()) {
      return NextResponse.json(
        { error: "Email and password cannot be empty." },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already registered." },
        { status: 409 },
      );
    }

    const passwordHash = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        name: displayName,
        passwordHash,
        accounts: {
          create: {
            provider: "credentials",
            type: "credentials",
            providerAccountId: normalizedEmail,
          },
        },
      },
    });

    return NextResponse.json(
      { id: user.id, email: user.email, name: user.name },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Unexpected error while creating account." },
      { status: 500 },
    );
  }
}
