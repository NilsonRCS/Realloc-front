import type { Metadata } from "next";
import { LoginForm } from "@/components/organisms";
import { AuthTemplate } from "@/components/templates";

export const metadata: Metadata = {
  title: "Entrar | RealLoc",
};

export default function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}
