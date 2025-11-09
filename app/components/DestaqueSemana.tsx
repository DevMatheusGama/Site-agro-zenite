'use client'

import { useEffect, useState } from "react";
import GridContainer from "./GridContainer";
import axios from 'axios';
import CardProdutos from "./cardProdutos";

type ProdutosType = {
    id: number,
    nome: string,
    descricao: string,
    preco: string,
    imagens: string[],
    categoria: string
}

export default function DestaqueSemana() {
    const [produtos, setProdutos] = useState<ProdutosType[]>([])

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const response = await axios.get<ProdutosType[]>('http://localhost:3001/produtosDestaque')
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
        <GridContainer className="mt-16">
            <div className="flex flex-col font-sans">
                <h2 className="text-5xl font-mono font-black text-green-800">Destaques da semana</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                    {produtos.map((produto) => (
                        <CardProdutos key={produto.id} {...produto}/>
                    ))}
                </div>
            </div>
        </GridContainer>
    )
}