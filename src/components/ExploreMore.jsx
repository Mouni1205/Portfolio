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
  <section id="exploremore" className="bg-white px-6 py-16">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">Featured Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exploremore.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F5F5F5] hover:shadow-xl transition rounded-xl p-6 text-left border flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={`${item.title} icon`}
              className="w-14 h-14 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm text-center">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ExploreMore;

