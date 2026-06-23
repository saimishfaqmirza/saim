// pages/Home.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6">
      
      <h1 className="text-5xl font-bold mb-4">
        Welcome to My Website 🚀
      </h1>

      <p className="text-lg max-w-xl mb-6">
        This is a modern React + Tailwind website. Learn, build and grow your skills with real-world projects.
      </p>

      <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
        Get Started
      </button>

    </div>
  );
}