import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import EventEmbed from "../components/EventEmbed";

const Events: NextPage = () => {
  return (
    <>
      <Head>
        <title>Events & Retreats - House of the Rising Mojo</title>
        <meta
          name="description"
          content="Join or host events at House of the Rising Mojo. Wellness retreats, breathwork, ecstatic dance, circles, concerts, and more."
        />
      </Head>
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Events & Retreats</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Our space weaves together wellness retreats, breathwork journeys, ecstatic dances, 
              women's and men's circles, concerts, and soulful community events.
            </p>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="py-12 md:py-24 px-4 bg-white text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Types of Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-primary">Wellness Retreats</h3>
                <p className="text-gray-700">
                  Transformative retreats focused on healing, growth, and personal development.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-primary">Breathwork Journeys</h3>
                <p className="text-gray-700">
                  Guided breathwork sessions for deep transformation and inner exploration.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-primary">Ecstatic Dance</h3>
                <p className="text-gray-700">
                  Free-form movement and expression in a safe, judgment-free environment.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-primary">Women's & Men's Circles</h3>
                <p className="text-gray-700">
                  Sacred spaces for connection, sharing, and growth within gender-specific communities.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-primary">Yoga & Movement</h3>
                <p className="text-gray-700">
                  Regular classes and workshops for body awareness and physical wellbeing.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-primary">Concerts & Performances</h3>
                <p className="text-gray-700">
                  Live music, performances, and cultural events throughout the year.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-primary">Workshops</h3>
                <p className="text-gray-700">
                  Creative workshops including clay building, art, and regenerative practices.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-primary">Jam Sessions</h3>
                <p className="text-gray-700">
                  Musical gatherings and collaborative creative sessions.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-primary">Seasonal Gatherings</h3>
                <p className="text-gray-700">
                  Celebrations and regenerative gatherings aligned with natural cycles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 md:py-24 px-4 bg-secondary text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Upcoming Events</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <EventEmbed />
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                Follow us on Instagram for the latest event announcements and updates.
              </p>
              <Link
                href="https://www.instagram.com/houseoftherisingmojo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 min-h-[44px] flex items-center justify-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation"
              >
                Follow on Instagram
              </Link>
            </div>
          </div>
        </section>

        {/* Host an Event Section */}
        <section className="py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Host an Event at The Mojo</h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Space</h3>
                <p className="text-white/80 mb-4">
                  Our space is rustic, simple, and close to nature. Not a luxury venue, but a 
                  place where authentic experiences and community connection thrive.
                </p>
                <p className="text-white/80">
                  We prioritize larger retreats, gatherings, and collaborations (capacity ~150 in 
                  summer) and projects with an established community or network.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">What We Offer</h3>
                <p className="text-white/80 mb-4">
                  We are here to hold space for your vision with care and intention. Our facilities 
                  include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Yoga platform and dome for movement practices</li>
                  <li>Fire pit and outdoor gathering spaces</li>
                  <li>Living room with fireplace</li>
                  <li>Communal kitchen and dining areas</li>
                  <li>Beautiful natural surroundings</li>
                  <li>Accommodation options for participants</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Application Process</h3>
                <p className="text-white/80 mb-4">
                  To host an event, please provide:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>A short description of your project</li>
                  <li>Expected number of participants</li>
                  <li>Preferred dates</li>
                </ul>
                <p className="text-white/80 mt-4">
                  We welcome workshops, retreats, yoga and movement classes, women's and men's 
                  circles, ecstatic dance, clay building workshops, jam sessions, concerts, and 
                  seasonal and regenerative gatherings.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] flex items-center justify-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation"
              >
                Apply to Host an Event
              </Link>
            </div>
          </div>
        </section>

        {/* Rules & Expectations */}
        <section className="py-12 md:py-24 px-4 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Rules & Expectations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Community Values</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Respect shared spaces and others</li>
                  <li>• Maintain eco-friendly practices: composting, low waste</li>
                  <li>• Engage with nature and community with openness and curiosity</li>
                  <li>• Bring a positive attitude and willingness to adapt to rustic living conditions</li>
                </ul>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Environment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Drug- and alcohol-free environment</li>
                  <li>• Pets allowed; inform in advance</li>
                  <li>• Mysti the cat is resident and part of the community</li>
                  <li>• Focus on regenerative culture, embodiment, connection, and playfulness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Events;

