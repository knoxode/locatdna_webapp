
"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
type AuthMode = "login" | "signup";
type AuthProvider = "google" | "github" | "email";


interface LoginButtonProps {
  mode: AuthMode;
  provider: AuthProvider;
}

export function LoginButton({ mode, provider }: LoginButtonProps) {
  const actionText = mode === "login" ? "Continue with" : "Sign up with";

  const handleClick = async () => {
    console.log("Clicked:", provider)
    if (provider === "email") {
      await signIn("email", { callbackUrl: "/dashboard" });
    } else {
      await signIn(provider, {
        callbackUrl: "/dashboard", // or wherever you want them redirected
      });
    }
  };

  const providerConfig = {
    google: {
      label: "Google",
      iconSrc: "/logos/google/web_light_rd_na.svg",
      variant: "bg-zinc-900 border border-zinc-700 hover:bg-zinc-800",
    },
    github: {
      label: "GitHub",
      iconSrc: "/logos/github/GitHub_Invertocat_White.svg",
      variant: "bg-zinc-900 border border-zinc-700 hover:bg-zinc-800",
    },
    email: {
      label: "Email",
      iconSrc: null,
      variant: "border border-zinc-700 hover:bg-zinc-900",
    },
  } as const;

  const config = providerConfig[provider];

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center justify-center gap-3 rounded-lg py-4 text-base font-medium transition ${config.variant}`}
    >
      {config.iconSrc && (
        <Image
          src={config.iconSrc}
          alt={`${config.label} logo`}
          width={25}
          height={25}
        />
      )}
      {actionText} {config.label}
    </button>
  );
}
