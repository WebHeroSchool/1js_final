var menu = document.querySelector('.menu');
var table_easy = document.querySelector('.table_easy');
var table_normal = document.querySelector('.table_normal');
var table_hard = document.querySelector('.table_hard');
var startButton = document.querySelector('button');
var card_f_names = ['card_front', 'card_bug', 'card_front', 'card_bug'];
var i;
function StartGame() {
  var cardInner = document.querySelectorAll('.card_inner');
  var difficulty = document.querySelectorAll('.diff_variant');
  var table_easy_cards = document.querySelectorAll('.table_easy .card_inner');
  var table_normal_cards = document.querySelectorAll('.table_normal .card_inner');
  var table_hard_cards = document.querySelectorAll('.table_hard .card_inner');
  var card_fronts;
  cardInner.forEach(function(item){
    i=0;
    item.style.transform = 'rotateY(0deg)';
  })
  cardInner.forEach(function(item){
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
    menu.classList.toggle('hidden');
    table_easy.classList.toggle('hidden');
    var checkCards = document.querySelectorAll('.table_easy_cards .card_back');
    if (checkCards.length == 0){
      table_easy_cards.forEach(function(item){
        var card_back = document.createElement('div');
        var card_front = document.createElement('div');
        card_back.classList.add('card_back');
        card_front.classList.add(card_f_names[Math.floor(Math.random()*2)]);
        item.appendChild(card_back);
        item.appendChild(card_front);
      })
    } else{
      //simple
    }
    card_fronts = document.querySelectorAll('.table_easy .card_bug, .table_easy .card_front');
    card_fronts.forEach(function(item){
      if(item.classList.contains('card_bug')){
        item.classList.toggle('card_bug');
      } else if (item.classList.contains('card_front')){
        item.classList.toggle('card_front')
      }
      item.classList.add(card_f_names[Math.floor(Math.random()*2)]);

      })

    card_fronts = document.querySelectorAll('.table_easy .card_bug, .table_easy .card_front');
    card_fronts.forEach(function(item){
      item.addEventListener('click', Restart);
    })

  } else if(difficulty[1].checked == true){

      menu.classList.toggle('hidden');
      table_normal.classList.toggle('hidden');
      var checkCards = document.querySelectorAll('.table_normal .card_back');
      if (checkCards.length ==0){
        table_normal_cards.forEach(function(item){
          var card_back = document.createElement('div');
          var card_front = document.createElement('div');
          card_back.classList.add('card_back');
          card_front.classList.add(card_f_names[Math.floor(Math.random()*2)]);
          item.appendChild(card_back);
          item.appendChild(card_front);
        })
      } else{
        //simple
      }
      card_fronts = document.querySelectorAll('.table_normal .card_bug, .table_normal .card_front');
      card_fronts.forEach(function(item){
        if(item.classList.contains('card_bug')){
          item.classList.toggle('card_bug');
        } else if (item.classList.contains('card_front')){
          item.classList.toggle('card_front')
        }
        item.classList.add(card_f_names[Math.floor(Math.random()*2)]);

        })

      card_fronts = document.querySelectorAll('.table_normal .card_bug, .table_normal .card_front');
      card_fronts.forEach(function(item){
        item.addEventListener('click', Restart);
      })
    } else if(difficulty[2].checked == true){
        menu.classList.toggle('hidden');
        table_hard.classList.toggle('hidden');
        var checkCards = document.querySelectorAll('.table_hard .card_back');
        if (checkCards.length ==0){
          table_hard_cards.forEach(function(item){
            var card_back = document.createElement('div');
            var card_front = document.createElement('div');
            card_back.classList.add('card_back');
            card_front.classList.add(card_f_names[Math.floor(Math.random()*2)]);
            item.appendChild(card_back);
            item.appendChild(card_front);
          })
        } else{
          //simple
        }
        var card_fronts = document.querySelectorAll('.table_hard .card_bug, .table_hard .card_front');
        card_fronts.forEach(function(item){
          if(item.classList.contains('card_bug')){
            item.classList.toggle('card_bug');
          } else if (item.classList.contains('card_front')){
            item.classList.toggle('card_front')
          }
          item.classList.add(card_f_names[Math.floor(Math.random()*2)]);

          })

        card_fronts = document.querySelectorAll('.table_hard .card_bug, .table_hard .card_front');
        card_fronts.forEach(function(item){
          item.addEventListener('click', Restart);
        })
  }
}

function Restart(){
  menu.classList.toggle('hidden');
  table_easy.classList.add('hidden');
  table_normal.classList.add('hidden');
  table_hard.classList.add('hidden');
}


startButton.addEventListener('click', StartGame);
