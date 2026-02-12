import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import type { Project } from "@/generated/prisma/client";
import { EmptyState, NonEmptyState } from "@/app/dashboard/projects/layoutVariants";

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }


  const email =
    session?.user?.email ??
    "test@example.com"; // DEV FALLBACK

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name: session.user.name ?? null,
    },
    include: { projects: true },
  });

  if (user.projects.length === 0) {
    return <EmptyState />;
  } else {
    return <NonEmptyState projects={user.projects} />;
  }

}
