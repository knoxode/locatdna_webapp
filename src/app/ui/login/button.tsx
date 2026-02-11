import Image from "next/image";

type AuthMode = "login" | "signup";
type AuthProvider = "google" | "github" | "email";

interface LoginButtonProps {
  mode: AuthMode;
  provider: AuthProvider;
}

export function LoginButton({ mode, provider }: LoginButtonProps) {
  const actionText = mode === "login" ? "Continue with" : "Sign up with";

  const providerConfig = {
    google: {
      label: "Google",
      icon: (
        <Image
          src="/logos/google/web_light_rd_na.svg"
          alt="Google logo"
          width={25}
          height={25}
        />
      ),
      variant:
        "bg-zinc-900 border border-zinc-700 hover:bg-zinc-800",
    },
    github: {
      label: "GitHub",
      icon: (
        <Image
          src="/logos/github/GitHub_Invertocat_White.svg"
          alt="GitHub logo"
          width={25}
          height={25}
        />
      ),
      variant:
        "bg-zinc-900 border border-zinc-700 hover:bg-zinc-800",
    },
    email: {
      label: "Email",
      icon: null,
      variant:
        "border border-zinc-700 hover:bg-zinc-900",
    },
  } as const;

  const config = providerConfig[provider];

  return (
    <button
      className={`w-full flex items-center justify-center gap-3 rounded-lg py-4 text-base font-medium transition ${config.variant}`}
    >
      {config.icon}
      {actionText} {config.label}
    </button>
  );
}
