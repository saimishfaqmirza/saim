// pages/Blog.tsx
export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition">
            
            <h2 className="text-xl font-semibold mb-2">
              Blog Post {item}
            </h2>

            <p className="text-gray-600 mb-3">
              This is a sample blog description. Learn React, Tailwind and modern web development.
            </p>

            <button className="text-blue-500 hover:underline">
              Read More →
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}