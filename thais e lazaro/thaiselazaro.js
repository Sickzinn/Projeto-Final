
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back-btn');

    // Corrige o redirecionamento para o arquivo correto
    backButton.addEventListener('click', (event) => {
        event.preventDefault();
        // Garantindo que o caminho está correto
        window.location.href = '../index.html';  // Caminho para o index.html
    });

    // Seleciona o player de áudio
    const audioPlayer = document.querySelector('audio');
    
    // Exibe uma mensagem quando o áudio termina
    audioPlayer.addEventListener('ended', () => {
        alert('Obrigado por ouvir a história de Lázaro Ramos e Thaís Araújo!');
    });
});