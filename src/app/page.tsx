import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-5xl px-16 py-32">
        <header className="flex items-center gap-4 mb-12">
          <Image
            className="dark:invert"
            src="/logos/next.svg"
            alt="Next.js logo"
            width={200}
            height={40}
            priority
          />
          <span className="text-zinc-400 text-6xl">|</span>
          <span className="text-5xl font-semibold">
            <p> Welcome to locaT-DNA </p>
          </span>
        </header>

        <section className="mb-10 space-y-10">
          <h1 className="max-w-none text-5xl font-medium tracking-tight text-black dark:text-zinc-50">
            Determine the insertion site of your T-DNA mutants.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            LocaT-DNA identifies the genomic insertion site of T-DNA mutants from {" "}
            <a className="text-white font-bold">
              Nanopore
            </a>
            {" "} sequencing data.
          </p>
          <p className="max-w-md text-base leading-8 text-zinc-600 dark:text-zinc-400">
            Streamlining the mapping, annotation, and visualisation of your T-DNA insertion sites, leaving you to {" "}
            <a className="text-white font-bold">
              focus on discovery
            </a>
            {" "} rather than data processing.
          </p>
        </section>
        <Link
          href="/login"
          className="flex h-12 w-[158px] items-center justify-center rounded-full bg-foreground px-5 text-background"
        >
          📍 Let&apos;s Start!
        </Link>
      </main>
    </div>
  );
}
