'use strict';

// Function to open the modal
function openModal() {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
}

// Function to hide the modal
function hideModal() {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
}

// Add event listeners to all buttons with the class 'show-modal'
document.querySelectorAll('.show-modal').forEach(btn => {
    btn.addEventListener('click', openModal);
});

// Add event listener to the close button
document.querySelector('.close-modal').addEventListener('click', hideModal);

// Add event listener to the overlay
document.querySelector('.overlay').addEventListener('click', hideModal);

// Add event listener for the 'Escape' key to close the modal
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !document.querySelector('.modal').classList.contains('hidden')) {
        hideModal();
    }
});
