var app = document.querySelector(".app");


var buttonStartGame = document.createElement("button");
buttonStartGame.innerHTML = "Давай сыиграем";

app.appendChild(buttonStartGame);

var container = document.createElement("div");
var container2 = document.createElement("div");

var minRange = document.createElement("input");
var maxRange = document.createElement("input");
var attemps = document.createElement("input");
minRange.setAttribute("type", "number");
minRange.setAttribute("value", "1");
maxRange.setAttribute("type", "number");
maxRange.setAttribute("value", "100");
attemps.setAttribute("type", "number");
attemps.setAttribute("value", "5");

var buttonContinue = document.createElement("button");
buttonContinue.innerHTML = "Подтвердить выбор";


var sectionGess = document.createElement("div");
var inputGessNumber = document.createElement("input");
inputGessNumber.setAttribute("type", "number");


buttonGessNumber = document.createElement("button");
buttonGessNumber.innerHTML = "Ну начнем угадывать";

buttonTryAgain = document.createElement('button');
buttonTryAgain.innerHTML = "Попробовать еще раз";

var resultDiv = document.createElement('div');
var arrResult = document.createElement('div');


var closeGame = document.createElement('button');
closeGame.innerHTML = "Закончить игру"


var randomNumber = 0;
var counter = 0;


buttonStartGame.onclick = function () {
    app.innerHTML ="Выбери диапазон от 0 до 200,количество попыток от 1 до 15 и попрбуй угдать число)";
    container.appendChild(minRange);
    container.appendChild(maxRange);
    container.appendChild(attemps);
    container.appendChild(buttonContinue);
    app.appendChild(container);
    app.appendChild(container2);
  };


buttonContinue.onclick = function(){

    minRange = Number(minRange.value);
    maxRange = Number(maxRange.value);
    attemps = Number(attemps.value);
    randomNumber = getRandom(minRange, maxRange);

    if(isValid(minRange,maxRange,attemps)){
        app.innerHTML = `Ты выбрал диапазон от ${minRange} до  ${maxRange} с количеством попыток - ${attemps},попробуй угадать мое число))`;
        
        sectionGess.appendChild(inputGessNumber);
        sectionGess.appendChild(buttonGessNumber);
        sectionGess.appendChild(closeGame);
        app.appendChild(sectionGess);
    }
    else{
        app.innerHTML = "Не веррный ввод данных";
        app.appendChild(buttonTryAgain);
        buttonTryAgain.onclick = function(){
            window.location.reload()
        }
    }
}


  function getRandom(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  }


  function isValid(num1, num2, num3) {
    if (num1 < 1 ||num1 > 200 ||
      num2 > 200 ||num2 < 1 ||
      num1 >= num2 ||
      num3 < 1 ||num3 > 15 ) {
      return false;
    } else if (num1 % 1 != 0 || num2 % 1 != 0 || num3 % 1 != 0) {
      return false;
    }
    return true;
  }

  


  buttonGessNumber.addEventListener('click',function(){
    console.log(randomNumber)
    var userNum = +(inputGessNumber.value);
    attemps--;
    if(attemps !== 0){
        if(userNum === randomNumber){
            resultDiv.innerHTML = 'Верно!Вы выиграли!'
        }
        else if(userNum < randomNumber || userNum > randomNumber){
            resultDiv.innerHTML = `Поробуй еще, осталось ${attemps} раз`;
            let namDiffernrt = userNum -randomNumber;
        }
    }
    else{
        resultDiv.innerHTML = "Вы проиграли,страница перезагрузится через 2 секунды";
        buttonGessNumber.disabled = true;
        setTimeout(()=>{
            window.location.reload()
        },2000);
    }
    counter++;
    app.append(resultDiv);
  })

  closeGame.onclick = function(){
    window.location.reload();
  }
