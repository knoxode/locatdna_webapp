import { LoginButton } from "@/app/ui/login/button";
// import { Mail } from "lucide-react";

export default function LoginPage() {
  const mode = "login";
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-zinc-200">
      <div className="w-full max-w-7xl border border-zinc-800 rounded-xl p-12">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-right">
            <h1 className="text-5xl font-semibold tracking-tight">
              Let&apos;s get you logged in
            </h1>
            <p className="text-lg text-zinc-400">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="underline cursor-pointer hover:text-zinc-300">
                Sign up
              </a>
            </p>
          </div>

          <div className="w-px self-stretch bg-zinc-800" />

          {/* RIGHT SIDE */}
          <div className="space-y-4 max-w-md w-full">

            {/* OAuth Buttons */}
            <LoginButton mode={mode} provider="google" />
            <LoginButton mode={mode} provider="github" />

            {/* Divider */}
            <div className="border-t border-zinc-800 my-4" />

            <LoginButton mode={mode} provider="email" />

          </div>

        </div>
      </div>
    </div>
  );
}

