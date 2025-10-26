import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white antialiased text-slate-900">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white font-semibold">H</span>
            <span className="font-manrope text-lg font-extrabold tracking-tight">HireOS</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">Customers</a>
            <a href="#" className="hover:text-slate-900">Resources</a>
          </nav>
          <div className="hidden gap-3 sm:flex">
            <a href="#" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Log in</a>
            <a href="#pricing" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">Get started</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
