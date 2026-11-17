const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="logo" href="#home" aria-label="Abai Kali, home">
          AK<span>.</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
