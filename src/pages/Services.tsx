import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const whatsappLink = "https://wa.me/79189188820?text=Здравствуйте!%20Хочу%20забронировать%20студию.";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Услуги и цены</h1>

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
      </main>

      <Footer />
    </div>
  );
};

export default Services;
