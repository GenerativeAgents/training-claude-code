export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-10">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Hello, world!</h1>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          CSS確認用：背景/文字色（globals.css の CSS変数）と Tailwind のクラスが効いてたらOK
        </p>

        <div className="rounded-xl border border-black/10 bg-white/60 p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
          <p className="font-mono text-sm">/src/app/page.tsx</p>
        </div>
      </div>
    </main>
  );
}
