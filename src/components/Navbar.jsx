const Navbar = () => {
  const links = ['about', 'experience', 'projects', 'skills', 'education', 'awards', 'exploremore', 'contact'];

  return (
    <nav className="sticky top-0 bg-cafe-cream/95 backdrop-blur border-b border-cafe-biscuit/50 shadow-sm z-50 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center flex-wrap gap-2 md:gap-4 text-sm font-semibold text-cafe-espresso">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="px-3 py-2 rounded-lg hover:text-cafe-cream transition-all duration-300 mclaren-nav-hover"
              >
                {link === 'exploremore' ? 'Explore more' : link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
