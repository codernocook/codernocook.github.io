const typingElement = document.getElementById('welcome-typing');
const word = 'Itzporium.';
let index = 0;

function typeWord() {
    typingElement.textContent = word.slice(0, index);
    index++;

    if (index > word.length) {
        clearTimeout(typingTimeout);
        return;
    }

    setTimeout(typeWord, 100);
}

const typingTimeout = setTimeout(typeWord, 100);