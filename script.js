document.addEventListener("DOMContentLoaded", function() {
    const episodiosContainer = document.getElementById('episodios-container');


    const episodios = [
        { id: 1, title: 'Pilot', description: 'Dean e Sam testemunham a morte sobrenatural da mãe e depois são treinados pelo pai (John) que quer encontrar e derrotar o demônio que matou sua esposa. Enquanto isso, uma morte inexplicável mas já conhecida pelos irmãos Winchester volta a acontecer.' },
        { id: 2, title: 'Wendigo', description: 'Os irmãos investigam o desaparecimento de diversos campistas nas florestas do Colorado e se deparam com um Wendigo, uma criatura canibal com força surpreendente, lendária entre os nativos americanos.' },
        { id: 3, title: 'A Morte na Água', description: 'Sam e Dean investigam uma série de afogamentos misteriosos e descobrem que o espírito furioso de um garoto está se vingando de alguns moradores da cidade, por causa de um segredo sombrio.' }
    ];


    function createEpisodeCardHTML(episode) {
        return `
            <div class="card-episodio" id="card-ep-${episode.id}">
                <h6>${episode.title}</h6>
                <p>${episode.description}</p>
            </div>
        `;
    }


    episodiosContainer.innerHTML = episodios.map(createEpisodeCardHTML).join('');


    const githubIcon = document.getElementById('github-icon');
    const linkedinIcon = document.getElementById('linkedin-icon');


    githubIcon.addEventListener('click', function () {
        console.log('Ícone do GitHub clicado!');

    });


    linkedinIcon.addEventListener('click', function () {
        console.log('Ícone do LinkedIn clicado!');

    });


    const sobreMenu = document.getElementById('sobre-msg');
    const trailerMenu = document.getElementById('trailer-msg');
    const atoresMenu = document.getElementById('atores-msg');
    const avaliacoesMenu = document.getElementById('avaliacoes-msg');


    sobreMenu.addEventListener('click', function () {
        console.log('Página em construção - Sobre!');
    });

    trailerMenu.addEventListener('click', function () {
        console.log('Página em construção - Trailer!');
    });

    atoresMenu.addEventListener('click', function () {
        console.log('Página em construção - Atores!');
    });

    avaliacoesMenu.addEventListener('click', function () {
        console.log('Página em construção - Avaliações!');
    });


    episodiosContainer.addEventListener('click', function(event) {
        const card = event.target.closest('.card-episodio');
        if (card) {
            const episodeId = card.id.replace('card-ep-', '');
            console.log(`Episódio ${episodeId} foi clicado.`);

        }
    });
});
