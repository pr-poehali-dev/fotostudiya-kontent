import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">КОНТЕНТ КОМНАТА</h2>
          <div className="hidden md:flex gap-6">
            {[
              { id: "home", label: "Главная" },
              { id: "about", label: "О студии" },
              { id: "services", label: "Услуги" },
              { id: "gallery", label: "Галерея" },
              { id: "reviews", label: "Отзывы" },
              { id: "blog", label: "Блог" },
              { id: "contacts", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors ${
                  activeSection === item.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
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
    </nav>
  );
};

const Index = () => {
  const whatsappLink = "https://wa.me/79189188820?text=Здравствуйте!%20Хочу%20забронировать%20студию.";

  return (
    <div className="min-h-screen">
      <Navigation />

      <section id="home" className="pt-24 pb-16 px-4">
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
        </div>
      </section>

      <Separator />

      <section id="about" className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">О нашей студии</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Единственная многофункциональная студия в Лазаревском районе Сочи с
              циклорамой, сменными фотозонами и профессиональным световым
              оборудованием.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "MapPin",
                title: "Расположение",
                desc: "Рядом с ж/д и автовокзалом, удобная парковка",
              },
              {
                icon: "Store",
                title: "Инфраструктура",
                desc: "Вкусно и точка, аквапарк, медицинские центры",
              },
              {
                icon: "Home",
                title: "Комфорт",
                desc: "Отопление зимой, горячая вода, кондиционер",
              },
              {
                icon: "Lightbulb",
                title: "Оборудование",
                desc: "Циклорама, фотозоны, профессиональный свет",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Icon name={item.icon} size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Услуги и цены</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <Icon name="Camera" size={36} className="mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Аренда фотостудии</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>1 час</span>
                    <span className="font-bold">2 000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>30 минут</span>
                    <span className="font-bold">1 500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4 часа</span>
                    <span className="font-bold">5 000₽</span>
                  </div>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Забронировать</Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Icon name="Baby" size={36} className="mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Детские фотопроекты</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Фотосессия 30 мин</span>
                    <span className="font-bold">6 000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Оформление фотозоны</span>
                    <span className="font-bold">от 1 000₽</span>
                  </div>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Забронировать</Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Icon name="User" size={36} className="mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Автопортрет</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>1 час</span>
                    <span className="font-bold">3 500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>30 минут</span>
                    <span className="font-bold">2 500₽</span>
                  </div>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Забронировать</Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Icon name="Aperture" size={36} className="mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Фотосессии</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Портрет 30 мин</span>
                    <span className="font-bold">5 500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Портрет 1 час</span>
                    <span className="font-bold">8 000₽</span>
                  </div>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Забронировать</Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Icon name="Palette" size={36} className="mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Мастер-классы</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Творческие МК</span>
                    <span className="font-bold">от 1 000₽</span>
                  </div>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Забронировать</Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Icon name="Mic" size={36} className="mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Подкасты</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>3 камеры + монтаж</span>
                    <span className="font-bold">20 000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2 телефона без монтажа</span>
                    <span className="font-bold">5 000₽</span>
                  </div>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Забронировать</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      <section id="gallery" className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://cdn.poehali.dev/projects/c7c79921-dbfb-4cf5-aae2-3b97afa9d1a7/files/a06cb303-d1a2-4ba2-b0f5-d77b51b0f6fd.jpg",
              "https://cdn.poehali.dev/projects/c7c79921-dbfb-4cf5-aae2-3b97afa9d1a7/files/788248f5-d8b4-4765-a90a-d45741c3d12f.jpg",
              "https://cdn.poehali.dev/projects/c7c79921-dbfb-4cf5-aae2-3b97afa9d1a7/files/ab598867-9ae1-47ca-bf62-c630e977e5f4.jpg",
            ].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={img}
                  alt={`Работа студии ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://ph-bagira.wfolio.pro/disk/kontent-komnata-sayt-cprcmt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Icon name="ExternalLink" size={18} className="mr-2" />
                Посмотреть все работы
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Separator />

      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Анна М.",
                text: "Прекрасная студия! Очень довольны детской фотосессией. Профессиональное оборудование и уютная атмосфера.",
                rating: 5,
              },
              {
                name: "Дмитрий К.",
                text: "Снимали подкаст — все на высшем уровне! Отличное качество звука и видео. Рекомендую!",
                rating: 5,
              },
              {
                name: "Елена В.",
                text: "Удобное расположение, вежливый персонал. Циклорама просто находка для профессиональных съемок!",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                      ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-bold">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section id="blog" className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Блог</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "Camera",
                title: "Как подготовиться к фотосессии в студии",
                desc: "Полезные советы для идеальных кадров: выбор одежды, макияж и позирование.",
              },
              {
                icon: "User",
                title: "Идеи для автопортрета",
                desc: "Креативные концепции и настройки камеры для самостоятельной съемки.",
              },
              {
                icon: "Baby",
                title: "Организация детской фотосессии",
                desc: "Как создать комфортную атмосферу для малышей и получить естественные эмоции.",
              },
              {
                icon: "Aperture",
                title: "Преимущества циклорамы в фотосъемке",
                desc: "Почему циклорама — must-have для профессиональных фотографов.",
              },
              {
                icon: "Users",
                title: "Как провести идеальный девичник в студии",
                desc: "Идеи для незабываемого мероприятия с подругами в творческой атмосфере.",
              },
              {
                icon: "Mic",
                title: "Создание качественного подкаста",
                desc: "Технические аспекты записи и монтажа профессионального подкаста.",
              },
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name={post.icon} size={32} className="mb-4 text-primary" />
                  <h3 className="font-bold mb-3 text-lg">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Сочи, п. Лазаревское, ул. Лазарева 108А
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <a
                      href="tel:+79189188820"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +7 (918) 918-88-20
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MessageCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Написать в WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Share2" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Социальные сети</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/kontent_komnata"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon name="Instagram" size={24} />
                      </a>
                      <a
                        href="https://vk.com/kontent_komnata"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon name="Facebook" size={24} />
                      </a>
                      <a
                        href="https://t.me/kontent_komnata"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon name="Send" size={24} />
                      </a>
                      <a
                        href="https://pin.it/2K2yUtCpo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon name="Image" size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Забронировать студию
                  </Button>
                </a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A62890013666&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта расположения студии"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-xl mb-2">КОНТЕНТ КОМНАТА</h3>
          <p className="text-sm opacity-80">
            Фотостудия в Лазаревском, Сочи · +7 (918) 918-88-20
          </p>
          <p className="text-xs opacity-60 mt-4">
            © 2024 Контент Комната. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
