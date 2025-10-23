import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">О нашей студии</h1>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Единственная многофункциональная студия в Лазаревском районе Сочи с
              циклорамой, сменными фотозонами и профессиональным световым
              оборудованием.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <img
              src="https://cdn.poehali.dev/projects/c7c79921-dbfb-4cf5-aae2-3b97afa9d1a7/files/788248f5-d8b4-4765-a90a-d45741c3d12f.jpg"
              alt="Интерьер студии"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <img
              src="https://cdn.poehali.dev/projects/c7c79921-dbfb-4cf5-aae2-3b97afa9d1a7/files/ab598867-9ae1-47ca-bf62-c630e977e5f4.jpg"
              alt="Оборудование студии"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Наши преимущества</h2>
          
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
      </main>

      <Footer />
    </div>
  );
};

export default About;
