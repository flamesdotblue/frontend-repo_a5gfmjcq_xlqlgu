import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: 29,
    caption: "For solo recruiters getting started",
    cta: "Start free",
    features: [
      "1 active job",
      "200 AI-source credits/mo",
      "Email outreach",
      "Basic pipeline"
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: 79,
    caption: "For growing teams that hire monthly",
    cta: "Start 14-day trial",
    features: [
      "Unlimited jobs",
      "1,500 AI-source credits/mo",
      "Email + LinkedIn sequences",
      "Collaboration & scorecards",
      "Integrations"
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 199,
    caption: "For agencies and large talent teams",
    cta: "Talk to sales",
    features: [
      "Custom credits & SLAs",
      "Advanced permissions",
      "SSO & audit logs",
      "Premium support"
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-slate-600">
            Choose a plan that scales with your pipeline. Cancel anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm transition ${
                tier.highlighted
                  ? "border-indigo-600 ring-2 ring-indigo-600"
                  : "border-slate-200 hover:shadow-md"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
                  Most popular
                </span>
              )}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{tier.caption}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">${tier.price}</span>
                <span className="text-sm text-slate-500">/ recruiter / month</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition ${
                  tier.highlighted
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700"
                    : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          Save 20% with annual billing. Prices exclude applicable taxes.
        </p>
      </div>
    </section>
  );
}
