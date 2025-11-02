const certificados = [
    "assets/meus-certificados/certificado-py.jpg",
    "assets/meus-certificados/certificado-log.jpg",
    "assets/meus-certificados/certificado-log2.jpg",
    "assets/meus-certificados/certificado-prompt.jpg",
    "assets/meus-certificados/certificado-ia.jpg",
    "assets/meus-certificados/certificado-git-github.jpg",
    "assets/meus-certificados/certificado-html.jpg",
    "assets/meus-certificados/certificado1.jpg",
    "assets/meus-certificados/certificado2.jpg",
    "assets/meus-certificados/certificado3.jpg",
    "assets/meus-certificados/certificado4.jpg"
];

const container = document.getElementById('container');

certificados.forEach((arquivo, index) => {
    const div = document.createElement('div');
    div.className = 'certificado';
    div.innerHTML = `<img src="${arquivo}" alt="Certificado ${index + 1}">
                                    <p>Curso ${index + 1}</p>`;
    container.appendChild(div);
});