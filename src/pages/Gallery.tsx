import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Наши работы</h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
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

          <h2 className="text-3xl font-bold mb-8 text-center">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
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

          <div className="text-center">
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
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
