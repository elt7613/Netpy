"use strict";

let word1 = "develop";
let word2 = "progress";

// Find the word containers
let word1Container = document.querySelector(".w-1");
let word2Container = document.querySelector(".w-2");

// Function to split a word into individual letters wrapped in spans
function createLetterSpans(word, coloredLetterIndex) {
    return word.split("").map((letter, index) => {
        if (index === coloredLetterIndex) {
            return `<span class="letter colored-letter">${letter}</span>`;
        } else {
            return `<span class="letter">${letter}</span>`;
        }
    }).join("");
}

// Initialize both words
word1Container.innerHTML = createLetterSpans(word1, 0); // First letter of 'develop' colored
word2Container.innerHTML = createLetterSpans(word2, 0); // First letter of 'progress' colored

// Set the initial visibility of the first word
word1Container.style.opacity = "1";
word2Container.style.opacity = "0";

let currentWordIndex = 0;
let delayTime = 3000; // Delay before starting the next transition

// Function to handle the letter-by-letter transition
function rotateText() {
    let currentWord = currentWordIndex === 0 ? word1 : word2;
    let nextWord = currentWordIndex === 0 ? word2 : word1;
    let currentContainer = currentWordIndex === 0 ? word1Container : word2Container;
    let nextContainer = currentWordIndex === 0 ? word2Container : word1Container;

    // Animate the current word's letters out
    Array.from(currentContainer.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.classList.add("out");
        }, i * 400); // Reduced delay to make letter transition faster
    });

    // Animate the next word's letters in after the current word finishes transitioning out
    setTimeout(() => {
        nextContainer.style.opacity = "1";
        Array.from(nextContainer.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.classList.remove("out");
                letter.classList.add("in");
            }, i * 500); // Transition next word slower for letter-by-letter effect
        });

        // Hide the current word after transition is complete
        setTimeout(() => {
            currentContainer.style.opacity = "0";
        }, currentWord.length * 400); // Adjust timing to ensure smooth transition
    }, currentWord.length * 400 + 500); // Added delay to avoid overlap

    // Switch between the two words
    currentWordIndex = currentWordIndex === 0 ? 1 : 0;
}

// Start rotating text on page load
setInterval(rotateText, delayTime + word1.length * 1000); // Adjust timing based on word length
