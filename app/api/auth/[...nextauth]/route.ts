import NextAuth from "next-auth";
import { authProviders } from "@/lib/authProviders";

const handler = NextAuth(authProviders)

export { handler as GET, handler as POST }