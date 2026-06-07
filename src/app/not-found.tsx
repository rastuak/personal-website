import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper-100 dark:bg-paper-900 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600 dark:text-copper-400 mb-4">
          Error 404
        </p>
        <h1 className="font-serif italic text-5xl text-paper-900 dark:text-paper-100 mb-4">
          Page not found
        </h1>
        <p className="text-paper-700 dark:text-paper-300 mb-8">
          The page you are looking for does not exist. Maybe it was routed wrong
          in the layout, or maybe it never existed at all.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-paper-900 text-paper-50 dark:bg-paper-50 dark:text-paper-900 px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-copper-600 dark:hover:bg-copper-600 transition-colors"
        >
          Back home
        </Link>
      </div>
    </div>
  )
}
