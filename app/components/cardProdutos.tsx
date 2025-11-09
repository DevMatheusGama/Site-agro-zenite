import Image from "next/image";
import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";

type CardProdutosProps = {
        id: number,
        nome: string,
        descricao: string,
        preco: string,
        imagens: string[],
        categoria: string
}

export default function CardProdutos(produto: CardProdutosProps) {
    return (
        <div
            key={produto.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
        >

            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={produto.imagens[0]}
                    alt={produto.nome}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="flex flex-col grow p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-800 transition">
                    {produto.nome}
                </h3>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{produto.descricao}</p>

                <div className="mt-auto">
                    <p className="text-xl font-bold text-green-800 mt-4">{produto.preco}</p>

                    <Link href={`/${produto.categoria}/${produto.id}`} className="block mt-4">
                        <button className="w-full flex justify-center items-center gap-4 bg-green-800 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition cursor-pointer">
                            Ver detalhes <MdOutlineOpenInNew />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}