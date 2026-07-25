import Link from "next/link";

export default function BackHome() {
  return (
    <Link
      href="/"
      className="fixed left-5 top-5 z-50 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/90 px-5 py-3 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
    >
      ← Retour à l'accueil
    </Link>
  );
}