'use client'

import { useEffect, useState } from "react";
import GridContainer from "../components/GridContainer";
import CardProdutos from "../components/cardProdutos";

type ProdutosType = {
    id: number,
    nome: string,
    descricao: string,
    preco: string,
    imagens: string[],
    categoria: string,
}

export default function Page() {
    const [produtos, setProdutos] = useState<ProdutosType[]>([])

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const response = await fetch("https://agro-zenite-api-1.onrender.com/insumos")
                const data = await response.json()
                setProdutos(data)
                console.log(data)
            } catch (error) {
                console.error('Erro ao buscar insumos:', error)
            }
        }

        fetchProdutos()
    }, [])

    return (
        <main>
            <GridContainer className="mt-24">
                <div className="flex flex-col font-sans">
                    <h2 className="text-5xl font-bold text-green-800">Insumos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                        {produtos.map((produto) => (
                            <CardProdutos key={produto.id} {...produto} />
                        ))}
                    </div>
                </div>
            </GridContainer>
        </main>
    )
}