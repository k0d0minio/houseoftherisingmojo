import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - House of the Rising Mojo</title>
        <meta
          name="description"
          content="Learn about House of the Rising Mojo, a community hub, retreat center, and event space in Santo Isidoro, Portugal."
        />
      </Head>
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">About The Mojo</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              A vibrant community space and living sanctuary, offering a nurturing environment for transformative events.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 md:py-24 px-4 bg-white text-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Philosophy</h2>
                <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                  Rooted in regenerative values and community living, the Mojo welcomes people from 
                  all walks of life to gather, awaken inner wisdom, and co-create a more harmonious world.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                  We are a rustic, earthy, regenerative space focused on community, creativity, and 
                  personal growth. Not a luxury stay — simplicity, raw beauty, and connection with 
                  nature are key values.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  Join us in this living temple where hearts meet, bodies move, and spirits rise.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/gallery/Common Spaces.jpeg"
                  alt="Community space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-secondary p-6 md:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Rustic & Real</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Authentic experiences over luxury. We embrace simplicity, raw beauty, and 
                  connection with nature as central to our identity.
                </p>
              </div>
              <div className="bg-secondary p-6 md:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Regenerative Approach</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Community, art, and nature as central pillars. We focus on sustainable living 
                  and regenerative practices.
                </p>
              </div>
              <div className="bg-secondary p-6 md:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Inclusive & Safe</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Drug- and alcohol-free, supportive of diverse backgrounds and ages. A space 
                  where everyone can feel welcome and safe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Community & Programs</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Weekly Programs</h3>
                <p className="text-base md:text-lg text-white/80 mb-4 md:mb-6">
                  Our weekly programs are shared via WhatsApp, keeping our community connected 
                  and informed about upcoming events, circles, and gatherings.
                </p>
                <Link
                  href="https://chat.whatsapp.com/K8S4FvxKRiAJJc16Htdb2c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 min-h-[44px] flex items-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation"
                >
                  Join WhatsApp Group
                </Link>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Stay Connected</h3>
                <p className="text-base md:text-lg text-white/80 mb-4 md:mb-6">
                  Follow us on Instagram for event announcements, photos, and inspiration. 
                  Our community includes international travelers, local Portuguese creatives, 
                  and retreat-goers.
                </p>
                <Link
                  href="https://www.instagram.com/houseoftherisingmojo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 min-h-[44px] flex items-center border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation"
                >
                  Follow on Instagram
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Embodied Experience Section */}
        <section className="py-12 md:py-24 px-4 bg-secondary text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Embodied Experience</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
              Movement, sound, dance, and circles are integral to our community. We focus on 
              regenerative culture, embodiment, connection, and playfulness.
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Women's & Men's Circles</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Sacred spaces for connection, sharing, and growth within gender-specific communities.
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Ecstatic Dance</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Free-form movement and expression in a safe, judgment-free environment.
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Yoga & Movement</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Regular classes and workshops for body awareness and physical wellbeing.
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Concerts & Events</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Live music, performances, and community gatherings throughout the year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Visit Us</h2>
            <p className="text-lg md:text-xl text-white/80 mb-3 md:mb-4">
              Calçada do Cravo 1, 2640-086 Santo Isidoro, Portugal
            </p>
            <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8">
              Located in nature near Ericeira, just 5 minutes drive to the ocean or a scenic 30-minute walk.
            </p>
            <div className="bg-white/5 p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Getting There</h3>
              <p className="text-white/80 mb-2">
                Bus from Lisbon to Ericeira (~50 min), then taxi/Bolt (~10 min, ~5€). Car rental optional.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

