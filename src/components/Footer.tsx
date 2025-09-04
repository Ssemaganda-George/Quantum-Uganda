export function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Quantum Uganda — Building Africa’s Quantum
        Future
      </p>
      <div className="flex justify-center gap-4 mt-3">
        <a href="https://x.com/QuantumUganda" target="_blank">X</a>
        <a href="https://linkedin.com/company/quantum-uganda" target="_blank">LinkedIn</a>
        <a href="https://wa.me/yourwhatsapplink" target="_blank">WhatsApp</a>
      </div>
    </footer>
  );
}
