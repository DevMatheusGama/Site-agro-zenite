import GridContainer from "../components/GridContainer";
import { FaRocket, FaEye, FaHeart, FaBullseye } from "react-icons/fa";

export default function page() {
    return (
        <main className="overflow-x-scroll">
            <GridContainer className="mt-18">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold text-green-800">Quem somos</h1>
                    <p className="ml-2">A AgroZénite é uma empresa especializada na venda de
                        maquinários, implementos e insumós agricolas, Nosso objetivo
                        e impulsionar o crescimento do agronegôcio brasileiro com equipamentos
                        modernos, produtos de qualidade e atendimento personalizado.
                        Desde o inicio, acreditamos que a força do campo move o páis,
                        e queremos fazer parte dessa transformação, oferecendo soluções
                        que aumentem a produtividade e facilitem o dia a dia do produtor
                        rural.</p>
                </div>
                <div className="flex flex-col gap-2 ml-10 mt-10">
                    <h2 className="flex items-center gap-4 text-4xl font-bold text-green-800">
                        <FaRocket className="text-green-800 text-4xl" />
                        <span>Nossa missão</span>
                    </h2>
                    <p className="ml-13">Fornecer tecnologia, eficiéncia e confianca para o homem
                        do campo, garantindo que cada cliente tenha acesso aos
                        melhores equipamentos e insumos para alcançar o
                        máximo desempenho em sua produçáo.</p>
                </div>
                <div className="flex flex-col gap-2 ml-10 mt-10">
                    <h2 className="flex items-center gap-4 text-4xl font-bold text-green-800">
                        <FaEye className="text-green-800 text-4xl" />
                        <span>Nossa visão</span>
                    </h2>
                    <p className="ml-13">Ser reconhecida como uma das principais referéncias
                        no setor agro da região, unindo inovação, sustentabili-
                        dade e compromisso com o cliente.</p>
                </div>
                <div className="flex flex-col gap-2 ml-10 mt-10">
                    <h2 className="flex items-center gap-4 text-4xl font-bold text-green-800">
                        <FaHeart className="text-green-800 text-4xl" />
                        <span>Nossos valores</span>
                    </h2>
                    <p className="ml-13">Compromisso com o produtotor rural <br />
                        Qualidade em cada produto <br />
                        Honestidade e transparência nas negociaçoes <br />
                        Inovaçáo constante <br />
                        Sustentabilidade é respeito ao meio ambiente</p>
                </div>
                <div className="flex flex-col gap-2 ml-10 mt-10">
                    <h2 className="flex items-center gap-4 text-4xl font-bold text-green-800">
                        <FaBullseye className="text-green-800 text-4xl" />
                        <span>Onde queremos chegar</span>
                    </h2>
                    <p className="ml-13">A AgroZênite tem como objetivo se tornar uma das principais referências do agronegócio brasileiro, reconhecida pela inovação, qualidade e compromisso com o produtor rural.
                        Queremos ampliar nosso catálogo de produtos, fortalecer parcerias com marcas de confiança e levar tecnologia e eficiência para todas as regiões do país.
                        Nosso propósito é crescer lado a lado com o homem do campo, oferecendo soluções que aumentem a produtividade e contribuam para um futuro mais sustentável e próspero no agronegócio nacional.</p>
                </div>
            </GridContainer>
        </main>
    )
}