/*
 * chat.js
 *
 * Handles the logic for chat interactions.
 * - Simulates realistic message pacing by animating messages with delays.
 * - Manages the typing indicator.
 */

const Chat = {
    /**
     * Scans the newly rendered passage for chat elements that need animation.
     * This is called by main.js on the :passagedisplay event.
     */
    processRenderedPassage() {
        const delayedElements = Array.from(document.querySelectorAll('[data-reveal-delay]'));
        if (delayedElements.length === 0) return;

        console.log(`Chat: Found ${delayedElements.length} elements to animate.`);

        // Hide all delayed elements initially
        delayedElements.forEach(el => {
            el.style.visibility = 'hidden';
            el.style.opacity = 0;
        });

        let totalDelay = 0;

        delayedElements.forEach(element => {
            const delay = parseInt(element.dataset.revealDelay, 10);
            totalDelay += delay;

            setTimeout(() => {
                const typingIndicator = document.querySelector('.typing-indicator');
                if (typingIndicator && element.classList.contains('chat-bubble')) {
                    typingIndicator.style.display = 'block';
                    // Hide the indicator just before showing the message
                    setTimeout(() => {
                        typingIndicator.style.display = 'none';
                        this.revealElement(element);
                    }, Math.max(0, delay - 300)); // Show indicator for most of the delay time
                } else {
                    this.revealElement(element);
                }
            }, totalDelay - delay); // Stagger the start of each timeout
        });
    },

    /**
     * Reveals a single element with a fade-in animation.
     * @param {HTMLElement} element The element to reveal.
     */
    revealElement(element) {
        element.style.visibility = 'visible';
        element.style.transition = 'opacity 0.3s ease-in-out';
        // Use a short timeout to allow the browser to apply the initial styles
        setTimeout(() => {
            element.style.opacity = 1;
        }, 20);
    }
};
