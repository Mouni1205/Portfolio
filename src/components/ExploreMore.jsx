const exploremore = [
  {
    title: "Medium Blog",
    description: "Thoughts on system design, security, and software engineering.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968885.png",
    url: "https://medium.com/@mounisha.makineni12",
  },
  {
    title: "LeetCode Profile",
    description: "Algorithm practice and problem solving.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    url: "https://leetcode.com/u/Mounisha12/",
  },
  {
    title: "Design Patterns Repo",
    description: "Design patterns explained in a simple, practical way.",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    url: "https://github.com/Mouni1205/LLD---DesignPatterns",
  },
];

const ExploreMore = () => (
  <section id="exploremore" className="bg-cafe-cream px-6 py-16 relative overflow-hidden border-t border-cafe-biscuit/40">
    <div className="absolute inset-0 opacity-20 racing-stripes" />

    <div className="max-w-6xl mx-auto text-center relative z-10">
      <h2 className="font-serif text-4xl font-bold mb-2 text-cafe-espresso anime-slide">
        More
      </h2>
      <p className="text-cafe-roast mb-12 anime-slide">Other places I hang out online.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exploremore.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="anime-card bg-white/90 border border-cafe-biscuit/50 rounded-2xl p-8 flex flex-col items-center group drift-in hover:shadow-md hover:border-cafe-roast/40 transition-all transform hover:scale-[1.02]"
          >
            <div className="relative mb-6">
              <img
                src={item.image}
                alt=""
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-cafe-espresso group-hover:text-cafe-roast transition-colors">
              {item.title}
            </h3>
            <p className="text-cafe-brown text-sm text-center leading-relaxed">{item.description}</p>
            <div className="mt-4 font-semibold text-cafe-roast group-hover:translate-x-1 transition-transform">
              Visit →
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ExploreMore;
