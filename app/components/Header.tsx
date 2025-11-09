import Link from "next/link";
import Image from "next/image";
import GridContainer from "@/app/components/GridContainer"
import logoAgroZenite from '@/public/logoAgroZenite-Photoroom.png'

export default function Header() {
    return (
        <header className="w-full h-16 items-center flex justify-between bg-white fixed top-0 z-50 font-sans">
            <GridContainer className="flex items-center justify-between h-16 border-b bg-zinc-100">
                <Link href="/">
                    <Image
                        src={logoAgroZenite}
                        alt="Logo AgroZênite"
                        width={120}
                        height={64}
                        priority
                    />
                </Link>
                <nav className="flex gap-8 pr-3">
                    <Link href='/'><span className="text-lg font-semibold text-green-800">Home</span></Link>
                    <Link href='/contato'><span className="text-lg font-semibold text-green-800">Contato</span></Link>
                    <Link href='/sobre'><span className="text-lg font-semibold text-green-800">Sobre</span></Link>
                </nav>
            </GridContainer>
        </header>
    );
}