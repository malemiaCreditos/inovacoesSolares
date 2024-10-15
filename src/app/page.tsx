import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HomeCabecalho from "../components/header/homeCabecalho";
import ProdutosHomePage from "../components/produtos/produtos";
import Promocao from "../components/promo/promocao";
import ElasticCarousel from "../components/carousels/elastic";
import { EmblaCarousel } from "../components/carousels/carousel";
import { EmblaCarousel2 } from "@/components/carousels/carousel2";
import Section1 from "@/components/sections/section1";
import { TabsDemo } from "@/components/tabs/TabsDemo";
import { ImagesSliderDemo } from "@/components/carousels/ImagesSliderDemo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HomeCabecalho />
      <div className="drop-shadow-2xl w-full mt-36">
        <hr />
      </div>
      <ProdutosHomePage />
      <div className="my-4">
        <ElasticCarousel />
      </div>
      {/* <Section1 /> */}
      <div className="container lg:mx-auto lg:min-h-50vh my-12">
        <TabsDemo />
      </div>
      <div className="container lg:mx-auto lg:min-h-50vh my-12">
        <ImagesSliderDemo />
      </div>
      {/* <div className="container lg:mx-auto lg:min-h-50vh my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <EmblaCarousel />
          </div>
          <div>
            <EmblaCarousel2 />
          </div>
        </div>
      </div> */}

      <Footer />
    </main>
  );
}
