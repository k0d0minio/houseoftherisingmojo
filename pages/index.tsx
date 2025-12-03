import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>House of the Rising Mojo - A Sanctuary for Connection, Healing & Growth</title>
        <meta
          name="description"
          content="A vibrant community space and living sanctuary in Santo Isidoro, Portugal, offering a nurturing environment for transformative events."
        />
      </Head>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/gallery/sunset.jpg"
              alt="House of the Rising Mojo"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 py-12 md:py-24 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              House of the Rising Mojo
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 md:mb-4 font-light">
              A sanctuary for connection, healing & growth
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto px-2">
              Nestled in the lush hills of Santo Isidoro, Portugal, we welcome you into our 
              rustic sanctuary where hearts meet, bodies move, and spirits rise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/accommodation"
                className="px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] flex items-center justify-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation"
              >
                Stay With Us
              </Link>
              <Link
                href="/events"
                className="px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] flex items-center justify-center border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation"
              >
                Join an Event
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Welcome to The Mojo</h2>
                <p className="text-base md:text-lg text-white/80 mb-3 md:mb-4">
                  The House of the Rising Mojo is a vibrant community space and living sanctuary, 
                  offering a nurturing environment for transformative events.
                </p>
                <p className="text-base md:text-lg text-white/80 mb-4 md:mb-6">
                  Rooted in regenerative values and community living, the Mojo welcomes people from 
                  all walks of life to gather, awaken inner wisdom, and co-create a more harmonious world.
                </p>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 min-h-[44px] flex items-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation"
                >
                  Learn More
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/gallery/mojo (5).jpg"
                  alt="Community space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-12 md:py-24 px-4 bg-secondary text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Community Living</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Experience simple, heart-centered living close to nature. Stay in our rustic 
                  sanctuary, share meals, tend the garden, and take part in daily life at the Mojo.
                </p>
                <Link
                  href="/accommodation"
                  className="text-primary font-semibold hover:underline text-sm md:text-base"
                >
                  Learn more →
                </Link>
              </div>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Events & Retreats</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Wellness retreats, breathwork journeys, ecstatic dances, women's and men's circles, 
                  concerts, and soulful community events designed to nurture connection and transformation.
                </p>
                <Link
                  href="/events"
                  className="text-primary font-semibold hover:underline text-sm md:text-base"
                >
                  View events →
                </Link>
              </div>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Manual Therapy</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  The Mojo is a sanctuary for healing and care. Osteopathy and massotherapy sessions 
                  invite you to reconnect with your natural balance, supporting deep relaxation and wellbeing.
                </p>
                <Link
                  href="/contact"
                  className="text-primary font-semibold hover:underline text-sm md:text-base"
                >
                  Book a session →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Find Us</h2>
            <p className="text-lg md:text-xl text-white/80 mb-3 md:mb-4">
              Calçada do Cravo 1, 2640-086 Santo Isidoro, Portugal
            </p>
            <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8">
              Located in nature near Ericeira, just 5 minutes drive to the ocean or a scenic 30-minute walk.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] flex items-center justify-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
