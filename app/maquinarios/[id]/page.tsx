'use client'

import GridContainer from "@/app/components/GridContainer"
import axios from "axios"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

type ProdutoType = {
    id: number,
    nome: string,
    descricao: string,
    preco: string,
    condicao: string,
    categoria: string,
    imagens: string[],
    especificacoes: Record<string, string | number>
}

export default function page() {
    const [produto, setProduto] = useState<ProdutoType | null>(null)
    const { id } = useParams()
    const router = useRouter()

    useEffect(() => {
        async function fetchProduto() {
            try {
                const response = await axios.get<ProdutoType>(`https://agro-zenite-api-1.onrender.com/maquinarios/${id}`)
                const data = response.data
                setProduto(data)
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        }
        if (id) fetchProduto();
    }, [id])

    if (!produto) {
        return <p className="text-center mt-20 text-gray-500 text-lg">Carregando produto...</p>;
    }
    return (
        <GridContainer className="py-16">
            <div className="flex flex-col lg:flex-row gap-10 bg-white shadow-md rounded-2xl p-6 md:p-10">

                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src={produto.imagens[0]}
                        alt={produto.nome}
                        width={600}
                        height={450}
                        className="rounded-xl object-contain w-full h-auto max-h-[400px] bg-gray-50 p-4 transition-all duration-700 hover:scale-110"
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <span className="text-sm uppercase text-gray-500 tracking-wider">
                            {produto.categoria}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            {produto.nome}
                        </h1>

                        <p className="text-gray-700 mt-4 leading-relaxed">{produto.descricao}</p>

                        <div className="mt-6">
                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-sm font-semibold rounded-full">
                                {produto.condicao}
                            </span>
                        </div>

                        <div className="mt-8 flex items-baseline gap-2">
                            <p className="text-3xl md:text-4xl font-bold text-green-700">
                                {produto.preco}
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <div>
                            <a
                                href="https://api.whatsapp.com/send?phone=5574991004879&text=Ol%C3%A1%2C%20Agro%20Z%C3%AAnite!%20%F0%9F%9A%9C%F0%9F%8C%B1%0A%0ACheguei%20at%C3%A9%20voc%C3%AAs%20atrav%C3%A9s%20do%20link%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.%20Meu%20interesse%20principal%20%C3%A9%3A%0A%0A1.%20%20Implementos%20e%20Maquin%C3%A1rios%20(Tratores%2C%20colheitadeiras%2C%20etc.)%0A2.%20%20Insumos%20Agr%C3%ADcolas%20(Fertilizantes%2C%20sementes%2C%20defensivos%2C%20etc.)%0A3.%20%20Outro%20assunto%0A%0APor%20favor%2C%20me%20ajudem%20a%20encontrar%20o%20que%20preciso!%0A%0A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition cursor-pointer"
                            >
                                faça seu pedido pelo WhatsApp <FaWhatsapp size={28} />
                            </a>
                        </div>
                        <button onClick={() => router.back()} className="border border-gray-400 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-semibold transition shadow-lg">
                            Voltar
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-16 bg-gray-50 p-6 md:p-10 rounded-2xl shadow-inner">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Especificações Técnicas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(produto.especificacoes).map(([chave, valor]) => (
                        <div
                            key={chave}
                            className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition"
                        >
                            <p className="text-gray-500 text-sm capitalize">{chave}</p>
                            <p className="text-gray-900 font-semibold mt-1">{valor}</p>
                        </div>
                    ))}
                </div>
            </div>
        </GridContainer>
    )
}