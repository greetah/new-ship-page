import { Suspense } from "react";
import NowPlaying from "./NowPlaying";
import Link from "next/link"

export default async function Component() {
  return (
    <div className="w-64 h-64 relative overflow-hidden bg-zinc-900 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
      <Link aria-label="Open in Spotify player" href="#">
        <Suspense fallback=" ">
              <NowPlaying />
            </Suspense>
      </Link>
    </div>
  )
}
