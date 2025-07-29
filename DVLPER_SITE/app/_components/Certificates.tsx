'use client';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATES } from '@/lib/data';
import Image from 'next/image';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    useGSAP(() => {
        gsap.from('.certificate-name', {
            x: -100,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: 0.5,
            },
        });
    }, []);

    useEffect((): (() => void) => {
        let scrollAnimation: GSAPAnimation | undefined;
        if (!isPaused && scrollRef.current) {
            const scrollWidth = (scrollRef.current as HTMLDivElement).scrollWidth;
            scrollAnimation = gsap.to(scrollRef.current, {
                x: `-=${scrollWidth / 2}`,
                duration: 60,
                ease: 'linear',
                repeat: -1,
            });
        }
        return () => scrollAnimation?.kill();
    }, [isPaused]);

    const handleCertificateClick = (Image: string) => {
        setSelectedCertificate(Image as unknown as null);
        document.body.style.overflow = 'hidden';
        setIsPaused(true);
    };

    const handleCloseModal = () => {
        setSelectedCertificate(null);
        document.body.style.overflow = 'auto';
        setIsPaused(false);
    };

    return (
        <section id="certificates" ref={containerRef} className="py-10">
            <div className="container">
                <SectionTitle title="My Certificates" />
                <div className="overflow-hidden relative w-full">
                    <div
                        ref={scrollRef}
                        className="flex gap-20 whitespace-nowrap w-max">
                        {CERTIFICATES.concat(CERTIFICATES).map(
                            (certificate, index) => (
                                <p
                                    key={index}
                                    className="certificate-name text-6xl font-anton text-muted-foreground uppercase cursor-pointer hover:text-primary transition-colors duration-300"
                                    onMouseEnter={() =>
                                        handleCertificateClick(
                                            certificate.image,
                                        )
                                    }>
                                    {certificate.name}
                                </p>
                            ),
                        )}
                    </div>
                </div>
            </div>
            {selectedCertificate && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-50"
                    onClick={handleCloseModal}>
                    <div
                        className="relative p-4 bg-background rounded-lg max-w-3xl max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 text-white hover:text-primary transition-colors"
                            onClick={handleCloseModal}>
                            <X size={30} />
                        </button>
                        <Image
                            src={selectedCertificate}
                            alt="Certificate"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;