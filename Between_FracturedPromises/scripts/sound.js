/*
 * sound.js
 *
 * Handles all audio triggers and sound management.
 * - Plays message pings, typing hums, and vibration effects.
 * - Manages background music and volume controls.
 */

const Sound = {
    sounds: {},
    music: {},
    volume: 0.5,

    init() {
        console.log("Sound Module Initialized.");
        this.preloadSounds();
    },

    /**
     * Preloads all audio files for faster playback.
     */
    preloadSounds() {
        const soundFiles = {
            'msg_ping': 'assets/fx/msg_ping.mp3',
            'msg_send': 'assets/fx/msg_send.mp3',
            'typing': 'assets/fx/typing.mp3',
            'vibrate': 'assets/fx/vibrate.mp3',
            'glass_shatter': 'assets/fx/glass_shatter.mp3'
        };

        const musicFiles = {
            'intro': 'assets/music/theme_intro.mp3',
            'chat': 'assets/music/theme_chat.mp3',
            'tragedy': 'assets/music/theme_tragedy.mp3'
        };

        for (const key in soundFiles) {
            this.sounds[key] = new Audio(soundFiles[key]);
            this.sounds[key].volume = this.volume;
        }

        for (const key in musicFiles) {
            this.music[key] = new Audio(musicFiles[key]);
            this.music[key].loop = true;
            this.music[key].volume = this.volume * 0.5; // Music is quieter
        }
    },

    /**
     * Plays a specific sound effect.
     * @param {string} soundName The name of the sound to play (e.g., 'msg_ping').
     */
    playEffect(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName].currentTime = 0;
            this.sounds[soundName].play().catch(e => console.warn("Audio play failed:", e));
        }
    },

    /**
     * Plays a background music track.
     * @param {string} musicName The name of the music to play.
     */
    playMusic(musicName) {
        // Stop any currently playing music
        for (const key in this.music) {
            this.music[key].pause();
            this.music[key].currentTime = 0;
        }

        if (this.music[musicName]) {
            this.music[musicName].play().catch(e => console.warn("Music play failed:", e));
        }
    },

    /**
     * Sets the master volume for all sounds.
     * @param {number} level A value between 0.0 and 1.0.
     */
    setVolume(level) {
        this.volume = Math.max(0, Math.min(1, level));
        for (const key in this.sounds) {
            this.sounds[key].volume = this.volume;
        }
        for (const key in this.music) {
            this.music[key].volume = this.volume * 0.5;
        }
        console.log(`Volume set to ${this.volume}`);
    }
};

document.addEventListener('DOMContentLoaded', () => Sound.init());
