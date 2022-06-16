/* Object */
const projectData = [
  {
    title: "",
    lenguage1: "",
    lenguage2: "",
    lenguage3: "",
    image: "./Images/Card1.png",
    description:
      "",
  },

  {
    title: "Website Protfolio ",
    lenguage1: "HTML",
    lenguage2: "Boostrap",
    lenguage3: "Ruby",
    image: "./Images/Card2.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },

  {
    title: "Profesional Art Printing Data More",
    lenguage1: "HTML",
    lenguage2: "JavaScript",
    lenguage3: "CSS",
    image: "./Images/Card3.png",
    description:
      "daily  mselection of privately personalized reads; no accounts or sign-ups required. has been the industry's standar",
  },

  {
    title: "Data Dashboard Healthcare",
    lenguage1: "Ruby",
    lenguage2: "bootstrap",
    lenguage3: "Ruby on Rails",
    image: "./Images/Mask.png",
    description:
      "A b daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },

  {
    title: "Profesional Art Printing Data More",
    lenguage1: "HTML",
    lenguage2: "JavaScript",
    lenguage3: "CSS",
    image: "./Images/Card2.png",
    description:
      "daily  oselection of privately personalized reads; no accounts or sign-ups required. has been the industry's standar",
  },

  {
    title: "Profesional Art Printing Data More",
    lenguage1: "HTML",
    lenguage2: "JavaScript",
    lenguage3: "CSS",
    image: "./Images/Card3.png",
    description:
      "daily rselection of privately personalized reads; no accounts or sign-ups required. has been the industry's standar",
  },
];
let index = 0;

/* Functions */
function toggleMenu() {
  const menuToggle = document.querySelector(".burger");
  const menuActive = document.querySelector(".sidebar");
  const logoActive = document.querySelector(".logo");
  menuToggle.classList.toggle("active");
  menuActive.classList.toggle("active");
  logoActive.classList.toggle("active");
}
// cards
const deck = document.querySelector('.works');
const mainDeck = document.createElement('ul');
mainDeck.className = 'deck';
deck.appendChild(mainDeck);
addLi();
function addLi() {
  for (i = 0; i < projectData.length; i++) {
    index = i;
    // variables
    var li = document.createElement('li');
    var div1 = document.createElement('div');
    var cardtitle = document.createElement('h2');
    var cardp = document.createElement('p');
    var lenguagesUl = document.createElement('ul');
    var lg1 = document.createElement('li');
    var lg2 = document.createElement('li');
    var lg3 = document.createElement('li');      
    var buttonCP = document.createElement('a');
    // classes
    li.className = 'card';
    div1.className = 'ctext';
    cardp.className = 'cp';
    lenguagesUl.className = 'clist';
    lg1.className = 'ciconlist';
    lg2.className = 'ciconlist';
    lg3.className = 'ciconlist';    
    buttonCP.className ='cbutton butt';
    // Dinamics IDs
    li.setAttribute('id', 'bi' + i);
    cardtitle.setAttribute('id', 't' + i);
    cardp.setAttribute('id', 'p' + i);
    lg1.setAttribute('id', 'l1' + i);
    lg2.setAttribute('id', 'l2' + i);
    lg3.setAttribute('id', 'l3' + i);
    buttonCP.setAttribute('id', 'button-card' + i); //thid Id is for add specific action into the button
    var bi = li.getAttribute('id');
    var ids = cardtitle.getAttribute('id');
    var idsp = cardp.getAttribute('id');
    var len1 = lg1.getAttribute('id');
    var len2 = lg2.getAttribute('id');
    var len3 = lg3.getAttribute('id');
    var buttonId = buttonCP.getAttribute('id');
    // Appends
    mainDeck.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(cardtitle);
    div1.appendChild(cardp);
    li.appendChild(lenguagesUl);
    lenguagesUl.appendChild(lg1);
    lenguagesUl.appendChild(lg2);
    lenguagesUl.appendChild(lg3);
    li.appendChild(buttonCP);    
    //dislay data
    document.getElementById(bi).style.backgroundImage = `url(${projectData[index].image})`;
    document.getElementById(ids).textContent = projectData[index].title;
    document.getElementById(idsp).textContent = projectData[index].description;
    document.getElementById(len1).textContent = projectData[index].lenguage1;
    document.getElementById(len2).textContent = projectData[index].lenguage2;
    document.getElementById(len3).textContent = projectData[index].lenguage3;
    document.getElementById(buttonId).textContent = "See Project";    
  }
}
//pop up
const createPopUp = document.querySelector("#buttid");
createPopUp.addEventListener("click", () => {
  const pop = document.querySelector("body");
  const section = document.createElement("section");
  section.className = "pop-up-section";
  pop.appendChild(section);
  section.innerHTML = `
  <div class="pop-up">
      <div class="pop-up-box1">
        <div class="pop-up-box-title">
          <h1 class="pop-up-title">Multi Post Stories</h1>
          <div class="pop-up-x"></div>
        </div>
        <ul class="pop-up-ul">
          <li class="pop-up-li" id="lenguage1">html</li>
          <li class="pop-up-li" id="lenguage2">Bootstrap</li>
          <li class="pop-up-li" id="lenguage3">Ruby on rails</li>
        </ul>
      </div>
      <div class="pop-up-box2">        
        <img class="pop-up-image" src="./Images/SnapshootPortfolio.png" alt="SnapshootPortfolio"/>

        <div class="pop-up-secundary-box1">
          <p class="pop-up-p">Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essent
          </p>
          <div class="pop-up-secundsry-box2">
            <a
              class="pop-up-button"
              href="https://nimplay.github.io/Microverse_Portfolio/#"
            >
              <p>See Live</p>
              <img src="./Images/liveServer.svg" alt="" />
            </a>
            <a
              class="pop-up-button"
              href="https://github.com/nimplay/Microverse_Portfolio"
            >
              <p>See Source</p>
              <img src="./Images/whiteGitHub.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
`;

  document.querySelector(".pop-up-title");
  document.querySelector("#lenguage1");
  document.querySelector("#lenguage2");
  document.querySelector("#lenguage3");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-p");
  const closePop = document.querySelector(".pop-up-x");
  closePop.addEventListener("click", () => {
    pop.removeChild(section);
  });
});

//pop up 2
const createPopUp0 = document.querySelector("#button-card0");
createPopUp0.addEventListener("click", () => {
  const pop0 = document.querySelector("body");
  const section0 = document.createElement("section");
  section0.className = "pop-up-section";
  pop0.appendChild(section0);
  section0.innerHTML = `
  <div class="pop-up">
      <div class="pop-up-box1">
        <div class="pop-up-box-title">
          <h1 class="pop-up-title">Multi Post Stories</h1>
          <div class="pop-up-x"></div>
        </div>
        <ul class="pop-up-ul">
          <li class="pop-up-li" id="lenguage1">html</li>
          <li class="pop-up-li" id="lenguage2">Bootstrap</li>
          <li class="pop-up-li" id="lenguage3">Ruby on rails</li>
        </ul>
      </div>
      <div class="pop-up-box2">        
        <img class="pop-up-image" src="./Images/Card1.png" alt="SnapshootPortfolio"/>

        <div class="pop-up-secundary-box1">
          <p class="pop-up-p">Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essent
          </p>
          <div class="pop-up-secundsry-box2">
            <a
              class="pop-up-button"
              href="https://nimplay.github.io/Microverse_Portfolio/#"
            >
              <p>See Live</p>
              <img src="./Images/liveServer.svg" alt="" />
            </a>
            <a
              class="pop-up-button"
              href="https://github.com/nimplay/Microverse_Portfolio"
            >
              <p>See Source</p>
              <img src="./Images/whiteGitHub.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
`;

  document.querySelector(".pop-up-title").textContent ='Data Dashboard Healthcare';
  document.querySelector("#lenguage1");
  document.querySelector("#lenguage2");
  document.querySelector("#lenguage3");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-p");
  const closePop0 = document.querySelector(".pop-up-x");
  closePop0.addEventListener("click", () => {
    pop0.removeChild(section0);
  });
});

//pop up 3
const createPopUp1 = document.querySelector("#button-card1");
createPopUp1.addEventListener("click", () => {
  const pop1 = document.querySelector("body");
  const section1 = document.createElement("section");
  section1.className = "pop-up-section";
  pop1.appendChild(section1);
  section1.innerHTML = `
  <div class="pop-up">
      <div class="pop-up-box1">
        <div class="pop-up-box-title">
          <h1 class="pop-up-title">Website Protfolio</h1>
          <div class="pop-up-x"></div>
        </div>
        <ul class="pop-up-ul">
          <li class="pop-up-li" id="lenguage1">html</li>
          <li class="pop-up-li" id="lenguage2">Bootstrap</li>
          <li class="pop-up-li" id="lenguage3">Ruby on rails</li>
        </ul>
      </div>
      <div class="pop-up-box2">        
        <img class="pop-up-image" src="./Images/Card2.png" alt="SnapshootPortfolio"/>

        <div class="pop-up-secundary-box1">
          <p class="pop-up-p">Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essent
          </p>
          <div class="pop-up-secundsry-box2">
            <a
              class="pop-up-button"
              href="https://nimplay.github.io/Microverse_Portfolio/#"
            >
              <p>See Live</p>
              <img src="./Images/liveServer.svg" alt="" />
            </a>
            <a
              class="pop-up-button"
              href="https://github.com/nimplay/Microverse_Portfolio"
            >
              <p>See Source</p>
              <img src="./Images/whiteGitHub.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
`;

  document.querySelector(".pop-up-title");
  document.querySelector("#lenguage1");
  document.querySelector("#lenguage2");
  document.querySelector("#lenguage3");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-p");
  const closePop1 = document.querySelector(".pop-up-x");
  closePop1.addEventListener("click", () => {
    pop1.removeChild(section1);
  });
});

//pop up 3
const createPopUp2 = document.querySelector("#button-card2");
createPopUp2.addEventListener("click", () => {
  const pop2 = document.querySelector("body");
  const section2 = document.createElement("section");
  section2.className = "pop-up-section";
  pop2.appendChild(section2);
  section2.innerHTML = `
  <div class="pop-up">
      <div class="pop-up-box1">
        <div class="pop-up-box-title">
          <h1 class="pop-up-title">Website Protfolio </h1>
          <div class="pop-up-x"></div>
        </div>
        <ul class="pop-up-ul">
          <li class="pop-up-li" id="lenguage1">html</li>
          <li class="pop-up-li" id="lenguage2">Bootstrap</li>
          <li class="pop-up-li" id="lenguage3">Ruby on rails</li>
        </ul>
      </div>
      <div class="pop-up-box2">        
        <img class="pop-up-image" src="./Images/Card3.png" alt="SnapshootPortfolio"/>

        <div class="pop-up-secundary-box1">
          <p class="pop-up-p">Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essent
          </p>
          <div class="pop-up-secundsry-box2">
            <a
              class="pop-up-button"
              href="https://nimplay.github.io/Microverse_Portfolio/#"
            >
              <p>See Live</p>
              <img src="./Images/liveServer.svg" alt="" />
            </a>
            <a
              class="pop-up-button"
              href="https://github.com/nimplay/Microverse_Portfolio"
            >
              <p>See Source</p>
              <img src="./Images/whiteGitHub.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
`;

  document.querySelector(".pop-up-title");
  document.querySelector("#lenguage1");
  document.querySelector("#lenguage2");
  document.querySelector("#lenguage3");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-p");
  const closePop2 = document.querySelector(".pop-up-x");
  closePop2.addEventListener("click", () => {
    pop2.removeChild(section2);
  });
});

//pop up 4
const createPopUp3 = document.querySelector("#button-card3");
createPopUp3.addEventListener("click", () => {
  const pop3 = document.querySelector("body");
  const section3 = document.createElement("section");
  section3.className = "pop-up-section";
  pop3.appendChild(section3);
  section3.innerHTML = `
  <div class="pop-up">
      <div class="pop-up-box1">
        <div class="pop-up-box-title">
          <h1 class="pop-up-title">Data Dashboard Healthcare</h1>
          <div class="pop-up-x"></div>
        </div>
        <ul class="pop-up-ul">
          <li class="pop-up-li" id="lenguage1">html</li>
          <li class="pop-up-li" id="lenguage2">Bootstrap</li>
          <li class="pop-up-li" id="lenguage3">Ruby on rails</li>
        </ul>
      </div>
      <div class="pop-up-box2">        
        <img class="pop-up-image" src="./Images/Card1.png" alt="SnapshootPortfolio"/>

        <div class="pop-up-secundary-box1">
          <p class="pop-up-p">Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essent
          </p>
          <div class="pop-up-secundsry-box2">
            <a
              class="pop-up-button"
              href="https://nimplay.github.io/Microverse_Portfolio/#"
            >
              <p>See Live</p>
              <img src="./Images/liveServer.svg" alt="" />
            </a>
            <a
              class="pop-up-button"
              href="https://github.com/nimplay/Microverse_Portfolio"
            >
              <p>See Source</p>
              <img src="./Images/whiteGitHub.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
`;

  document.querySelector(".pop-up-title");
  document.querySelector("#lenguage1");
  document.querySelector("#lenguage2");
  document.querySelector("#lenguage3");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-p");
  const closePop3 = document.querySelector(".pop-up-x");
  closePop3.addEventListener("click", () => {
    pop3.removeChild(section3);
  });
});

//pop up 4
const createPopUp4 = document.querySelector("#button-card4");
createPopUp4.addEventListener("click", () => {
  const pop4 = document.querySelector("body");
  const section4 = document.createElement("section");
  section4.className = "pop-up-section";
  pop4.appendChild(section4);
  section4.innerHTML = `
  <div class="pop-up">
      <div class="pop-up-box1">
        <div class="pop-up-box-title">
          <h1 class="pop-up-title">Profesional Art Printing Data More</h1>
          <div class="pop-up-x"></div>
        </div>
        <ul class="pop-up-ul">
          <li class="pop-up-li" id="lenguage1">html</li>
          <li class="pop-up-li" id="lenguage2">Javascript</li>
          <li class="pop-up-li" id="lenguage3">CSS</li>
        </ul>
      </div>
      <div class="pop-up-box2">        
        <img class="pop-up-image" src="./Images/Card2.png" alt="SnapshootPortfolio"/>

        <div class="pop-up-secundary-box1">
          <p class="pop-up-p">daily oselection of privately personalized reads; 
          no accounts or sign-ups required. has been the industry's standar
          </p>
          <div class="pop-up-secundsry-box2">
            <a
              class="pop-up-button"
              href="https://nimplay.github.io/Microverse_Portfolio/#"
            >
              <p>See Live</p>
              <img src="./Images/liveServer.svg" alt="" />
            </a>
            <a
              class="pop-up-button"
              href="https://github.com/nimplay/Microverse_Portfolio"
            >
              <p>See Source</p>
              <img src="./Images/whiteGitHub.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
`;

  document.querySelector(".pop-up-title");
  document.querySelector("#lenguage1");
  document.querySelector("#lenguage2");
  document.querySelector("#lenguage3");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-p");
  const closePop4 = document.querySelector(".pop-up-x");
  closePop4.addEventListener("click", () => {
    pop4.removeChild(section4);
  });
});

//pop up 5
const createPopUp5 = document.querySelector("#button-card5");
createPopUp5.addEventListener("click", () => {
  const pop5 = document.querySelector("body");
  const section5 = document.createElement("section");
  section5.className = "pop-up-section";
  pop5.appendChild(section5);
  section5.innerHTML = `
  <div class="pop-up">
      <div class="pop-up-box1">
        <div class="pop-up-box-title">
          <h1 class="pop-up-title">Profesional Art Printing Data More</h1>
          <div class="pop-up-x"></div>
        </div>
        <ul class="pop-up-ul">
          <li class="pop-up-li" id="lenguage1">html</li>
          <li class="pop-up-li" id="lenguage2">Javascript</li>
          <li class="pop-up-li" id="lenguage3">CSS</li>
        </ul>
      </div>
      <div class="pop-up-box2">        
        <img class="pop-up-image" src="./Images/Card3.png" alt="SnapshootPortfolio"/>

        <div class="pop-up-secundary-box1">
          <p class="pop-up-p">daily rselection of privately personalized 
          reads; no accounts or sign-ups required. has been the industry's 
          standar
          </p>
          <div class="pop-up-secundsry-box2">
            <a
              class="pop-up-button"
              href="https://nimplay.github.io/Microverse_Portfolio/#"
            >
              <p>See Live</p>
              <img src="./Images/liveServer.svg" alt="" />
            </a>
            <a
              class="pop-up-button"
              href="https://github.com/nimplay/Microverse_Portfolio"
            >
              <p>See Source</p>
              <img src="./Images/whiteGitHub.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
`;

  document.querySelector(".pop-up-title"); 
  document.querySelector("#lenguage1"); 
  document.querySelector("#lenguage2"); 
  document.querySelector("#lenguage3"); 
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-image");
  document.querySelector(".pop-up-p");
  const closePop5 = document.querySelector(".pop-up-x");
  closePop5.addEventListener("click", () => {
    pop5.removeChild(section5);
  });
});

module.exports = toggleMenu();

