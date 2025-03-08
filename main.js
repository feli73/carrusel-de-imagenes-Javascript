




const ul = document.querySelector('.slide');

const li1 = document.createElement('li');
const li2 = document.createElement('li') 
const li3 = document.createElement('li') 

const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');

img1.src = 'img/1.avif';
img1.classList.add('imagen1');

img2.src = 'img/2.avif';
img2.classList.add('imagen2');

img3.src = 'img/3.avif';
img3.classList.add('imagen3');


const imagenes = [img1, img2, img3];

li1.appendChild(img1);
li2.appendChild(img2);
li3.appendChild(img3);


ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

imagenes.forEach((img, index) => {
  if(index !== 0) {
    img.style.display= 'none';
    img.style.margin= 'auto';
    img.width= '80%'
  }  else {
    img.style.display = 'block'; // La primera imagen visible desde el principio
  }


});

let currentIndex = 0; 

const next = document.querySelector('.icon-next');
const prev = document.querySelector('.icon-prev');

next.addEventListener('click', () =>  {
  imagenes[currentIndex].style.display= 'none';
  currentIndex = (currentIndex + 1) % imagenes.length;
  imagenes[currentIndex].style.display = 'block';
});


prev.addEventListener('click', () =>  {
  imagenes[currentIndex].style.display= 'none';
  currentIndex = (currentIndex - 1) % imagenes.length;
  imagenes[currentIndex].style.display = 'block';
});
