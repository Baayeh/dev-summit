const featuredList = document.querySelector('.act-list');

const speakers = [
  {
    img: './assets/img/sarkodie.jfif',
    name: 'Sarkodie',
    profession: 'Ghanaian rapper, songwriter, and entrepreneur',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, tempore!',
  },
  {
    img: './assets/img/basket mouth.jpg',
    name: 'Basketmouth',
    profession: 'Nigerian comedian and actor',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, tempore!',
  },
  {
    img: './assets/img/warris.jpg',
    name: 'Comedian Warris',
    profession: 'Ghanaian comedian and actor',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, tempore!',
  },
  {
    img: './assets/img/davido.jpg',
    name: 'Davido',
    profession: 'Nigerian-American singer-songwriter',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, tempore!',
  },
  {
    img: './assets/img/manifest.jpg',
    name: 'M.anifest',
    profession: 'Ghanaian musician, rapper and record producer',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, tempore!',
  },
  {
    img: './assets/img/kenny-blaq.jpg',
    name: 'Kenny Blaq',
    profession: 'Nigerian stand-up comedian and singer',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, tempore!',
  },
];

speakers.forEach((speaker) => {
  featuredList.innerHTML += `<div class="col-md-6 act-item" role="listitem">
  <img class="img-fluid act-img" src='${speaker.img}' alt="An image of ${speaker.name}">
  <div class="card-content">
    <h6 class="act-name">${speaker.name}</h6>
    <small>${speaker.profession}</small>
    <p>${speaker.desc}</p>
  </div>
</div>`;
});