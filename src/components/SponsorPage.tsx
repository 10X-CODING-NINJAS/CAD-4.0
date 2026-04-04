import { useState, useRef } from "react";
import "../css/SponsorPage.css";

// Import images from assets folder
import Beeceptor from "/assets/Sponsors/Beeceptor.png";
import BYS from "/assets/Sponsors/BYS.png";
import ECEI from "/assets/Sponsors/ECEI Gate.png";
import Icebrkr from "/assets/Sponsors/Icebrkr.png";
import InterviewBuddy from "/assets/Sponsors/InterviewBuddy.png";
import T2L from "/assets/Sponsors/T2L.png";
import UnTechEd from "/assets/Sponsors/UnTechEd.png";
import pokeball from "/assets/Sponsors/Pokeball.png";
import openPokeball from "/assets/Sponsors/open pokeball.png";
import sponsorPageBg from "/assets/Sponsors/sponsor page.png";
import ourSponsorsTitle from "/assets/Sponsors/OUR SPONSORS.png";

interface SponsorCard {
    id: number;
    title: string;
    image: string;
}

const sponsorData: SponsorCard[] = [
    {
        id: 1,
        title: "Sponsor 1",
        image: Beeceptor,
    },
    {
        id: 2,
        title: "BYS",
        image: BYS,
    },
    {
        id: 3,
        title: "ECEI Gate",
        image: ECEI,
    },
    {
        id: 4,
        title: "Icebrkr",
        image: Icebrkr,
    },
    {
        id: 5,
        title: "InterviewBuddy",
        image: InterviewBuddy,
    },
    {
        id: 6,
        title: "T2L",
        image: T2L,
    },
    {
        id: 7,
        title: "UnTechEd",
        image: UnTechEd,
    },
];

export const SponsorPage = (): JSX.Element => {
    // Animation stages: 'initial' (closed), 'opening' (open), 'bursting' (energy), 'moving' (slide down), 'revealed' (cards visible)
    type AnimationStage = 'initial' | 'opening' | 'bursting' | 'moving' | 'revealed';
    const [cardStages, setCardStages] = useState<Record<number, AnimationStage>>({}); // Restored state
    const totalCards = sponsorData.length;
    const anglePerCard = 360 / totalCards;

    // Carousel Logic
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const dragStartRef = useRef<{ x: number, rotation: number } | null>(null);

    // Handle interaction for rotating the carousel
    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(false);
        dragStartRef.current = {
            x: e.clientX,
            rotation: rotation
        };
        // Capture pointer to track outside the element
        (e.target as Element).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!dragStartRef.current) return;

        const deltaX = e.clientX - dragStartRef.current.x;
        // Increase threshold to prevent accidental drags on tap
        if (Math.abs(deltaX) > 15) {
            setIsDragging(true);
        }

        // sensitivity: 0.5 degrees per pixel
        setRotation(dragStartRef.current.rotation + deltaX * 0.5);
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        dragStartRef.current = null;
        setIsDragging(false);
        (e.target as Element).releasePointerCapture(e.pointerId);
    };

    const rotateToIndex = (index: number) => {
        const targetAngle = -index * anglePerCard;

        setRotation((prevRotation) => {
            let delta = (targetAngle - prevRotation) % 360;
            if (delta > 180) delta -= 360;
            if (delta < -180) delta += 360;
            return prevRotation + delta;
        });
    };

    const getFrontCardIndex = () => {
        const rawIndex = ((-rotation / anglePerCard) % totalCards + totalCards) % totalCards;
        return Math.round(rawIndex) % totalCards;
    };

    const handlePrevious = () => {
        const currentIndex = getFrontCardIndex();
        rotateToIndex((currentIndex - 1 + totalCards) % totalCards);
    };

    const handleNext = () => {
        const currentIndex = getFrontCardIndex();
        rotateToIndex((currentIndex + 1) % totalCards);
    };

    const handlePokeballClick = (id: number, index: number) => {
        // Prevent click if we were dragging
        if (isDragging) return;

        // Rotate to bring the clicked card to front
        rotateToIndex(index);

        // Prevent multiple clicks/toggles if already animating sequence
        if (cardStages[id] && cardStages[id] !== 'initial') return;

        // Start sequence for this card
        setCardStages(prev => ({ ...prev, [id]: 'opening' }));

        // 0.05s: Energy Burst (almost instant)
        setTimeout(() => {
            setCardStages(prev => ({ ...prev, [id]: 'bursting' }));
        }, 50);

        // 0.45s: Reveal Card (very fast sequence)
        setTimeout(() => {
            setCardStages(prev => ({ ...prev, [id]: 'revealed' }));
        }, 450);
    };

    return (
        <main className="sponsor-page">
            <img
                className="background-image"
                alt=""
                src={sponsorPageBg}
            />

            <section
                className={`sponsor-cards-section ${isDragging ? 'is-dragging' : ''}`}
                aria-label="Sponsor cards"
                ref={carouselRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp} // Safety fallback
                style={{
                    '--carousel-rotation': `${rotation}deg`,
                    '--total-cards': sponsorData.length.toString()
                } as React.CSSProperties}
            >
                {sponsorData.map((sponsor, index) => {
                    const stage = cardStages[sponsor.id] || 'initial';

                    return (
                        <div
                            key={sponsor.id}
                            className="sponsor-card-wrapper"
                            style={{ '--card-index': index } as React.CSSProperties}
                            onClick={() => handlePokeballClick(sponsor.id, index)}
                        >
                            {/* Platform Glow */}
                            <div className={`pokeball-platform-glow ${stage}`} />

                            {/* Pokeball Animation Container */}
                            <div
                                className={`card-pokeball-container ${stage}`}
                            >
                                <img
                                    src={stage === 'initial' ? pokeball : openPokeball}
                                    alt="Pokeball"
                                    className="card-pokeball"
                                />
                                {/* Energy Burst Effects */}
                                {(stage === 'bursting' || stage === 'moving') && (
                                    <div className="mini-burst-container">
                                        <div className="mini-core-flash" />
                                        <div className="mini-energy-ring" />
                                        {Array.from({ length: 8 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className="mini-energy-particle"
                                                style={{ '--angle': `${Math.random() * 360}deg` } as React.CSSProperties}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Revealed sponsor image only */}
                            <article
                                className={`sponsor-card sponsor-image-card ${stage === 'revealed' ? 'visible' : ''}`}
                            >
                                <div className="card-bottom-glow" />
                                <img
                                    className="sponsor-reveal-image"
                                    src={sponsor.image}
                                    alt={sponsor.title}
                                />
                            </article>
                        </div>
                    );
                })}
            </section>

            <div className="sponsor-carousel-controls" aria-label="Carousel controls">
                <button
                    type="button"
                    className="carousel-btn"
                    aria-label="Previous sponsor"
                    onClick={handlePrevious}
                >
                    ‹
                </button>
                <button
                    type="button"
                    className="carousel-btn"
                    aria-label="Next sponsor"
                    onClick={handleNext}
                >
                    ›
                </button>
            </div>

            <header className="sponsor-header">
                <img
                    className="sponsor-title-image"
                    alt="Our Sponsors"
                    src={ourSponsorsTitle}
                />

            </header>

            {/* Overlay images - add these if you have them */}
            {/* <img className="overlay-top" alt="" src={overlayTop} /> */}
            {/* <img className="overlay-bottom" alt="" src={overlayBottom} /> */}
        </main>
    );
};
