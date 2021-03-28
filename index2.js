var app = document.querySelector(".app");

var buttonStartGame = document.createElement("button");
buttonStartGame.innerHTML = "Давай сыиграем";
buttonStartGame.setAttribute("class", "app__button");

app.appendChild(buttonStartGame);

var container = document.createElement("div");
container.setAttribute("class", "app__container");
var container2 = document.createElement("div");
container2.setAttribute("class", "app__container2");
var minRange = document.createElement("input");
var maxRange = document.createElement("input");
var attemps = document.createElement("input");
minRange.setAttribute("type", "number");
minRange.setAttribute("class", "app__input");
minRange.setAttribute("value", "1");
maxRange.setAttribute("type", "number");
maxRange.setAttribute("class", "app__input");
maxRange.setAttribute("value", "100");
attemps.setAttribute("type", "number");
attemps.setAttribute("value", "5");
attemps.setAttribute("class", "app__input");

var buttonContinue = document.createElement("button");
buttonContinue.innerHTML = "Подтвердить выбор";
buttonContinue.setAttribute("class", "app__button");


var sectionGess = document.createElement("div");

var inputGessNumber = document.createElement("input");
inputGessNumber.setAttribute("type", "number");
inputGessNumber.setAttribute("class", "app__input");


buttonGessNumber = document.createElement("button");
buttonGessNumber.innerHTML = "Ну начнем угадывать";
buttonGessNumber.setAttribute("class", "app__button");

buttonTryAgain = document.createElement('button');
buttonTryAgain.innerHTML = "Попробовать еще раз";
buttonTryAgain.setAttribute("class", "app__button");

var resultDiv = document.createElement('div');
var arrResult = document.createElement('div');


var closeGame = document.createElement('button');
closeGame.innerHTML = "Закончить игру";
closeGame.setAttribute("class", "app__button");


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
    console.log(randomNumber)

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

  buttonGessNumber.addEventListener('click',function(){
    var userNum = +(inputGessNumber.value);
    var namDiffernrt = Math.abs(userNum -randomNumber);
    attemps--;

    

    
    if(attemps !== 0){
        if(userNum === randomNumber){
            resultDiv.innerHTML = 'Верно!Вы выиграли!'
        }
        else if(userNum < randomNumber || userNum > randomNumber){
            resultDiv.innerHTML = `Поробуй еще, осталось ${attemps} раз`;
            if(counter >= 1){
              console.log("namDiffernrt" ,namDiffernrt)
              if(namDiffernrt > 10) {
                resultDiv.innerHTML = `Холодно, Поробуй еще, осталось ${attemps} раз`;
              }
              else if(namDiffernrt > 5) {
                resultDiv.innerHTML = `Теплее, Поробуй еще, осталось ${attemps} раз`;
              }
              else{
                resultDiv.innerHTML = `Горячо, Поробуй еще, осталось ${attemps} раз`;
              }
            }
        }
    }
    else{
        resultDiv.innerHTML = "Вы проиграли,страница перезагрузится через 5 секунд";
        buttonGessNumber.disabled = true;
        buttonGessNumber.setAttribute('class', "app__button-disabled")
        setTimeout(()=>{
            window.location.reload()
        },5000);
    }
    counter++;
    app.append(resultDiv);
  })


  
  function isValid(num1, num2, num3) {
    if (num1 < 1 ||num1 > 200 ||
      num2 > 200 ||num2 < 1 ||
      num1 >= num2 ||
      num3 < 1 ||num3 > 15  ) {
      return false;
    } else if (num1 % 1 != 0 || num2 % 1 != 0 || num3 % 1 != 0) {
      return false;
    }
    return true;
  }


  closeGame.onclick = function(){
    window.location.reload();
  }
