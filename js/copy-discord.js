function copyToClipboard(button) {
    const text = button.querySelector('.discord-text').textContent;
    const copiedText = button.querySelector('.copied-text');
    
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    
    copiedText.style.display = 'inline';
    button.querySelector('.discord-text').style.display = 'none'
    
    button.removeEventListener('click', handleClick);

    setTimeout(function() {
        copiedText.style.display = 'none';
        button.querySelector('.discord-text').style.display = 'inline'
        button.addEventListener('click', handleClick);
    }, 2000);
}
  
function handleClick(event) {
    const button = event.target;
    copyToClipboard(button);
}