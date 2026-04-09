import React, { useState, useEffect, useRef } from 'react';
import { engagementDataEn, engagementDataHi, EngagementData } from './constants';
import { ChevronRight, ChevronLeft, Pause, Play, Calendar, MapPin, Phone, Languages, Volume2, VolumeX } from 'lucide-react';
import './index.css';

// Generating decorative traditional sparkles
const sparkles = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  animationDuration: `${8 + Math.random() * 12}s`,
  animationDelay: `${Math.random() * 5}s`,
  width: `${2 + Math.random() * 5}px`,
  height: `${2 + Math.random() * 5}px`,
}));

type Language = 'hi' | 'en';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lang, setLang] = useState<Language>('hi'); // Default to Hindi
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const SLIDE_DURATION = 10000;
  const TOTAL_SLIDES = 3;
  const UPDATE_INTERVAL = 50;

  const data: EngagementData = lang === 'hi' ? engagementDataHi : engagementDataEn;

  useEffect(() => {
    let interval: number | undefined;

    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (UPDATE_INTERVAL / SLIDE_DURATION) * 100;
          if (newProgress >= 100) {
            handleNextSlide();
            return 0;
          }
          return newProgress;
        });
      }, UPDATE_INTERVAL);
    }

    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [isPlaying, currentSlide]);

  // Attempt to play music on first user interaction anywhere on the screen
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isMusicPlaying) {
        audioRef.current.play().then(() => setIsMusicPlaying(true)).catch(e => console.log("Autoplay blocked"));
      }
      window.removeEventListener('click', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction);
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    setProgress(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const fontMainClass = lang === 'hi' ? 'font-hi-main' : 'font-en-main';
  const fontTitleClass = lang === 'hi' ? 'font-hi-title' : 'font-en-title';
  const fontDisplayClass = lang === 'hi' ? 'font-hi-display' : 'font-en-display';

  return (
    <div className={`app-container ${fontMainClass}`}>
      <audio ref={audioRef} src={data.musicFile} loop />

      {/* Background Layer */}
      <div className="background-wrapper">
        <img
          src="/traditional-bg.png"
          alt="Traditional Hindu Background"
          className="background-image"
        />
        <div className="particles">
          {sparkles.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                left: p.left,
                width: p.width,
                height: p.height,
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay
              }}
            />
          ))}
        </div>
      </div>

      {/* Music Toggle */}
      <button className="music-toggle" onClick={toggleMusic} aria-label="Toggle Music">
        {isMusicPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Language Toggle */}
      <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle Language">
        <Languages size={20} />
        <span>{lang === 'hi' ? 'English' : 'हिंदी'}</span>
      </button>

      {/* Foreground Content */}
      <div className="slide-wrapper">
        {currentSlide === 0 && (
          <div className="slide-container traditional-border" key="slide-0">
            {lang === 'hi' ? (
              <>
                <h1 className={fontTitleClass}>{data.groomName}</h1>
                <span className={`ampersand ${fontMainClass}`}>व</span>
                <h1 className={fontTitleClass}>{data.brideName}</h1>
                <h2 className="subtitle" style={{ marginTop: '1.5rem' }}>{data.labels.joinUs}</h2>
              </>
            ) : (
              <>
                <h2 className="subtitle">{data.labels.joinUs}</h2>
                <h1 className={fontTitleClass}>{data.groomName}</h1>
                <span className={`ampersand ${fontMainClass}`}>&</span>
                <h1 className={fontTitleClass}>{data.brideName}</h1>
              </>
            )}

            <p className="om-symbol mt-4">॥ ॐ श्री गणेशाय नमः ॥</p>

            <p style={{ marginTop: '1.5rem', fontSize: '1.4rem', fontWeight: '500', color: 'var(--accent)' }}>
              {data.labels.twoSouls} <span className="heart" style={{ color: 'var(--primary)' }}>✦</span>
            </p>
          </div>
        )}

        {currentSlide === 1 && (
          <div className="slide-container traditional-border" key="slide-1">
            <h2 className={`section-title ${fontTitleClass}`}>{data.labels.details}</h2>

            <div className="details-text icon-text">
              <Calendar size={22} color="var(--primary)" />
              <span className="highlight" style={{ fontSize: '1.3rem' }}>{data.date}</span> | {data.time}
            </div>

            <div className="details-text icon-text" style={{ marginTop: '1.5rem', alignItems: 'flex-start' }}>
              <MapPin size={26} color="var(--primary)" style={{ marginTop: '4px', flexShrink: 0 }} />
              <span style={{ textAlign: 'left', fontSize: '1.3rem' }}>{data.venue}</span>
            </div>

            <div className="details-text icon-text" style={{ marginTop: '1.5rem' }}>
              <Phone size={22} color="var(--primary)" />
              <span style={{ fontSize: '1.2rem' }}>{data.labels.rsvp}{data.contactNumber}</span>
            </div>

            <div className="hosts-container">
              <div className="host-column">
                <h3 className={fontTitleClass}>{data.labels.brideFamily}</h3>
                <ul className="host-list">
                  {data.brideHostsList.map((host, idx) => (
                    <li key={idx}><span className="bullet">✤</span> {host}</li>
                  ))}
                </ul>
              </div>
              <div className="host-column">
                <h3 className={fontTitleClass}>{data.labels.groomFamily}</h3>
                <ul className="host-list">
                  {data.groomHostsList.map((host, idx) => (
                    <li key={idx}><span className="bullet">✤</span> {host}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 2 && (
          <div className="slide-container traditional-border flex-center" key="slide-2">

            <p className="om-symbol mb-4">॥ मंगलम भगवान विष्णु मंगलम गरुड़ध्वजः ॥<br />॥ मंगलम पुण्डरीकाक्षः मंगलाय तनो हरिः ॥</p>

            {data.displayMessage.split('\n').map((line, idx) => (
              <div key={idx} className={idx === 0 ? `display-message ${fontDisplayClass}` : "details-text"}>
                {line}
              </div>
            ))}

            <div style={{ marginTop: '3rem' }}>
              <p className="details-text" style={{ fontWeight: '500', color: 'var(--primary)', fontStyle: 'italic' }}>
                {data.labels.lookForward}
              </p>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="controls">
          <button className="control-btn" onClick={handlePrevSlide} aria-label="Previous Slide">
            <ChevronLeft size={28} />
          </button>

          <button className="control-btn play-btn" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <Pause size={28} /> : <Play size={28} fill="currentColor" />}
          </button>

          <button className="control-btn" onClick={handleNextSlide} aria-label="Next Slide">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      {/* Global Progress Bar sticking to bottom viewport */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default App;
