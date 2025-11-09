'use client'

import GridContainer from "../components/GridContainer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react";

const schema = z.object({
    nome: z.string().min(3, "Nome muito curto"),
    email: z.string().email("Digite um email valido"),
    mensagem: z.string().min(3, "Mensagem muito curta")
})

type FormData = z.infer<typeof schema>

export default function page() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    async function EnviarMensagem(data: FormData) {
        try {
            setStatus("sending")
            setStatus("success")
            reset()
        } catch (error) {
            setStatus("error")
        } finally {
            setTimeout(() => setStatus("idle"), 3000)
        }
    }
    return (
        <main>
            <GridContainer className="mt-18">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl font-bold text-green-800">Fale conosco</h2>
                    <p className="">Tem duvidas, quer solicitar um orçamento ou saber mais sobre nossos produtos? Entre em contato com nossa equipe - estamos prontos para te atender!</p>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <h3 className="text-2xl font-bold text-green-800">Formas de contato</h3>
                    <div className="flex flex-col gap-2">
                        <p className="flex items-center gap-3"><FaPhoneAlt className="text-green-900 text-lg" /> (99) 99999-9999</p>
                        <p className="flex items-center gap-3"><FaEnvelope className="text-green-900 text-lg" /> agrozenitecontato@gmail.com</p>
                        <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-green-900 text-lg" /> Rua 6, Pedrinhas, Xique-Xique Ba, N.º20</p>
                    </div>
                    <div>
                        <a
                            href="https://api.whatsapp.com/send?phone=5574991004879&text=Ol%C3%A1%2C%20Agro%20Z%C3%AAnite!%20%F0%9F%9A%9C%F0%9F%8C%B1%0A%0ACheguei%20at%C3%A9%20voc%C3%AAs%20atrav%C3%A9s%20do%20link%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.%20Meu%20interesse%20principal%20%C3%A9%3A%0A%0A1.%20%20Implementos%20e%20Maquin%C3%A1rios%20(Tratores%2C%20colheitadeiras%2C%20etc.)%0A2.%20%20Insumos%20Agr%C3%ADcolas%20(Fertilizantes%2C%20sementes%2C%20defensivos%2C%20etc.)%0A3.%20%20Outro%20assunto%0A%0APor%20favor%2C%20me%20ajudem%20a%20encontrar%20o%20que%20preciso!%0A%0A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
                        >
                            <FaWhatsapp className="text-2xl" />
                            <span>Falar no WhatsApp</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <form onSubmit={handleSubmit(EnviarMensagem)} className="flex flex-col gap-2">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            {...register("nome")}
                            id="nome"
                            placeholder="Nome:"
                            className="border p-3 rounded-lg"
                        />
                        {errors.nome && (
                            <p className="text-red-600 text-sm">{errors.nome.message}</p>
                        )}
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            id="email"
                            placeholder="Email:"
                            className="border p-3 rounded-lg"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm">{errors.email.message}</p>
                        )}
                        <label htmlFor="mensagem">Deixe uma mensagem</label>
                        <textarea
                            id="mensagem"
                            {...register("mensagem")}
                            placeholder="Digite sua mensagem..."
                            className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2"
                        ></textarea>
                        {errors.mensagem && (
                            <p className="text-red-600 text-sm">{errors.mensagem.message}</p>
                        )}
                        <button type="submit" className="w-40 bg-green-700 p-2 rounded-lg">
                            {status === "sending" ? "Enviando..." : "Enviar"}
                        </button>

                        {status === "success" && (
                            <p className="text-green-800 mt-2">Mensagem enviada com sucesso!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 mt-2">Erro ao enviar mensagem.</p>
                        )}
                    </form>
                </div>
            </GridContainer>
        </main>
    )
}