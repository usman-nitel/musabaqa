import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventsSection } from "@/components/events/events-section";
import { ResultsSection } from "@/components/results/results-section";
import { RecitationsSection } from "@/components/recitations/recitations-section";
import { ArchiveCta } from "@/components/archive/archive-cta";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <div className="flex flex-col items-start">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-gold-ink sm:text-sm lg:mb-6">
          The home of Qur&apos;an competitions
        </p>
        <h1 className="max-w-xl font-serif text-5xl font-medium leading-[1.02] sm:text-6xl">
          <span className="block">Discover.</span>
          <span className="block">Participate.</span>
          {/* #B8832A is for large text only (3:1); small gold text must use #79530f. */}
          <span className="block text-[#B8832A]">Listen.</span>
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Find out how to take part in upcoming Musabaqa events.
        </p>
        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/events">
              Explore Events <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/recitations">Browse Recitations</Link>
          </Button>
        </div>
        <div className="mt-8 w-full max-w-md">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Illustrative sample figures
          </p>
          <dl className="grid grid-cols-3 divide-x divide-border">
            <div className="pr-3">
              <dt className="font-serif text-2xl font-medium text-primary">24</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">Events</dd>
            </div>
            <div className="px-3">
              <dt className="font-serif text-2xl font-medium text-primary">12</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">States</dd>
            </div>
            <div className="pl-3">
              <dt className="font-serif text-2xl font-medium text-primary">300+</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">Recitations</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="relative mx-auto aspect-[4/5] max-h-[440px] w-full max-w-[460px] overflow-hidden rounded-t-[50%] rounded-b-sm bg-[#e9ede6] lg:max-h-[560px] lg:max-w-[500px]">
        <Image
          src="/images/quran-hero.jpg"
          alt="An open Qur'an resting on a wooden stand"
          fill
          priority
          sizes="(min-width: 1024px) 500px, (min-width: 640px) 460px, calc(100vw - 40px)"
          className="object-cover"
        />
      </div>
      </section>
      <EventsSection />
      <ResultsSection />
      <RecitationsSection />
      <ArchiveCta />
    </>
  );
}