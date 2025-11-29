import Link from "next/link";
import { BlogThemeToggle } from "./blog-theme-toggle";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-purple-500 dark:border-purple-400 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 sm:py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <span className="hidden sm:inline">ThemeCraft</span>
          <span className="sm:hidden">THEMECRAFT</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-base text-gray-900 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all font-bold"
          >
            <span className="hidden sm:inline">Home</span>
            <span className="sm:hidden">H</span>
          </Link>
          <Link
            href="/posts"
            className="px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-base text-gray-900 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all font-bold"
          >
            <span className="hidden sm:inline">Posts</span>
            <span className="sm:hidden">P</span>
          </Link>
          <BlogThemeToggle />
        </div>
      </div>
    </nav>
  );
}
