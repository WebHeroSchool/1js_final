var menu = document.querySelector('.menu');
var table_3 = document.querySelector('.table_3');
var table_6 = document.querySelector('.table_6');
var table_10 = document.querySelector('.table_10');
var cardInner = document.querySelectorAll('.card_inner');
var card_front = document.querySelectorAll('.card_front');
var imagesFront = ['url(images/cardfront.png)', 'url(images/cardbug.png)'];
var difficulty = document.querySelectorAll('.diff_variant');
var startButton = document.querySelector('button');
var i;
function StartGame() {
  if (!cardInner) {
    throw new Error("no object found!");
}
  cardInner.forEach(function(item){
    i=0;
    item.style.transform = 'rotateY(0deg)';
  })
  cardInner.forEach(function(item){
    if (!item) {
    throw new Error("no video object found!");
}
    item.addEventListener('click', function f(){
      i++;
      if(i > 1){
        item.removeEventListener('click', f);
      } else{
        item.style.transform = 'rotateY(180deg)';
      }
    });
  })
  if(difficulty[0].checked == true){
    menu.style.display = 'none';
    table_3.style.display = 'block';
    card_front.forEach(function(item){
      item.style.backgroundImage = imagesFront[Math.floor(Math.random()*2)];
      item.addEventListener('click', Restart);
    })
  } else if(difficulty[1].checked == true){
      menu.style.display = 'none';
      table_6.style.display = 'block';
      card_front.forEach(function(item){
        item.style.backgroundImage = imagesFront[Math.floor(Math.random()*2)];
        item.addEventListener('click', Restart);
      })
    } else if(difficulty[2].checked == true){
        menu.style.display = 'none';
        table_10.style.display = 'block';
        card_front.forEach(function(item){
          item.style.backgroundImage = imagesFront[Math.floor(Math.random()*3)];
          item.addEventListener('click', Restart);
        })
  }
}

function Restart(){
  menu.style.display = 'flex';
  table_3.style.display = 'none';
  table_6.style.display = 'none';
  table_10.style.display = 'none';
}


startButton.addEventListener('click', StartGame);
