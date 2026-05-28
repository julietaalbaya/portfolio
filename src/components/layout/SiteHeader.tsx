import { navItems } from '../../data/portfolio';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio">
        Portfolio
      </a>
      <nav className="main-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
