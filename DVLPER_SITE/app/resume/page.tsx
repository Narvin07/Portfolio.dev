'use client';
import Button from '@/components/Button';
import TransitionLink from '@/components/TransitionLink';
import { GENERAL_INFO } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import React, { useRef } from 'react';

const ResumePage = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    return (
        <section className="pt-5 pb-14">
            <div className="container">
                <TransitionLink
                    back
                    href="/"
                    className="mb-16 inline-flex gap-2 items-center group h-12">
                    <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
                    Back
                </TransitionLink>
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h1 className="text-4xl font-anton text-center md:text-left w-full">My Resume</h1>
                    <Button
                        as="link"
                        href={GENERAL_INFO.resume}
                        variant="primary"
                        className="mt-4 md:mt-0"
                        download>
                        Download
                    </Button>
                </div>
                <div className="relative" style={{ paddingTop: '56.25%', height: 0 }}>
                    <iframe
                        ref={iframeRef}
                        src={GENERAL_INFO.resume}
                        className="absolute top-0 left-0 w-full h-full border-0"
                        title="My Resume"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default ResumePage;