'use client';

import {
  DocumentIcon,
  BeakerIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Samples',
    href: '/dashboard/samples',
    icon: BeakerIcon,
  },
  {
    name: 'Reference Genomes',
    href: '/dashboard/reference-genomes',
    icon: DocumentIcon,
  },
  {
    name: 'Jobs',
    href: '/dashboard/jobs',
    icon: ServerIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] items-center gap-3 rounded-md px-3 font-bold text-sm font-medium transition-colors",
              {
                // Active
                "bg-zinc-800 text-white": isActive,

                // Default
                "text-zinc-400 hover:bg-zinc-800 hover:text-white":
                  !isActive,
              }
            )}
          >
            <LinkIcon className="h-5 w-5 shrink-0" />
            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}

