const Navbar = () => {
  const links = ['about', 'experience', 'projects', 'skills', 'education', 'awards', 'exploremore', 'contact'];

  return (
    <nav className="sticky top-0 bg-white shadow-lg z-50 py-4 border-b-4" style={{ borderColor: '#3B82F6' }}>
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center flex-wrap gap-4 text-sm font-bold text-gray-700">
          {links.map(link => (
            <li key={link}>
              <a 
                href={`#${link}`} 
                className="px-4 py-2 rounded-lg hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg mclaren-nav-hover"
                style={{ '--hover-bg': '#FF8700' }}
              >
                {link.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
