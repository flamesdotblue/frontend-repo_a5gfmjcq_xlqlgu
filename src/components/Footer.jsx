export default function Footer() {
  return (
    <footer id="cta" className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-bold">Ready to hire faster?</h3>
            <p className="mt-1 max-w-xl text-sm opacity-90">
              Start free in minutes, or book a live walkthrough with our team.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              View pricing
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Get started
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} HireOS Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
