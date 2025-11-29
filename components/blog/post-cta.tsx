import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function PostCTA() {
  return (
    <Card className="border-2 border-purple-500 dark:border-purple-600 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
      <CardContent className="py-8 px-4 sm:py-12 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Code Theme Editor
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Create and export beautiful themes for your favorite code editors.
          Perfect for VSCode, Cursor, Zed, Neovim, and Helix with one-click
          export.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          Design Your Theme Now →
        </Link>
      </CardContent>
    </Card>
  );
}
