import { copy } from "@/lib/content";

export default function HowToParticipatePage() {
  return (
    <section className="mx-auto flex min-h-[48vh] max-w-7xl flex-col justify-center px-5 py-16 sm:px-8">
      <h1 className="font-serif text-4xl font-medium sm:text-5xl">
        {copy.participation.heading}
      </h1>
      <p className="mt-4 text-base leading-7 text-muted">
        {copy.participation.comingSoon}
      </p>
    </section>
  );
}