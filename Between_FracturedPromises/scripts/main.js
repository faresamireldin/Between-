/*
 * main.js
 *
 * This is the primary entry point for all custom JavaScript logic.
 * It integrates our custom modules (UI, Chat, Save) with the SugarCube engine's lifecycle events.
 */

// We wait for SugarCube to be ready before setting up our event listeners.
$(document).on(':storyready', function (ev) {
    console.log("SugarCube is ready. Setting up custom modules.");

    // Initialize our modules
    SaveSystem.init();
    UI.init();
    Chat.init();
    Sound.init();
});

// This event fires just before a passage is displayed.
// It's the perfect place to run logic that depends on the passage's content or tags.
$(document).on(':passagedisplay', function (ev) {
    // ev.passage is the passage object
    // ev.content is the passage's rendered HTML content

    console.log(`Entering passage: ${ev.passage.title} with tags: ${ev.passage.tags.join(', ')}`);

    // Update the UI theme based on the passage's tags
    UI.updateScreen(ev.passage.tags);

    // Tell the chat module to process the new content for animations
    Chat.processRenderedPassage();
});
