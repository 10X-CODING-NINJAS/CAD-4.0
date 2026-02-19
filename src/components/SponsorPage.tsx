import { useState, useRef } from "react";
import "../css/SponsorPage.css";

// Import images from assets folder
import bronzeSponsor from "/assets/Sponsers/bronze sponsor.png";
import goldSponsor from "/assets/Sponsers/gold sponsor.png";
import silverSponsor from "/assets/Sponsers/silver sponsor.png";
import pokeball from "/assets/Sponsers/Pokeball.png";
import openPokeball from "/assets/Sponsers/open pokeball.png";
import sponsorPageBg from "/assets/Sponsers/sponsor page.png";
import ourSponsorsTitle from "/assets/Sponsers/OUR SPONSORS.png";

interface SponsorCard {
    id: number;
    type: "gold" | "silver" | "bronze";
    backgroundImage?: string;
    logoImage?: string;
    title: string;
    subtitle?: string;
    cardImage?: string;
    topBoxBg: string;
    textColor: string;
    bottomBoxBg: string;
    cornerImage?: string;
}

const sponsorData: SponsorCard[] = [
    {
        id: 1,
        type: "gold",
        backgroundImage: goldSponsor,
        title: "Sponsor\n1",
        topBoxBg: "#fdfdfd",
        textColor: "#643e09",
        bottomBoxBg: "#ffffff2e",
        cornerImage: undefined,
    },
    {
        id: 2,
        type: "silver",
        cardImage: silverSponsor,
        title: "Sponsor\n2",
        topBoxBg: "#fdfdfd",
        textColor: "#6c6c6c",
        bottomBoxBg: "#ffffff2e",
        cornerImage: undefined,
    },
    {
        id: 3,
        type: "bronze",
        cardImage: bronzeSponsor,
        title: "Sponsor\n3",
        topBoxBg: "#fde9d6",
        textColor: "#823c18",
        bottomBoxBg: "#ffffff2e",
        cornerImage: undefined,
    },
];

const BatteryIndicator = (): JSX.Element => {
    return (
        <div className="battery-container">
            <div className="battery-tip" />
            <div className="battery-body">
                <div className="battery-fill" />
            </div>
        </div>
    );
};

export const SponsorPage = (): JSX.Element => {
    // Animation stages: 'initial' (closed), 'opening' (open), 'bursting' (energy), 'moving' (slide down), 'revealed' (cards visible)
    type AnimationStage = 'initial' | 'opening' | 'bursting' | 'moving' | 'revealed';
    const [cardStages, setCardStages] = useState<Record<number, AnimationStage>>({}); // Restored state

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
        (e.target as Element).releasePointerCapture(e.pointerId);
    };

    const handlePokeballClick = (id: number, index: number) => {
        // Prevent click if we were dragging
        if (isDragging) return;

        // Calculate target rotation to bring this card to front (0 degrees)
        const totalCards = sponsorData.length;
        const anglePerCard = 360 / totalCards;
        const targetAngle = -index * anglePerCard;

        // Calculate shortest path to target
        let delta = (targetAngle - rotation) % 360;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;

        // Rotate to bring the clicked card to front
        setRotation(rotation + delta);

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
                    '--total-cards': sponsorData.length
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

                            {/* Actual Card with Bottom Glow */}
                            <article
                                className={`sponsor-card sponsor-card-${sponsor.type} ${stage === 'revealed' ? 'visible' : ''}`}
                            >
                                <div className="card-bottom-glow" /> {/* New Glow Effect */}
                                {sponsor.type === "gold" ? (
                                    <div
                                        className="gold-card"
                                        style={{ backgroundImage: `url(${sponsor.backgroundImage})` }}
                                    >
                                        <img
                                            className="gold-logo"
                                            alt={`${sponsor.title} logo`}
                                            src={sponsor.logoImage}
                                        />
                                        <div className="gold-text-container">
                                            <h3 className="gold-title">{sponsor.title}</h3>
                                            {sponsor.subtitle && (
                                                <p className="gold-subtitle">{sponsor.subtitle}</p>
                                            )}
                                        </div>
                                    </div>
                                ) : sponsor.type === "silver" ? (
                                    <div className="silver-card">
                                        <div className="silver-card-background">
                                            <img
                                                className="silver-card-image"
                                                alt=""
                                                src={sponsor.cardImage}
                                            />
                                        </div>
                                        <div className="silver-top-box" />
                                        <div className="silver-bottom-box" />
                                        <h3 className="silver-title">
                                            Samosa
                                            <br />
                                            Party
                                        </h3>
                                        <div className="silver-battery">
                                            <BatteryIndicator />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bronze-card">
                                        <img
                                            className="bronze-card-image"
                                            alt=""
                                            src={sponsor.cardImage}
                                        />
                                        {sponsor.cornerImage && (
                                            <img
                                                className="bronze-corner-image"
                                                alt=""
                                                src={sponsor.cornerImage}
                                            />
                                        )}
                                        <div className="bronze-top-box" />
                                        <h3 className="bronze-title">
                                            Samosa
                                            <br />
                                            Party
                                        </h3>
                                        <div className="bronze-battery">
                                            <BatteryIndicator />
                                        </div>
                                    </div>
                                )}
                            </article>
                        </div>
                    );
                })}
            </section>

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
