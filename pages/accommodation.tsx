import type { NextPage } from "next";
import Head from "next/head";
import AccommodationCard from "../components/AccommodationCard";

const Accommodation: NextPage = () => {
  return (
    <>
      <Head>
        <title>Accommodation - House of the Rising Mojo</title>
        <meta
          name="description"
          content="Stay at House of the Rising Mojo - rustic accommodations in Santo Isidoro, Portugal. Choose from wooden cabins, bell tents, or private rooms."
        />
      </Head>
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Accommodation</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Welcome to our sanctuary for connection, healing & growth. Located in nature near Ericeira, 
              Portugal, the Mojo is a soulful oasis for rest and inspiration.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-12 md:py-16 px-4 bg-secondary text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">Facilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access to shared kitchen & facilities</li>
                  <li>• Beautiful natural surroundings</li>
                  <li>• Use of communal spaces: yoga platform, dome, fire pit, living room with fireplace</li>
                  <li>• 5 min drive to the ocean or scenic 30 min walk</li>
                  <li>• A vibrant, heart-centered community atmosphere</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">Add-ons Available</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Osteopathy, massage & holistic treatments</li>
                  <li>• Weekly women & men's circles</li>
                  <li>• Yoga, movement, or dance sessions</li>
                  <li>• Private cacao ceremonies</li>
                  <li>• Event or retreat participation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation Options */}
        <section className="py-12 md:py-24 px-4 bg-white text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Accommodation Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AccommodationCard
                title="Wooden Cabin"
                image="/gallery/Accomodation Sky Cabin.jpeg"
                description="A charming, self-contained space ideal for privacy and nature connection."
                pricing={{
                  night: "€75",
                  week: "€300",
                  twoWeeks: "€450",
                  threeWeeks: "€550",
                  month: "€700",
                  monthWinter: "€600",
                  twoPeople: {
                    night: "€95",
                    week: "€70",
                  },
                }}
              />
              <AccommodationCard
                title="Bell Tent"
                image="/gallery/Accomodation Wood Van.jpeg"
                description="Cozy glamping tents for a magical experience under the stars. Perfect for solo travelers or couples looking for a cozy stay."
                pricing={{
                  night: "€40",
                  week: "€200",
                  twoWeeks: "€350",
                  threeWeeks: "€450",
                  month: "€550",
                  twoPeople: {
                    night: "€60",
                    week: "€50",
                  },
                }}
              />
              <AccommodationCard
                title="Private Rooms"
                image="/gallery/Accomodation Earth Room.jpeg"
                description="Earth room, Water room, Fire room, Air room (outdoor hut) - comfortable private spaces in our main house."
                pricing={{
                  night: "€50",
                  week: "€250",
                  twoWeeks: "€400",
                  threeWeeks: "€500",
                  month: "€600",
                  monthWinter: "€500",
                  twoPeople: {
                    night: "€70",
                    week: "€60",
                  },
                }}
              />
            </div>
            <p className="text-center text-gray-600 mt-8">
              *Winter pricing applies from start of November till end of April
            </p>
          </div>
        </section>

        {/* Important Details */}
        <section className="py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Important Details</h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Rustic & Simple</h3>
                <p className="text-white/80">
                  This is not a luxury stay. It's close to nature, raw, earthy, and rootsy. 
                  Perfect for people who love simplicity, raw beauty, earthy vibes, and immersive 
                  experiences in community.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Facilities</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• <strong>Showers:</strong> One warm shower to share, plus cold showers (cold showers build character!)</li>
                  <li>• <strong>Toilets:</strong> One shared indoor toilet in the house plus two eco-friendly compost toilets tucked around the land</li>
                  <li>• <strong>Kitchen:</strong> Semi-outdoor kitchen for cooking with fresh air; occasional curious gecko</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Internet & Environment</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• <strong>Internet:</strong> No WiFi by choice; phone data works. Coworking options in Ericeira: Makai, Breakpoint, Hurley's, Ospot</li>
                  <li>• <strong>Environment:</strong> Drug- and alcohol-free</li>
                  <li>• <strong>Climate:</strong> Can get humid if it rains; pack cozy layers and an open mindset</li>
                  <li>• <strong>Parking:</strong> Camper vans welcome, 10€/night during larger events (includes communal facilities)</li>
                  <li>• <strong>Pets:</strong> Allowed; inform in advance. Mysti the cat is resident and part of the community</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 px-4 bg-secondary text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Stay With Us?</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
              Experience simple, heart-centered living close to nature. Book your stay today.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] flex items-center justify-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation"
            >
              Contact Us to Book
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Accommodation;

