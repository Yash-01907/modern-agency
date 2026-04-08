const stack = ["Next.js", "TypeScript", "Tailwind", "GSAP", "Motion", "Webflow"];

export function ClientLogos() {
  return (
    <div className="mt-16 md:mt-20">
      <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">
        Technology Stack
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-gray-200 px-4 py-3 text-center text-xs md:text-sm tracking-[0.18em] text-gray-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
