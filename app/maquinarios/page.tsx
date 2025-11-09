'use client'

import { useEffect, useState } from "react";
import GridContainer from "../components/GridContainer";
import axios from "axios";
import CardProdutos from "../components/cardProdutos";

type ProdutosType = {
    id: number,
    nome: string,
    descricao: string,
    preco: string,
    imagens: string[],
    categoria: string
}

export default function page() {
    const [produtos, setProdutos] = useState<ProdutosType[]>([])

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const response = await axios.get<ProdutosType[]>('https://agro-zenite-api-1.onrender.com/maquinarios')
                const data = response.data
                setProdutos(data)
                console.log(data)
            } catch (error) {
                console.error('Error ao buscar usuarios:', error)
            }
        }

        fetchProdutos()
    }, [])

    return (
        <main>
            <GridContainer className="mt-24">
                <div className="flex flex-col font-sans">
                                <h2 className="text-5xl font-bold text-green-800">Maquinários</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                                    {produtos.map((produto) => (
                                        <CardProdutos key={produto.id} {...produto}/>
                                    ))}
                                </div>
                            </div>
            </GridContainer>
        </main>
    )
}