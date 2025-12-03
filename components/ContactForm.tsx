import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    age: "",
    instagram: "",
    website: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend API
    // For now, we'll just show a success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        location: "",
        age: "",
        instagram: "",
        website: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="name" className="block text-sm sm:text-base font-semibold mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3.5 sm:py-3 text-base sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm sm:text-base font-semibold mb-2">
            Where are you from? *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3.5 sm:py-3 text-base sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="age" className="block text-sm sm:text-base font-semibold mb-2">
            Age *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-3.5 sm:py-3 text-base sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm sm:text-base font-semibold mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3.5 sm:py-3 text-base sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="instagram" className="block text-sm sm:text-base font-semibold mb-2">
            Instagram / Website
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="@username or website URL"
            className="w-full px-4 py-3.5 sm:py-3 text-base sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm sm:text-base font-semibold mb-2">
            Website (if different)
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3.5 sm:py-3 text-base sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm sm:text-base font-semibold mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about yourself, what brings you to The Mojo, or what you'd like to inquire about..."
          className="w-full px-4 py-3.5 sm:py-3 text-base sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation resize-y"
        />
      </div>

      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm sm:text-base">
          Thank you! We'll get back to you soon. Please note: requests should be sent via email to avoid cross-messaging.
        </div>
      )}

      <button
        type="submit"
        className="w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4 min-h-[44px] flex items-center justify-center bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors touch-manipulation text-base sm:text-base"
      >
        Send Message
      </button>
    </form>
  );
}

