const imagens = document.querySelectorAll('.l');
imagens.forEach(imagem => {
    

imagem.addEventListener('mousemove', (e) => {
    const rect = imagem.getBoundingClientRect();
    
    // Calcula a posição do mouse relativa à imagem (de -0.5 a 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Multiplique pelo ângulo máximo de rotação desejado (ex: 20 graus)
    const rX = -y * 20; 
    const rY = x *20;
    
    // Aplica o transform dinamicamente mantendo o translateZ que você pediu
    imagem.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(0px)`;
});

// Reseta a imagem quando o mouse sai de cima
imagem.addEventListener('mouseleave', () => {
    imagem.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    imagem.style.transition = `all 0.5s linear`;
    imagem.style.zIndex = `none`;
});
});