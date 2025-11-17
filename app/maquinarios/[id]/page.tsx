import GridContainer from "@/app/components/GridContainer"
import VoltarButton from "@/app/components/VoltarButton"

import Image from "next/image"
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

type Props = {
    params: { id: string }
}

export async function generateStaticParams() {
    const res = await fetch("https://agro-zenite-api-1.onrender.com/maquinarios")

    if (!res.ok) return []

    const maquinarios = await res.json()

    return maquinarios.map((item: any) => ({
        id: item.id.toString()
    }))
}

export const revalidate = 60

export default async function page({ params }: Props) {
    const resolveParams = await params

    const res = await fetch(`https://agro-zenite-api-1.onrender.com/maquinarios/${resolveParams.id}`)

    if (!res.ok) {
        return (
            <GridContainer className="py-16">
                <p className="text-center text-red-600 text-xl">
                    Produto não encontrado.
                </p>
            </GridContainer>
        )
    }

    const produto = await res.json()

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
                                href={`https://api.whatsapp.com/send?phone=557491004879&text=Olá,%20Agro%20Zênite!%0A%0ATenho%20interesse%20no%20produto:%20${encodeURIComponent(
                                    `${produto.nome}\n\nVeja o produto aqui:\nhttps://site-agro-zenite.vercel.app/maquinarios/${produto.id}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition cursor-pointer"
                            >
                                Faça seu pedido pelo WhatsApp <FaWhatsapp size={28} />
                            </a>
                        </div>
                        <VoltarButton />
                    </div>
                </div>
            </div>
            <div className="mt-16 bg-gray-50 p-6 md:p-10 rounded-2xl shadow-inner">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    Especificações Técnicas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(produto.especificacoes).map(([chave, valor]) => (
                        <div
                            key={chave}
                            className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition"
                        >
                            <p className="text-gray-500 text-sm capitalize">
                                {chave.replace(/_/g, " ")}
                            </p>
                            <p className="text-gray-900 font-semibold mt-1">{String(valor)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </GridContainer>
    )
}