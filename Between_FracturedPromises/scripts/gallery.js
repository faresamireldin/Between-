/*
 * gallery.js
 *
 * Handles interactions within the photo galleries.
 * - Manages photo zoom, swipe, and lightbox features.
 * - Handles logic for uploading photos to Nadia's gallery.
 */

const Gallery = {
    init() {
        console.log("Gallery Module Initialized.");
        this.addEventListeners();
    },

    addEventListeners() {
        // This would add listeners to gallery thumbnails to open the lightbox
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', (e) => this.openLightbox(e.target.src));
        });

        const lightbox = document.querySelector('.lightbox-modal');
        if (lightbox) {
            lightbox.addEventListener('click', () => this.closeLightbox());
        }
    },

    /**
     * Opens the lightbox to display a full-screen image.
     * @param {string} imageUrl The URL of the image to display.
     */
    openLightbox(imageUrl) {
        const lightbox = document.querySelector('.lightbox-modal');
        const lightboxImg = document.querySelector('.lightbox-content');

        if (lightbox && lightboxImg) {
            lightboxImg.src = imageUrl;
            lightbox.style.display = 'flex';
            console.log(`Lightbox opened for: ${imageUrl}`);
        }
    },

    /**
     * Closes the currently open lightbox.
     */
    closeLightbox() {
        const lightbox = document.querySelector('.lightbox-modal');
        if (lightbox) {
            lightbox.style.display = 'none';
            console.log("Lightbox closed.");
        }
    },

    /**
     * Handles the logic for a user "uploading" a photo.
     * In this game, it might mean choosing from a pre-defined set.
     * @param {string} photoUrl The URL of the photo to add to Nadia's gallery.
     */
    uploadPhoto(photoUrl) {
        // This would involve updating the save state and re-rendering Nadia's gallery
        console.log(`Photo "${photoUrl}" added to Nadia's gallery.`);
        // SaveSystem.addPhotoToGallery(photoUrl);
    }
};

document.addEventListener('DOMContentLoaded', () => Gallery.init());
