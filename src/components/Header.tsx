import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h2 className="text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
              КОНТЕНТ КОМНАТА
            </h2>
          </Link>
          <nav className="hidden md:flex gap-6">
            {[
              { path: "/", label: "Главная" },
              { path: "/about", label: "О студии" },
              { path: "/services", label: "Услуги" },
              { path: "/gallery", label: "Галерея" },
              { path: "/contacts", label: "Контакты" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://wa.me/79189188820?text=Здравствуйте!%20Хочу%20забронировать%20студию."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Забронировать
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
