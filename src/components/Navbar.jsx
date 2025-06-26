const Navbar = () => {
  const links = ['about', 'experience', 'projects', 'skills', 'education', 'exploremore', 'contact'];

  return (
    <nav className="sticky top-0 bg-white shadow z-10 py-4">
      <ul className="flex justify-center space-x-6 text-sm font-semibold text-gray-700">
        {links.map(link => (
          <li key={link}>
            <a href={`#${link}`} className="hover:text-green-700 transition">
              {link.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
