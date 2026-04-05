"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";

type SequenceCanvasProps = {
    /** Optional external scroll progress (0–1). If not provided, falls back to page scroll. */
    progress?: MotionValue<number>;
};

export default function SequenceCanvas({ progress }: SequenceCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll(); // Fallback for pages that don't pass in a custom progress

    // Determine which scroll progress to use (external 600vh track or full-page fallback)
    const baseProgress = progress ?? scrollYProgress;

    // Apply physics-based momentum to the scroll progress
    const smoothProgress = useSpring(baseProgress, { stiffness: 80, damping: 25 });

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [windowReady, setWindowReady] = useState(false);

    useEffect(() => {
        const handleResizeState = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        handleResizeState();
        setWindowReady(true);
        window.addEventListener("resize", handleResizeState);
        return () => window.removeEventListener("resize", handleResizeState);
    }, []);

    // Preload all 192 images
    useEffect(() => {
        if (!windowReady) return;

        setIsLoaded(false);
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const folder = isMobile ? '/solar-panel-video-split-mobile' : '/sequence';

        // We render a small loading state until they are mostly loaded
        for (let i = 1; i <= 192; i++) {
            const img = new window.Image();
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `${folder}/ffout${paddedIndex}.gif`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === 192) {
                    setIsLoaded(true);
                }
            };
            // Fallback if some images error
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === 192) setIsLoaded(true);
            }
            loadedImages.push(img);
        }

        setImages(loadedImages);
    }, [isMobile, windowReady]);

    // Handle canvas resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                // Optimize for device pixel ratio for sharper images
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;
                const ctx = canvasRef.current.getContext("2d");
                if (ctx) ctx.scale(dpr, dpr);

                // Force a redraw of the current frame
                drawFrame(Math.min(191, Math.max(0, Math.floor(smoothProgress.get() * 192))));
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [smoothProgress, isLoaded, isMobile]);

    const drawFrame = (frameIndex: number) => {
        if (!canvasRef.current || images.length === 0) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const img = images[frameIndex];
        if (img && img.complete && img.naturalWidth > 0) {
            // Clear entire canvas
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            const canvasRatio = window.innerWidth / window.innerHeight;
            const imgRatio = img.naturalWidth / img.naturalHeight;

            let drawWidth = window.innerWidth;
            let drawHeight = window.innerHeight;
            let offsetX = 0;
            let offsetY = 0;

            // Adaptive scaling logic based on breakpoint
            if (isMobile) {
                // Contain logic so the full vertical animation fits on mobile
                if (canvasRatio > imgRatio) {
                    drawWidth = window.innerHeight * imgRatio;
                    offsetX = (window.innerWidth - drawWidth) / 2;
                } else {
                    drawHeight = window.innerWidth / imgRatio;
                    offsetY = (window.innerHeight - drawHeight) / 2;
                }
            } else {
                // Cover logic so no gaps remain on desktop
                if (canvasRatio > imgRatio) {
                    drawHeight = window.innerWidth / imgRatio;
                    offsetY = (window.innerHeight - drawHeight) / 2;
                } else {
                    drawWidth = window.innerHeight * imgRatio;
                    offsetX = (window.innerWidth - drawWidth) / 2;
                }
            }

            // Smooth interpolation for the scaling
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    };

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        const frameIndex = Math.min(191, Math.max(0, Math.floor(latest * 192)));
        drawFrame(frameIndex);
    });

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#FAF9F6] flex justify-center items-center">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover md:object-contain scale-110 md:scale-100"
                style={{ 
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectPosition: "center center",
                }}
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <div className="text-[#0A192F]/40 font-medium tracking-widest text-sm uppercase animate-pulse">
                        Initializing Sequences
                    </div>
                </div>
            )}
        </div>
    );
}
