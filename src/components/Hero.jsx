import { Rocket, CheckCircle2, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* soft glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-15%] h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute left-[10%] top-[30%] h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-14 lg:py-28">
        {/* copy */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-1 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 shadow ring-1 ring-slate-200">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>New: AI sourcing + multi-channel outreach</span>
          </div>

          <h1 className="font-manrope text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Hire faster with a
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"> recruiter OS</span>
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Automate sourcing, personalize outreach, and run a collaborative pipeline end‑to‑end.
            Built for in‑house teams and agencies that move fast.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start free trial
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-50"
            >
              Book a live demo
            </a>
          </div>

          {/* social proof */}
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-slate-600 lg:justify-start">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>Rated 4.9/5 by recruiting teams</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70 lg:justify-start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6" />
            <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcG90aWZ5fGVufDB8MHx8fDE3NjE1MTAyNTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Spotify" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-5" />
            <img src="https://images.unsplash.com/photo-1617704548623-340376564e68?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZXNsYXxlbnwwfDB8fHwxNzYxNTEwMjU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tesla" className="h-6" />
          </div>
        </div>

        {/* preview card */}
        <div className="mt-14 flex-1 lg:mt-0">
          <div className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-md backdrop-blur-sm">
            <div className="rounded-xl bg-slate-900 p-6 text-left text-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Workflow Snapshot</p>
                  <p className="font-semibold">Source 200 candidates in 3 clicks</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="text-slate-400">Sourcing speed</p>
                  <p className="mt-2 text-2xl font-bold">5× faster</p>
                </div>
                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="text-slate-400">Reply rate</p>
                  <p className="mt-2 text-2xl font-bold">+38%</p>
                </div>
                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="text-slate-400">Time‑to‑hire</p>
                  <p className="mt-2 text-2xl font-bold">-41%</p>
                </div>
                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="text-slate-400">Cost‑per‑hire</p>
                  <p className="mt-2 text-2xl font-bold">-28%</p>
                </div>
              </div>
              <div className="mt-6 text-right text-xs text-slate-400">Based on early access cohort</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
