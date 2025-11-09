import Image from "next/image";
import GridContainer from "./GridContainer";
import logoAgroZenite from '@/public/logoAgroZenite-Photoroom.png'
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-10">
            <GridContainer className="bg-zinc-100 p-8 border-t">
                <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
                    <section className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                        <Image
                            src={logoAgroZenite}
                            alt="Logo AgroZênite"
                            width={180}
                            height={70}
                            priority
                        />
                        <p className="text-zinc-700 text-sm md:text-base max-w-xs">
                            Especializada em maquinários, implementos e insumos agrícolas.
                        </p>
                    </section>
                    <section className="flex flex-col items-center md:items-start">
                        <h2 className="text-2xl font-bold text-green-800 mb-3">Links</h2>
                        <div className="flex flex-col space-y-2 text-center md:text-left">
                            <Link href="/" className="font-medium hover:text-green-700 transition">Home</Link>
                            <Link href="/sobre" className="font-medium hover:text-green-700 transition">Sobre</Link>
                            <Link href="/contato" className="font-medium hover:text-green-700 transition">Contato</Link>
                            <Link href="/maquinarios" className="font-medium hover:text-green-700 transition">Maquinários</Link>
                            <Link href="/insumos" className="font-medium hover:text-green-700 transition">Insumos</Link>
                            <Link href="/implementos" className="font-medium hover:text-green-700 transition">Implementos</Link>
                        </div>
                    </section>
                    <section className="flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-2xl font-bold text-green-800 text-center md:text-left">
                            Formas de contato
                        </h3>
                        <div className="flex flex-col gap-2 text-zinc-700 text-sm md:text-base">
                            <p className="flex items-center gap-3"><FaPhoneAlt className="text-green-900 text-lg" /> (99) 99999-9999</p>
                            <p className="flex items-center gap-3"><FaEnvelope className="text-green-900 text-lg" /> agrozenitecontato@gmail.com</p>
                            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-green-900 text-lg" /> Rua 6, Pedrinhas, Xique-Xique BA, N.º 20</p>
                        </div>
                        <a
                            href="https://wa.me/5599999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20AgroZênite."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 transition"
                        >
                            <FaWhatsapp className="text-2xl" />
                            <span>Falar no WhatsApp</span>
                        </a>
                    </section>
                </div>
                <div className="border-t border-zinc-300 mt-10 pt-4 text-center text-sm text-zinc-600">
                    © {new Date().getFullYear()} AgroZênite. Todos os direitos reservados.
                </div>
            </GridContainer>
        </footer>
    );
}