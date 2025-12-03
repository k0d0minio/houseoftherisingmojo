import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - House of the Rising Mojo</title>
        <meta
          name="description"
          content="Get in touch with House of the Rising Mojo. Contact us for accommodation bookings, event hosting, or general inquiries."
        />
      </Head>
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Have questions? Want to book accommodation or host an event? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-24 px-4 bg-white text-black">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Send Us a Message</h2>
            <div className="bg-secondary p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
            <p className="text-center text-gray-600 mt-6">
              <strong>Note:</strong> Requests should be sent via email only to avoid cross-messaging on WhatsApp/Instagram.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 md:py-24 px-4 bg-secondary text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Connect With Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Location</h3>
                <p className="text-gray-700 mb-4">
                  Calçada do Cravo 1<br />
                  2640-086 Santo Isidoro<br />
                  Portugal
                </p>
                <p className="text-sm text-gray-600">
                  Located in nature near Ericeira, just 5 minutes drive to the ocean or a scenic 30-minute walk.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Social Media</h3>
                <div className="space-y-4">
                  <Link
                    href="https://www.instagram.com/houseoftherisingmojo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 min-h-[44px] flex items-center justify-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation"
                  >
                    Follow on Instagram
                  </Link>
                  <Link
                    href="https://linktr.ee/houseoftherisingmojo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 min-h-[44px] flex items-center justify-center border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 active:bg-primary/20 transition-colors touch-manipulation"
                  >
                    View Linktree
                  </Link>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Community</h3>
                <p className="text-gray-700 mb-4">
                  Join our WhatsApp group for weekly program updates and community announcements.
                </p>
                <Link
                  href="https://chat.whatsapp.com/K8S4FvxKRiAJJc16Htdb2c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 min-h-[44px] flex items-center justify-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation"
                >
                  Join WhatsApp Group
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Getting There Section */}
        <section className="py-12 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Getting There</h2>
            <div className="bg-white/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">From Lisbon</h3>
              <p className="text-lg text-white/80 mb-4">
                Take a bus from Lisbon to Ericeira (~50 minutes), then take a taxi or Bolt to 
                The Mojo (~10 minutes, ~5€). Car rental is also an option.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-primary mt-8">Travel Tips</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Pack layers and personal toiletries</li>
                <li>• Bring items for workshops if attending events</li>
                <li>• Come with an open mindset and readiness for rustic living</li>
                <li>• Check our Instagram for the latest updates and event schedules</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;

