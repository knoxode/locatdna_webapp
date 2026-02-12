import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/projects/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col border-r border-zinc-800 bg-zinc-900 px-3 py-4 md:px-2">

      {/* Logo / Brand */}
      <Link
        className="mb-4 flex h-20 items-center justify-start rounded-md bg-zinc-800 px-4 md:h-24"
        href="/dashboard"
      >
        <div className="text-lg font-semibold text-zinc-100">
          LocatDNA
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex grow flex-col space-y-2">
        <NavLinks />

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Sign Out */}
        <form>
          <button className="flex h-[48px] w-full items-center justify-start gap-2 rounded-md bg-zinc-800 px-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-700 hover:text-white">
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}

