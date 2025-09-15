/*
 * profile.js
 *
 * Handles logic for the character profile screens.
 * - Manages customization of Nadia's profile (avatar, bio, badge).
 * - Displays profile data for different characters.
 */

const Profile = {
    nadiaData: {
        avatar: 'assets/avatars/nadia.png',
        bio: 'Just trying to hold it all together.',
        badge: 'assets/badges/badge_custom.png'
    },

    init() {
        console.log("Profile Module Initialized.");
    },

    /**
     * Loads and displays a character's profile data.
     * @param {string} characterId The ID of the character (e.g., 'ethan', 'nadia').
     */
    loadProfile(characterId) {
        // In a real game, this would fetch data from a character database.
        // For now, it's just a placeholder.
        console.log(`Loading profile for ${characterId}...`);

        const profileScreen = document.getElementById('profile-screen'); // Example ID
        const avatar = profileScreen.querySelector('.profile-avatar');
        const name = profileScreen.querySelector('.profile-name');
        const bio = profileScreen.querySelector('.profile-bio');

        // Example for Nadia
        if (characterId === 'nadia') {
            avatar.src = this.nadiaData.avatar;
            bio.textContent = this.nadiaData.bio;
            name.textContent = 'Nadia';
        }
    },

    /**
     * Updates Nadia's profile data.
     * @param {object} newData The new data to save.
     * @param {string} [newData.avatar] The new avatar URL.
     * @param {string} [newData.bio] The new bio text.
     */
    updateNadiaProfile(newData) {
        if (newData.avatar) {
            this.nadiaData.avatar = newData.avatar;
        }
        if (newData.bio) {
            this.nadiaData.bio = newData.bio;
        }
        console.log("Nadia's profile updated:", this.nadiaData);
        // This would also re-render the profile screen if it's visible.
        this.loadProfile('nadia');
    }
};

document.addEventListener('DOMContentLoaded', () => Profile.init());
