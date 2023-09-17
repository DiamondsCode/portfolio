const phrases = ["specialty development", "graphic design", "videography", "video editing", "minecraft servers", "too much", "a lot"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
function type() {const typedElement = document.getElementById("typed");const currentPhrase = phrases[phraseIndex];if (isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }if (charIndex < currentPhrase.length) { typedElement.textContent = currentPhrase.substring(0, charIndex + 1); charIndex++; setTimeout(type, typingSpeed); }else { setTimeout(deleteText, 2300); }}
function deleteText() {const typedElement = document.getElementById("typed");const currentPhrase = phrases[phraseIndex];if (charIndex > 0) { typedElement.textContent = currentPhrase.substring(0, charIndex - 1); charIndex--; setTimeout(deleteText, typingSpeed / 2); }else { isDeleting = true; setTimeout(type, 0); }}document.addEventListener("DOMContentLoaded", () => { setTimeout(type, 0); });