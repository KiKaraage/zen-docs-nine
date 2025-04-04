import { buttonVariants } from "fumadocs-ui/components/api";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center w-full h-screen">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl transition-transform">
            404
          </h1>
          <p className="text-gray-500">
            Looks like you've ventured into the unknown digital realm.
          </p>
        </div>
        <Link
          className={buttonVariants({
            color: "outline",
          })}
          href="/"
        >
          Return to Docs
        </Link>
      </div>
    </div>
  );
}
