/* Object */
const projectData = [
  {
    title: 'Data Dashboard Healthcare',
    lenguage1: 'HTML',
    lenguage2: 'Boostrap',
    lenguage3: 'Ruby',
    image: './Images/Card1.png',
    imageAlt: 'SnapshootPortfolio',
    description:
      "daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },

  {
    title: 'Website Protfolio ',
    lenguage1: 'HTML',
    lenguage2: 'Boostrap',
    lenguage3: 'Ruby',
    image: './Images/SnapshootPortfolio.png',
    imageAlt: 'SnapshootPortfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },

  {
    title: 'Profesional Art Printing Data More',
    lenguage1: 'HTML',
    lenguage2: 'JavaScript',
    lenguage3: 'CSS',
    image: './Images/SnapshootPortfolio.png',
    imageAlt: 'SnapshootPortfolio',
    description:
      "daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standar",
  },

  {
    title: 'Data Dashboard Healthcare',
    lenguage1: 'Ruby',
    lenguage2: 'bootstrap',
    lenguage3: 'Ruby on Rails',
    image: './Images/Mask.png',
    imageAlt: 'SnapshootPortfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    title: 'Profesional Art Printing Data More',
    lenguage1: 'HTML',
    lenguage2: 'JavaScript',
    lenguage3: 'CSS',
    image: './Images/SnapshootPortfolio.png',
    imageAlt: 'SnapshootPortfolio',
    description:
      "daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standar",
  },
];

let index = 0;
const cards = projectData.length;

/* Functions */
function toggleMenu() {
  const menuToggle = document.querySelector('.burger');
  const menuActive = document.querySelector('.sidebar');
  const logoActive = document.querySelector('.logo');
  menuToggle.classList.toggle('active');
  menuActive.classList.toggle('active');
  logoActive.classList.toggle('active');
}

const createPopUp = document.querySelector('.csubmit');
createPopUp.addEventListener('click', () => {
  const pop = document.querySelector('body');
  const section = document.createElement('section'
  section.className = 'pop-up-section';
  pop.appendChild(section);
  section.innerHTML = `
  <div class="pop-up">
  <div class="pop-up-box1">
    <div class="pop-up-box-title">
      <h1 class="pop-up-title"></h1>
      <div class="pop-up-x"></div>
    </div>        
    <ul class="pop-up-ul">
      <li class="pop-up-li" id="lenguage1"></li>
      <li class="pop-up-li" id="lenguage2"></li>
      <li class="pop-up-li" id="lenguage3"></li>
    </ul>
  </div>
  <div class="pop-up-box2">
      <div class="pop-up-arrow" id="arrow1"></div>
    <img class="pop-up-image" src="">
    <div class="pop-up-secundary-box1">
      <p class="pop-up-p">
      </p>
      <div class="pop-up-secundsry-box2">
        <a class="pop-up-button" href="https://nimplay.github.io/Microverse_Portfolio/#">
          <p>See Live</p>
          <img src="./Images/liveServer.svg" alt="">
        </a>
        <a class="pop-up-button" href="https://github.com/nimplay/Microverse_Portfolio">
          <p>See Source</p>
          <img src="./Images/whiteGitHub.svg" alt="">
        </a>              
      </div>
    </div>
    <div class="pop-up-arrow" id="arrow2"></div>
  </div>
  </div>
`;
  function cardDefault(projectData, index) {
    document.querySelector('.pop-up-title').textContent = projectData[index].title;
    document.querySelector('#lenguage1').textContent = projectData[index].lenguage1;
    document.querySelector('#lenguage2').textContent = projectData[index].lenguage2;
    document.querySelector('#lenguage3').textContent = projectData[index].lenguage3;
    document.querySelector('.pop-up-image').src = projectData[index].image;
    document.querySelector('.pop-up-image').alt = projectData[index].imageAlt;
    document.querySelector('.pop-up-p').textContent = projectData[index].description;
  }
  cardDefault(projectData, index);
  const closePop = document.querySelector('.pop-up-x');
  closePop.addEventListener('click', () => {
    pop.removeChild(section);
  });
  const nextPop = document.querySelector('#arrow1');
  nextPop.addEventListener('click', () => {
    if (index > 0 && index < cards) {
      index -= 1;
      cardDefault(projectData, index);
    } else {
      index = cards - 1;
      cardDefault(projectData, index);
    }
  });
  const nextPop2 = document.querySelector('#arrow2');
  nextPop2.addEventListener('click', () => {
    if (index < cards - 1 && index >= 0) {
      index += 1;
      cardDefault(projectData, index);
    } else {
      index = 0;
      cardDefault(projectData, index);
    }
  });
});
module.exports = toggleMenu();
