import GridContainer from "@/app/components/GridContainer";
import Image from 'next/image'
import Link from "next/link";

const cards = [
    {
        src: "/cards/cardMaquinario.png",
        alt: "card Maquinarios",
        href: "/maquinarios"
    },
    {
        src: "/cards/cardImplemento.png",
        alt: "card Implementos",
        href: "/implementos"
    },
    {
        src: "/cards/cardInsumo.png",
        alt: "card Insumos",
        href: "/insumos"
    },
];

function CatalogoProdutos() {
    return (
        <GridContainer className="mt-16 mb-16">
            <h2 className="text-2xl text-center font-mono font-black sm:text-5xl sm:text-start text-green-800">Catalogo de Produtos</h2>
            <div className="w-full flex flex-col justify-center items-center gap-4 mt-8 bg-gray-50 p-4 rounded-2xl shadow-inner sm:justify-between sm:flex-row">
                {cards.map((card, index) => (
                    <Link key={index} href={card.href} >
                        <div className="relative w-[350px] h-[290] lg:w-72 lg:h-64 md:w-52 md:h-52 sm:w-[170] sm:h-44">
                            <Image
                                src={card.src}
                                alt={card.alt}
                                fill
                                className="object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                priority
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </GridContainer >
    )
}

export default CatalogoProdutos