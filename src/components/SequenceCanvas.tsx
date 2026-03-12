"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";

export default function SequenceCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll(); // Tracks the entire page scroll by default

    // Apply physics-based momentum to the scroll progress
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload all 192 images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        // We render a small loading state until they are mostly loaded
        for (let i = 1; i <= 192; i++) {
            const img = new window.Image();
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `/sequence/ffout${paddedIndex}.gif`;

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
    }, []);

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
    }, [smoothProgress, isLoaded]);

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

            // Cover logic so no gaps remain
            if (canvasRatio > imgRatio) {
                drawHeight = window.innerWidth / imgRatio;
                offsetY = (window.innerHeight - drawHeight) / 2;
            } else {
                drawWidth = window.innerHeight * imgRatio;
                offsetX = (window.innerWidth - drawWidth) / 2;
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
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#fbfbfb] flex justify-center items-center">
            <canvas
                ref={canvasRef}
                className="w-[90%] md:w-full h-full object-contain md:object-cover mx-auto"
                style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#fbfbfb]">
                    <div className="text-navy/50 font-medium tracking-widest text-sm uppercase animate-pulse">
                        Initializing Sequences
                    </div>
                </div>
            )}
        </div>
    );
}
