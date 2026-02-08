import { useMemo, useState } from 'react'
import '../css/herosection.css'
import Logo10X from '/assets/Heropage/10x.svg'
import Wordmark from '/assets/Heropage/wordmark.png'
import GroundImg from '/assets/Heropage/ground.png'
import CharactersImg from '/assets/Heropage/cartoon char.png'
import Reflection from '/assets/Heropage/reflections.png'


export function HeroSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map(() => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
            isGlow: Math.random() > 0.05
        }));
    }, []);

    const shootingStars = useMemo(() => {
        return Array.from({ length: 6 }).map(() => ({
            left: Math.random() * 80 + 10,
            top: Math.random() * 40 + 5,
            duration: 8,
            delay: Math.random() * 10,
            fromRight: Math.random() > 0.5
        }));
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="hero-container" id="home">
            {/* Stars Background */}
            <div className="stars-overlay">
                {stars.map((star, i) => (
                    <div
                        key={i}
                        className={`twinkle-star ${star.isGlow ? 'glow-effect' : ''}`}
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDuration: `${star.duration}s`,
                            animationDelay: `${star.delay}s`
                        }}
                    />
                ))}
                {shootingStars.map((sStar, i) => (
                    <div
                        key={`shooting-${i}`}
                        className={`shooting-star ${sStar.fromRight ? 'from-right' : ''}`}
                        style={{
                            left: `${sStar.left}%`,
                            top: `${sStar.top}%`,
                            animationDuration: `${sStar.duration}s`,
                            animationDelay: `${sStar.delay}s`
                        } as any}
                    />
                ))}
            </div>

            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={Logo10X} alt="10X Logo" className="nav-logo" />
                </div>

                {/* Desktop Nav Links */}
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#timeline">Timeline</a>
                    <a href="#sponsors">Our Sponsors</a>
                    <a href="#events">Past Events</a>
                </div>

                <div className="navbar-right">
                    <button className="register-btn-pill" onClick={() => window.location.href = '#register'}>REGISTER</button>
                    {/* Hamburger Button */}
                    <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#about" onClick={toggleMenu}>About</a>
                    <a href="#timeline" onClick={toggleMenu}>Timeline</a>
                    <a href="#sponsors" onClick={toggleMenu}>Our Sponsors</a>
                    <a href="#events" onClick={toggleMenu}>Past Events</a>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="hero-main">
                <div className="hero-center">
                    <img src={Wordmark} alt="CAD 4.0" className="hero-wordmark" />
                    <button className="hero-register-btn" onClick={() => window.location.href = '#register'}>REGISTER</button>
                </div>

                {/* Characters and Ground */}
                <div className="hero-bottom">
                    <div className="characters-container">
                        <div className="character">
                            <img src={CharactersImg} alt="Characters" className="character-main" />
                            <img src={Reflection} alt="Reflections" className="character-reflection" />
                        </div>
                    </div>
                    <div className="ground-wrapper">
                        <img src={GroundImg} alt="Ground" className="ground-main" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
