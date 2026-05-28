"use client";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: "conversion",
      params: {
        send_to: string;
        event_callback?: () => void;
      }
    ) => void;
  }
}

const ContactForm = () => {
  const gtagReportConversion = (callback?: () => void) => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11430002689/WdNCCI-Jm6ocEIGAoMoq",
        event_callback: () => {
          if (callback) callback();
        },
      });
    } else {
      if (callback) callback();
    }

    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    gtagReportConversion(() => {
      alert("Message sent successfully!");
    });
  };

  const inputClasses = `
    mt-2 w-full rounded-xl border border-gray-200 bg-gray-50/50
    px-4 py-3 text-sm text-gray-900
    placeholder:text-gray-400
    focus:border-primary focus:bg-white focus:outline-none
    focus:ring-2 focus:ring-primary/15
    transition-all duration-200
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          required
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          required
          className={inputClasses}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell us how we can help you"
          required
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="
          w-full rounded-full bg-primary
          px-6 py-3.5 text-white font-semibold
          shadow-lg shadow-primary/20
          hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30
          transition-all duration-300
        "
      >
        Send Message
      </button>

      {/* Trust note */}
      <p className="text-xs text-gray-400 text-center">
        We respect your privacy. Your details will never be shared.
      </p>
    </form>
  );
};

export default ContactForm;