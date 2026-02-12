import type { Project } from "@/generated/prisma/client";

export function EmptyState() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-xl rounded-xl border border-zinc-800 bg-zinc-900 p-10 space-y-6 text-center">

        <h1 className="text-2xl font-semibold text-zinc-100">
          No Projects Yet
        </h1>

        <p className="text-zinc-400">
          Create a project to begin mapping T-DNA insertion
          sites from nanopore sequencing data.
        </p>

        <div className="text-left text-zinc-500 text-sm space-y-2">
          <p>Each project contains:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Uploaded nanopore reads</li>
            <li>Reference genome selection</li>
            <li>Alignment and insertion detection runs</li>
            <li>Results and genomic coordinates</li>
          </ul>
        </div>

        <button className="mt-4 rounded-md bg-sky-600 px-5 py-2 text-sm font-medium text-white hover:bg-sky-500 transition">
          + Create Project
        </button>

      </div>
    </div>
  );
}

export function NonEmptyState({ projects }: { projects: Project[] }) {
  return (
    <div>
      <h2>Your Projects</h2>
      <div>
        {projects.map((p) => (
          <div key={p.id}>{p.name}</div>
        ))}
      </div>
    </div>
  );
}
