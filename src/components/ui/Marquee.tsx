import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
    children,
    direction = "right",
    pauseOnHover = true
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        if (!container || !content) return;

        let position = 0;
        const contentWidth = content.scrollWidth / 2;

        const animate = () => {
        if (!isPaused) {
            if (direction === "right") {
            position += 1;
            if (position >= contentWidth) {
                position = 0;
            }
            } else {
            position -= 1;
            if (position <= -contentWidth) {
                position = 0;
            }
            }
            container.style.transform = `translateX(${position}px)`;
        }
        animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
        };
    }, [direction, isPaused]);

    return (
        <div
        className="overflow-hidden w-full"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
        <div ref={containerRef} className="flex whitespace-nowrap gap-8">
            <div ref={contentRef} className="flex gap-8">
            {children}
            {children}
            </div>
        </div>
        </div>
    );
};