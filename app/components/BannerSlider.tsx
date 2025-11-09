'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const banners = [
    { src: '/banners/bannerTratores.png', alt: 'banner tratores' },
    { src: '/banners/bannerImplementos.png', alt: 'banner implementos' },
    { src: '/banners/bannerInsumos.png', alt: 'banner insumos' },
]

export default function BannerSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        const interval = setInterval(() => emblaApi.scrollNext(), 4000)
        emblaApi.on('select', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
            clearInterval(interval)
        }
    }, [emblaApi, onSelect])

    return (
        <div className="relative w-full overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className="flex-[0_0_100%] relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl"
                    >
                        <Image
                            src={banner.src}
                            alt={banner.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
            >
                <FaChevronLeft size={20} />
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
            >
                <FaChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {banners.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaApi && emblaApi.scrollTo(i)}
                        className={`w-3 h-3 rounded-full transition ${i === selectedIndex ? 'bg-white' : 'bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
