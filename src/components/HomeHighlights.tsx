export function HomeHighlights() {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        What We’re Building
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">📚 Education</h3>
          <p className="text-gray-600">
            Beginner-friendly workshops, QuQuiz, and talks introducing quantum
            concepts to students and professionals.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">🤝 Community</h3>
          <p className="text-gray-600">
            A growing network of 35+ members on WhatsApp, LinkedIn, and X
            engaging with global quantum experts.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">🌍 Innovation</h3>
          <p className="text-gray-600">
            Collaborating with African and global quantum initiatives to put
            Uganda on the global quantum map.
          </p>
        </div>
      </div>
    </section>
  );
}
