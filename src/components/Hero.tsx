export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Quantum Uganda 🌍
      </h1>
      <p className="max-w-2xl text-lg md:text-xl mb-6">
        Building Africa’s Quantum Future — a community for students, developers,
        researchers, and tech enthusiasts to learn, share, and collaborate in
        quantum computing.
      </p>
      <a
        href="https://forms.gle/hoynMPs6FvfXnZEv9"
        target="_blank"
        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300"
      >
        Join the Community 🚀
      </a>
    </section>
  );
}
