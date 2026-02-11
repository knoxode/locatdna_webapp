import Image from "next/image";

type AuthMode = "login" | "signup";
type AuthProvider = "google" | "github" | "email";

interface LoginButtonStackProps {
  mode: AuthMode;
  provider: AuthProvider;
}

export function LoginButtonStack({ mode, provider }: LoginButtonStackProps) {
  return (
    <div className="space-y-4 max-w-md w-full ml-auto">
      <LoginButtonGoogle mode={mode} />
      <LoginButtonGithub mode={mode} />
      <div className="border-t border-zinc-800 my-4" />
      <LoginButtonEmail mode={mode} />
    </div>
  );
}
export function LoginButton({ mode, provider }: LoginButtonProps) {
  const label =
    mode === "login" ? "Continue with Google" : "Signup with Google";
  const provider =
    mode === "login" ? "Continue with Google" : "Signup with Google";

  const completeHTML = switch
  return (
    <button className="w-full flex items-center justify-center gap-3 rounded-lg py-4 text-base font-medium bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition">
      <Image
        src="/logos/google/web_light_rd_na.svg"
        alt="Google logo"
        width={25}
        height={25}
      />
      {label}
    </button>

  )
}
