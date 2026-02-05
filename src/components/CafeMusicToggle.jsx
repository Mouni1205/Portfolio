import React, { useState, useRef, useEffect } from 'react';

// Royalty-free focus / lofi-style music. No attribution required.
// Credit (optional): SoundHelix (soundhelix.com).
// If using SoundCloud, provide the track page URL — the component will use
// the SoundCloud Widget API to play the track (no local setup required).
const SOOTHING_MUSIC_URL = 'https://soundcloud.com/royaltyfreemusic-nocopyrightmusic/vibe-tracks-take-you-home-tonight?si=724e46f090304e27b85e632250a5abc4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';

const SPOTIFY_PROFILE_URL = 'https://open.spotify.com/user/31xmnrgfr2pz45yqeiq4erjmzk3q?si=9405f008c40542e4';

const CafeMusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const scIframeRef = useRef(null);

  useEffect(() => {
    // If the URL is a SoundCloud track page, initialize the SoundCloud widget.
    if (SOOTHING_MUSIC_URL.includes('soundcloud.com')) {
      let widget;
      let cancelled = false;

      const loadWidgetApi = () => new Promise((res) => {
        if (window.SC && window.SC.Widget) return res();
        const s = document.createElement('script');
        s.src = 'https://w.soundcloud.com/player/api.js';
        s.onload = () => res();
        document.body.appendChild(s);
      });

      loadWidgetApi().then(() => {
        if (cancelled) return;
        try {
          widget = window.SC.Widget(scIframeRef.current);
          audioRef.current = widget;
          // Try to set a reasonable volume (SoundCloud widget expects 0-100)
          if (typeof widget.setVolume === 'function') {
            try { widget.setVolume(35); } catch (e) { /* ignore */ }
          }
          // Keep React state in sync with widget events
          if (widget && window.SC && window.SC.Widget && window.SC.Widget.Events) {
            try {
              widget.bind(window.SC.Widget.Events.PLAY, () => setIsPlaying(true));
              widget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false));
            } catch (e) { /* ignore */ }
          }
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('SoundCloud widget init failed:', e);
        }
      });

      return () => {
        cancelled = true;
        if (widget && typeof widget.pause === 'function') {
          try { widget.pause(); } catch (e) { /* ignore */ }
        }
      };
    }

    // Fallback: regular HTML5 Audio for direct MP3 URLs
    const audio = new Audio(SOOTHING_MUSIC_URL);
    audio.volume = 0.35;
    audio.loop = true;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    // If this is a SoundCloud widget, use the widget API
    if (SOOTHING_MUSIC_URL.includes('soundcloud.com')) {
      // widget: play / pause
      if (isPlaying) {
        if (typeof audio.pause === 'function') audio.pause();
        setIsPlaying(false);
      } else {
        if (typeof audio.play === 'function') {
          try { audio.play(); setIsPlaying(true); } catch (err) { /* ignore */ }
        }
      }
      return;
    }

    // Regular HTMLAudioElement
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Audio play failed:', err);
        });
    }
  };

  // Normalize SoundCloud track URL (strip query params) for embedding
  const normalizedScUrl = SOOTHING_MUSIC_URL.includes('soundcloud.com')
    ? SOOTHING_MUSIC_URL.split('?')[0]
    : SOOTHING_MUSIC_URL;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Hidden SoundCloud iframe for widget playback */}
      {SOOTHING_MUSIC_URL.includes('soundcloud.com') && (
        <iframe
          ref={scIframeRef}
          title="soundcloud-player"
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          className="hidden"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(normalizedScUrl)}&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false`}
        />
      )}
      {/* Play / Pause – royalty-free focus / lofi-style music */}
      <div className="flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          className="w-16 h-16 rounded-full bg-cafe-espresso text-cafe-cream shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cafe-roast/50 ring-4 ring-cafe-roast/30"
          aria-label={isPlaying ? 'Pause music' : 'Play focus music'}
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
          ) : (
            <svg className="w-7 h-7 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M8 5v14l11-7L8 5z"/></svg>
          )}
        </button>
        <span className="text-xs font-semibold text-cafe-espresso bg-cafe-cream/95 px-2.5 py-1 rounded-full shadow border border-cafe-biscuit/50">
          {isPlaying ? 'Music on' : 'Play music'}
        </span>
        <p className="text-[10px] leading-tight text-cafe-roast/90 text-center max-w-[160px]">
          Need music to focus? You’re in good company—most of us build better with a little lofi. Hit play.
        </p>
        <p className="text-[9px] text-cafe-roast/70 text-center max-w-[140px]">
          Music: SoundHelix (royalty-free)
        </p>
      </div>

      {/* Spotify profile link */}
      <div className="flex flex-col items-center gap-1.5">
        <a
          href={SPOTIFY_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-cafe-espresso hover:text-cafe-brown bg-cafe-cream/95 hover:bg-cafe-latte border border-cafe-biscuit/50 px-3 py-2 rounded-full text-sm font-medium shadow transition-all"
          title="My Spotify"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          <span>My Spotify</span>
        </a>
        <p className="text-[10px] leading-tight text-cafe-roast/90 text-center max-w-[140px]">
          Fun fact: most of my songs are from Lando Norris’s playlist. Killer taste, and he’s introduced me to so many new genres and tracks.
        </p>
      </div>
    </div>
  );
};

export default CafeMusicToggle;
