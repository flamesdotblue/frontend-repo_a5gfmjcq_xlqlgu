import { Users, Search, BadgeCheck, Zap } from "lucide-react";

const features = [
  {
    title: "AI Sourcing",
    description: "Instantly surface top candidates across the web with role-aware, diversity-friendly filters.",
    icon: Search,
  },
  {
    title: "One-click Outreach",
    description: "Personalized multi-channel sequences that actually get replies — email, LinkedIn, SMS.",
    icon: Zap,
  },
  {
    title: "Collaborative Pipeline",
    description: "Move candidates from sourced to hired with notes, scorecards and structured stages.",
    icon: Users,
  },
  {
    title: "Quality you can trust",
    description: "Automated screening, enriched profiles and verifications to reduce bad fits.",
    icon: BadgeCheck,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for speed and signal
          </h2>
          <p className="mt-4 text-slate-600">
            Everything you need to discover, engage and hire the right talent — without the busywork.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
