import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacts = () => {
  const whatsappLink = "https://wa.me/79189188820?text=Здравствуйте!%20Хочу%20забронировать%20студию.";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Контакты</h1>
          
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
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
