import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const whatsappLink = "https://wa.me/79189188820?text=Здравствуйте!%20Хочу%20забронировать%20студию.";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  КОНТЕНТ КОМНАТА
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Фотостудия, медиацентр, творческая мастерская
                </p>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                  Студия для проведения подкастов, автопортретная. Аренда для
                  фотографов, детские фотосессии, мастер-классы, нетворкинги.
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-lg px-8">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Забронировать студию
                  </Button>
                </a>
              </div>
              <div className="animate-fade-in">
                <img
                  src="https://cdn.poehali.dev/projects/c7c79921-dbfb-4cf5-aae2-3b97afa9d1a7/files/a06cb303-d1a2-4ba2-b0f5-d77b51b0f6fd.jpg"
                  alt="Интерьер фотостудии"
                  className="rounded-lg shadow-2xl w-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                { icon: "Camera", title: "Аренда фотостудии", desc: "Для профессиональных фотографов" },
                { icon: "Baby", title: "Детские фотосессии", desc: "Декорированные проекты 0-5 лет" },
                { icon: "User", title: "Автопортрет", desc: "Самостоятельная съемка" },
                { icon: "Mic", title: "Съемка подкастов", desc: "3 камеры + монтаж" },
                { icon: "Palette", title: "Мастер-классы", desc: "Творческие занятия" },
                { icon: "Users", title: "Мероприятия", desc: "Нетворкинги и события" },
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name={service.icon} size={32} className="mb-4 text-primary" />
                    <h3 className="font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Смотреть все услуги и цены
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
