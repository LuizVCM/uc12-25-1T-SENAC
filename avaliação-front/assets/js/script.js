const imagens = document.querySelectorAll('.l');
imagens.forEach(imagem => {
    

imagem.addEventListener('mousemove', (e) => {
    const rect = imagem.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rX = -y * 20; 
    const rY = x *20;

    imagem.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(0px)`;
});

imagem.addEventListener('mouseleave', () => {
    imagem.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    imagem.style.transition = `all 0.5s linear`;
    imagem.style.zIndex = `none`;
});
});