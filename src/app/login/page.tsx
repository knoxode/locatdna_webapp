import { LoginButtonEmail, LoginButtonGithub, LoginButtonGoogle } from "@/src/app/ui/login/button";
// import { Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-zinc-200">
      <div className="w-full max-w-6xl border border-zinc-800 rounded-xl p-12">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-right">
            <h1 className="text-5xl font-semibold tracking-tight">
              Let&apos;s get you logged in
            </h1>
            <p className="text-lg text-zinc-400">
              Don&apos;t have an account?{" "}
              <span className="underline cursor-pointer hover:text-zinc-300">
                Sign up
              </span>
            </p>
          </div>

          <div className="w-px self-stretch bg-zinc-800" />

          {/* RIGHT SIDE */}
          <div className="space-y-4 max-w-md w-full">

            {/* OAuth Buttons */}
            <LoginButtonGoogle />

            <LoginButtonGithub />
            {/* Divider */}
            <div className="border-t border-zinc-800 my-4" />

            <LoginButtonEmail />

          </div>

        </div>
      </div>
    </div>
  );
}

