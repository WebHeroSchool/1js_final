const difficulty = document.querySelectorAll('.diff_variant');
const menu = document.querySelector('.menu');
const tableEasy = document.querySelector('.table_easy');
const tableNormal = document.querySelector('.table_normal');
const tableHard = document.querySelector('.table_hard');
const button = document.querySelector('button');
const card = `<div class="card"> <div class="card_inner">
  <div class="card_back"></div> <div class="card_bad"></div>
  </div>`;

function gameStart()  {
  let cardsEasyList = document.querySelectorAll('.table_easy_row .card');
  let cardsNormalList = document.querySelectorAll('.table_normal_rows .card');
  let cardsHardList = document.querySelectorAll('.table_hard_rows .card');
  let cardsList = {...cardsEasyList, ...cardsNormalList, ...cardsHardList};
  let tableEasyRow = document.querySelector('.table_easy_row');
  let tableNormalRows = document.querySelectorAll('.table_normal_rows');
  let tableHardRows = document.querySelectorAll('.table_hard_rows');
  //Выбираем сложность
  if (difficulty[0].checked == true){
    menu.classList.toggle('hidden');
    tableEasy.classList.toggle('hidden');
    //Добавляем 3 карты
    if(cardsEasyList.length == 0){
      for(let i = 0; i < 3;i++){
        tableEasyRow.insertAdjacentHTML('afterBegin', card);
      }
    }
  } else if (difficulty[1].checked == true){
    menu.classList.toggle('hidden');
    tableNormal.classList.toggle('hidden');
    //добавляем 6 карт
    if(cardsNormalList.length == 0){
      tableNormalRows.forEach(function (item){
        for(let i = 0; i < 3;i++){
          item.insertAdjacentHTML('afterBegin', card);
        }
      });
    }
  }
  else if (difficulty[2].checked == true){
    menu.classList.toggle('hidden');
    tableHard.classList.toggle('hidden');
    //добавляем 10 карт
    if(cardsHardList.length == 0){
      tableHardRows.forEach(function (item){
        for(let i = 0; i < 5;i++){
          item.insertAdjacentHTML('afterBegin', card);
        }
      });
    }
  }
  let cardInner = document.querySelectorAll('.card_inner');
  reverseFlipCard(cardInner);
  flipCard(cardInner);
  let cardFront = document.querySelectorAll('.card_bad');
  randomCards(cardFront);
  returnToMenu(cardFront);
}

function randomCards(arg){
  const randomNames = ['card_bug', 'card_front'];
  arg.forEach(function(item){
    item.classList.remove('card_front');
    item.classList.remove('card_bug');
    item.classList.add(randomNames[Math.floor(Math.random()*2)]);
  });
}

function flipCard(arg){
  let i = 0;
  arg.forEach(function (item){
    item.addEventListener('click', function f(){
      i++;
      if (i > 1){
        item.removeEventListener('click', f);
      } else {
        item.classList.toggle('card_flip');
      }
    });
  });
}

function reverseFlipCard(arg){
  arg.forEach(function (item){
    item.classList.remove('card_flip');
  });
}

function returnToMenu(arg){
  arg.forEach(function (item){
    item.addEventListener('click', function (){
      menu.classList.remove('hidden');
      tableEasy.classList.add('hidden');
      tableNormal.classList.add('hidden');
      tableHard.classList.add('hidden');
    });
  });
}

