import '../sass/app.scss';

//variables 
const imgArticle = document.querySelector('.article__img');
const nameArticle = document.querySelector('.article__name');
const jobArticle = document.querySelector('.article__job');
const infoArticle = document.querySelector('.article__info');

const btn = document.querySelectorAll('#btn');
let position = 0;
let numberR;
let profile;

// itereación en los botones
btn.forEach( boton => {
    // evento al dar click
    boton.addEventListener('click', () => {
        if(boton.value === 'previous') {
            position--;

            if(position < 0) {
                position = 5;
            }

        } else if(boton.value === 'next') {
            position++;

            if(position > 5) {
                position = 0;
            }

        } else if(boton.value === 'random') {
            randomNumber();
            while(position === numberR) {
                randomNumber();
            }
            position = numberR;
        }
        callAPI(position);

    })
});

function callAPI(index) {
    const url = '../profiles.json';
    fetch(url)
        .then(resultado => resultado.json())
        .then(respuesta => {
            const { name, img_url, info, job } = respuesta.profiles[index];

            imgArticle.src = img_url;
            nameArticle.textContent = name;
            infoArticle.textContent = info;
            jobArticle.textContent = job;
        });
} 

function randomNumber() {
    return numberR = Math.round(Math.random() * 5);
}



