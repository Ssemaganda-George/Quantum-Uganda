export function HomeNewsletter() {
  return (
    <section className="py-16 px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 mb-6">
        Subscribe to get updates about upcoming events, expert talks, and
        community news.
      </p>
      <input
        type="email"
        placeholder="Your email address"
        className="px-4 py-2 border rounded-l-md w-2/3"
      />
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-500">
        Subscribe
      </button>
    </section>
  );
}
