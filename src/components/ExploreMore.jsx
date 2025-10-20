const exploremore = [
  {
    title: "Medium Blog",
    description: "Sharing insights on system design, security, and software engineering with real-world stories.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968885.png", // Medium icon
    url: "https://medium.com/@mounisha.makineni12",
  },
  {
    title: "LeetCode Profile",
    description: "A record of my journey solving algorithmic challenges and improving problem-solving skills.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png", // LeetCode logo
    url: "https://leetcode.com/u/Mounisha12/",
  },
  {
  title: "Design Patterns Repo",
  description: "Design patterns explained the way I understood them — practical, simplified, and filled with real-world analogies.",
  image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  url: "https://github.com/Mouni1205/LLD---DesignPatterns",
},
];

const ExploreMore = () => (
  <section id="exploremore" className="bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6 py-16 relative overflow-hidden">
    {/* Racing lines effect */}
    <div className="absolute inset-0 opacity-5 racing-stripes"></div>
    
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <h2 className="text-4xl font-bold mb-4 anime-slide">
        🌟 Beyond the Code
      </h2>
      <p className="text-gray-600 mb-12 anime-slide">Check out where else I'm geeking out 🔮✨</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exploremore.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`anime-card bg-white hover:shadow-2xl transition-all rounded-2xl p-8 border-2 border-gray-200 flex flex-col items-center group drift-in stagger-${index + 1} transform hover:scale-105`}
            style={{ '&:hover': { borderColor: '#FF8700' } }}
          >
            <div className="relative mb-6">
              <img
                src={item.image}
                alt={`${item.title} icon`}
                className="w-16 h-16 group-hover:scale-110 transition-transform squash-stretch-hover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors" style={{ '&:hover': { color: '#FF8700' } }}>
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm text-center leading-relaxed">
              {item.description}
            </p>
            <div className="mt-4 font-semibold group-hover:translate-x-2 transition-transform" style={{ color: '#F97316' }}>
              Explore →
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ExploreMore;

