import Link from "next/link"

export default function Component() {
  return (
    <div className="w-64 h-64 relative overflow-hidden bg-zinc-900 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
      <Link aria-label="Open in Spotify player" href="#">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            alt="Album Cover"
            className="object-cover w-full h-full"
            height="256"
            src="/placeholder.svg"
            style={{
              aspectRatio: "256/256",
              objectFit: "cover",
            }}
            width="256"
          />
        </div>
        <div className="absolute inset-0 bg-zinc-900 bg-opacity-50 flex items-end p-4">
          <div className="text-zinc-200">
            <h3 className="text-lg font-semibold">Song Title</h3>
            <p className="mt-1">Artist Name</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
