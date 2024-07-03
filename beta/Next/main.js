
let cards = document.getElementById("cards");
let numberOfCards = 20;
let ids = 0;
let grid;
let card;
let card2;
let cardId;
let cardText = [];
const mediaQuery = window.matchMedia('(max-width: 600px)');


window.onload = () => {

    if(localStorage.getItem('list') != null){
      grid = localStorage.getItem('list');
    for(let i = 1; i <= numberOfCards; i++){
      ids++;
       cardId =  `card${ids}`
       
      console.log(cardId)
      if(grid == "6" && mediaQuery.matches){
        const cardHtml = ` <div class = "col-${grid} col-md-6 col-lg-4 col-xl-4">
                    <div class = "card card-custom" id = "${cardId}">
                      <img src = "src/img/fruite-item-1.jpg" class = "card-img-top" alt="photo" id = "imageDisplay">
                      <div class = "card-body">
                       <h1 class = "card-title"></h1> 
                       <p class = "card-text" ></p> 
                     <p id = "price" >
                     </p>
                     <a id = "more" onclick = "details('${cardId}')">More..</a>
                      </div>
                    </div>
                  </div>`;
              cards.innerHTML += cardHtml;
              
              
              
              editCardContents('card3','','','src/img/fruite-item-2.jpg','');
      }else{
      const cardHtml = ` <div class = "col-${grid} col-md-6 col-lg-4 col-xl-4">
            <div class = "card card-custom" id = "${cardId}">
              <img src = "src/img/fruite-item-1.jpg" class = "card-img-top" alt="photo" id = "imageDisplay">
              <div class = "card-body">
                <h1 class = "card-title">Test</h1>
                <p class = "card-text">This is a test</p>
                <p id = "price">Price: NGN 200</p>
                <button class = "btn btn-primary">Add to cart <i class = "bi bi-cart"></i></button>
              </div>
            </div>
          </div>`;
          cards.innerHTML += cardHtml;
          editCardContents('card3','Test3','ThirdTest','src/img/fruite-item-2.jpg','4000');
      }
            
    }
      
    }else{
      for(let i = 1; i <= numberOfCards; i++){

      ids++;

      const cardId =  `card${ids}`
      console.log(cardId)
      const cardHtml = ` <div class = "col-12 col-md-6 col-lg-4 col-xl-4">
            <div class = "card card-custom" id = "${cardId}">
              <img src = "src/img/fruite-item-1.jpg" class = "card-img-top" alt="photo" id = "imageDisplay">
              <div class = "card-body">
                <h1 class = "card-title">Test</h1>
                <p class = "card-text">This is a test</p>
                <p id = "price">Price: NGN 200</p>
                <button class = "btn btn-primary">Add to cart <i class = "bi bi-cart"></i></button>
              </div>
            </div>
          </div>`;
          cards.innerHTML += cardHtml;
    }
      
      editCardContents('card3','Test3','ThirdTest','src/img/fruite-item-2.jpg','4000');
    }
 
}


const editCardContents = (cardId, newTitle, newText, newImageUrl,newPrice) => {
  card = document.getElementById(cardId);
 if(card){
   card.querySelector('.card-title').textContent = newTitle;
   card.querySelector('.card-text').textContent = newText;
   card.querySelector('.card-img-top').src = newImageUrl;
   card.querySelector('#price').textContent = newPrice;
 }
};



const details = (cardId) => {
  localStorage.setItem('selectedCardId', cardId);
  window.location.href = "details.html";
}

function cart(){
  window.location.href = "cart.html";
}

let settings = document.getElementById("settings");
let viewed = false;
let content = document.querySelector(".content");
function view(){
  if(!viewed){
    settings.style.left = "0";
    content.style.marginLeft = "40%";
    viewed = true;
  }else{
    viewD();
  }
  
}

function viewD(){
 settings.style.left = "-850px";
 content.style.marginLeft = "0%";
 viewed = false;
}

function list1(){
 grid = 12;
 localStorage.setItem('list',grid);
 window.location.href = "index2.html";
// localStorage.removeItem('list');
}

function grid1(){
 grid = 6;
 localStorage.setItem('list',grid);
 window.location.href = "index2.html";
 //localStorage.removeItem('list');
}
 
