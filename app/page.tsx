import BannerSlider from "./components/BannerSlider";
import CatalogoProdutos from "./components/CatalogoProdutos";
import DestaqueSemana from "./components/DestaqueSemana";
import GridContainer from "./components/GridContainer";

export default function Home() {
  return (
    <main className="mt-20">
      <GridContainer className="flex flex-col">
        <BannerSlider />
        <CatalogoProdutos />
        <hr className="w-full border-t border-gray-300 my-4" />
        <DestaqueSemana />
      </GridContainer>
    </main>
  );
}
