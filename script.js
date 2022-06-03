const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menuBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var minimalistOption1 = document.querySelector('#minimalista1');
var minimalistOption2 = document.querySelector('#minimalista2');
var minimalistOption3 = document.querySelector('#minimalista3');
var minimalistOption4 = document.querySelector('#minimalista4');
var minimalistOption5 = document.querySelector('#minimalista5');
var minimalistOption6 = document.querySelector('#minimalista6');
var rectangularOption1 = document.querySelector('#rectangular1');
var rectangularOption2 = document.querySelector('#rectangular2');

var rectangular = document.querySelector('#rectangular');
var minimalista = document.querySelector('#minimalista');

rectangular.addEventListener('click', () => {
  rectangularOption1.classList.remove('invisible');
})
rectangular.addEventListener('click', () => {
  rectangularOption2.classList.remove('invisible');
})
rectangular.addEventListener('click', () => {
  minimalistOption1.classList.add('invisible');
})
rectangular.addEventListener('click', () => {
  minimalistOption2.classList.add('invisible');
})
rectangular.addEventListener('click', () => {
  minimalistOption3.classList.add('invisible');
})
rectangular.addEventListener('click', () => {
  minimalistOption4.classList.add('invisible');
})
rectangular.addEventListener('click', () => {
  minimalistOption5.classList.add('invisible');
})
rectangular.addEventListener('click', () => {
  minimalistOption6.classList.add('invisible');
})



minimalista.addEventListener('click', () => {
  rectangularOption1.classList.add('invisible');
})
minimalista.addEventListener('click', () => {
  rectangularOption2.classList.add('invisible');
})
minimalista.addEventListener('click', () => {
  minimalistOption1.classList.remove('invisible');
})
minimalista.addEventListener('click', () => {
  minimalistOption2.classList.remove('invisible');
})
minimalista.addEventListener('click', () => {
  minimalistOption3.classList.remove('invisible');
})
minimalista.addEventListener('click', () => {
  minimalistOption4.classList.remove('invisible');
})
minimalista.addEventListener('click', () => {
  minimalistOption5.classList.remove('invisible');
})
minimalista.addEventListener('click', () => {
  minimalistOption6.classList.remove('invisible');
})

// EMAIL JS

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'ENVIANDO...'

   const serviceID = 'default_service';
   const templateID = 'template_mcy0qo4';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIADO';
      alert('CONSULTA ENVIADA!');
    }, (err) => {
      btn.value = 'ENVIAR';
      alert(JSON.stringify(err));
    });
});