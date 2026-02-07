import { useState, useEffect, type JSX } from "react";
import "./SponsorPage.css";

// Import images from assets folder
import bronzeSponsor from "../assets/bronze sponsor.png";
import goldSponsor from "../assets/gold sponsor.png";
import silverSponsor from "../assets/silver sponsor.png";
import pokeball from "../assets/Pokeball.png";
import openPokeball from "../assets/open pokeball.png";
import sponsorPageBg from "../assets/sponsor page.png";
import ourSponsorsTitle from "../assets/OUR SPONSORS.png";

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
    const [isGlowing, setIsGlowing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showEnergyBurst, setShowEnergyBurst] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [showContent, setShowContent] = useState(false);

    // Toggle between normal and glowing pokeball every 800ms (only when closed and before opening)
    useEffect(() => {
        if (isOpen || isClosed) return; // Stop blinking when pokeball opens or after it closes again

        const interval = setInterval(() => {
            setIsGlowing((prev) => !prev);
        }, 800);

        return () => clearInterval(interval);
    }, [isOpen, isClosed]);

    // Animation sequence
    useEffect(() => {
        // Step 1: Open pokeball after 2 seconds
        const openTimer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);

        // Step 2: Show energy burst after 3 seconds (1 second after opening)
        const burstTimer = setTimeout(() => {
            setShowEnergyBurst(true);
        }, 3000);

        // Step 3: Close pokeball and reveal content after 3.5 seconds
        const closeTimer = setTimeout(() => {
            setShowEnergyBurst(false);
            setIsOpen(false);
            setIsClosed(true);
            setShowContent(true);
        }, 3500);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(burstTimer);
            clearTimeout(closeTimer);
        };
    }, []);

    return (
        <main className="sponsor-page">
            <img
                className="background-image"
                alt=""
                src={sponsorPageBg}
            />

            <section className={`sponsor-cards-section ${showContent ? 'content-visible' : 'content-hidden'}`} aria-label="Sponsor cards">
                {sponsorData.map((sponsor) => (
                    <article
                        key={sponsor.id}
                        className={`sponsor-card sponsor-card-${sponsor.type}`}
                    >
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
                ))}
            </section>

            <header className="sponsor-header">
                <img
                    className="sponsor-title-image"
                    alt="Our Sponsors"
                    src={ourSponsorsTitle}
                />
                <img
                    className={`pokeball-decoration ${isGlowing && !isOpen && !isClosed ? 'glowing' : ''} ${isOpen ? 'open' : ''} ${isClosed ? 'closed' : ''}`}
                    alt="Pokeball decoration"
                    src={isOpen ? openPokeball : pokeball}
                />
                {showEnergyBurst && (
                    <>
                        <div className="seam-beam" />
                        <div className="light-column" />
                        <div className="energy-ring" />
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div
                                key={i}
                                className="energy-particle"
                                style={{ '--angle': `${Math.random() * 360}deg` } as React.CSSProperties}
                            />
                        ))}
                    </>
                )}
            </header>

            {/* Overlay images - add these if you have them */}
            {/* <img className="overlay-top" alt="" src={overlayTop} /> */}
            {/* <img className="overlay-bottom" alt="" src={overlayBottom} /> */}
        </main>
    );
};
