// pages/Contact.tsx
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h1 className="text-2xl font-bold mb-4 text-center">
          Contact Us
        </h1>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded"
          />

          <textarea
            placeholder="Your Message"
            className="border p-2 rounded"
          />

          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}