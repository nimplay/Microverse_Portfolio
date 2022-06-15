/* Object */
const projectData = [{
  title: 'Project Title',
  lenguage1: 'HTML',
  lenguage2: 'JavaScript',
  lenguage3: 'CSS',
  image: './Images/SnapshootPortfolio.png',
  imageAlt: 'SnapshootPortfolio',
  description: 'this is my js text',
},
{
  title: 'Project Title 2',
  lenguage1: 'Ruby',
  lenguage2: 'bootstrap',
  lenguage3: 'Ruby on Rails',
  image: './Images/SnapshootPortfolio.png',
  imageAlt: 'SnapshootPortfolio',
  description: 'this is my js text2',
}];
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
  const section = document.createElement('section');
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
    <li class="pop-up-li" id="lenguage1">html</li>
    <li class="pop-up-li" id="lenguage2">Bootstrap</li>
    <li class="pop-up-li" id="lenguage3">Ruby on rails</li>
  </ul>
</div>
<div class="pop-up-box2">
  <img class="pop-up-image" src="" alt="SnapshootPortfolio">
  <div class="pop-up-secundary-box1">
    <p class="pop-up-p">Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text 
      ever since the 1500s, when an unknown printer took a galley of type 
      and scrambled it 1960s with the releaLorem Ipsum is simply dummy text 
      of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it 1960s with the releax 
      map lapora verita.
    </p>
    <div class="pop-up-secundsry-box2">
      <a class="pop-up-button">
        <p>See Live</p>
        <img src="/Images/liveServer.svg" alt="">
      </a>
      <a class="pop-up-button">
        <p>See Source</p>
        <img src="/Images/whiteGitHub.svg" alt="">
      </a>
      
    </div>
  </div>
</div>
</div>
`;
  document.querySelector('.pop-up-title').textContent = projectData[0].title;
  document.querySelector('#lenguage1').textContent = projectData[0].lenguage1;
  document.querySelector('#lenguage2').textContent = projectData[1].lenguage2;
  document.querySelector('#lenguage3').textContent = projectData[0].lenguage3;
  document.querySelector('.pop-up-image').src = projectData[0].image;
  document.querySelector('.pop-up-image').alt = projectData[0].imageAlt;
  document.querySelector('.pop-up-p').textContent = projectData[0].description; 
  const closePop = document.querySelector('.pop-up-x');
  closePop.addEventListener('click', () => {
    pop.removeChild(section);
  });
});
module.exports = toggleMenu();
