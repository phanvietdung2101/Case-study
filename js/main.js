
const TIME = 60;
function confirm() {
    document.getElementById("confirm").style.display = "none";
    game.checkAnswer();
}

let game = new Game();
game.showQuestion();
game.showPoint();

let boxA = document.getElementById("boxA");
let boxB = document.getElementById("boxB");
let boxC = document.getElementById("boxC");
let boxD = document.getElementById("boxD");


// 50/50 button
function fiftyButton() {
    let correctAnswer = QUESTION[game.stage].correct;
    if( correctAnswer === "A" || correctAnswer === "D" ){
        boxB.innerText = "";
        boxC.innerText = "";
    } else if (correctAnswer === "B" || correctAnswer === "C"){
        boxA.innerText = "";
        boxD.innerText = "";
    }
}
// Survey Button
function surveyButton() {
    let correctAnswer = QUESTION[game.stage].correct;
    let str = "";

    let rateOfA = Math.floor( Math.random() * 100 ) ;
    let rateOfB = Math.floor(Math.random() * (100 - rateOfA)) ;
    let rateOfC = Math.floor( Math.random() * (100 - rateOfA - rateOfB));
    let rateOfD = Math.floor( Math.random() * (100 - rateOfA - rateOfB - rateOfC));

    str = 'A. ' + rateOfA + '% B. ' + rateOfB + '% C. ' + rateOfC + '% D. ' + rateOfD + '%';

    document.getElementById("survey").innerText = str;
}
// Count Down
{
    let countDown = setInterval(function () {
        game.time--;
        document.getElementById("countDown").innerHTML = "Thời gian còn lại : " + game.time + "giây";
    }, 1000);


    function checkCountDown() {
        if (game.time <= 0) {
            game.reset();
        }
    };
    setInterval(checkCountDown, 10);
}
// Click Event For Answer Box
{
    boxA.addEventListener("click", function () {
        game.chooseAnswer("A");
        removeToDefault();
        boxA.classList.add("chooseBox");
    });
    boxB.addEventListener("click", function () {
        game.chooseAnswer("B");
        removeToDefault();
        boxB.classList.add("chooseBox");
    });
    boxC.addEventListener("click", function () {
        game.chooseAnswer("C");
        removeToDefault();
        boxC.classList.add("chooseBox");
    });
    boxD.addEventListener("click", function () {
        game.chooseAnswer("D");
        removeToDefault();
        boxD.classList.add("chooseBox");
    });
}
// Remove
{
    function removeToDefault() {
        boxA.removeAttribute("class");
        boxA.classList.add("box");
        boxB.removeAttribute("class");
        boxB.classList.add("box");
        boxC.removeAttribute("class");
        boxC.classList.add("box");
        boxD.removeAttribute("class");
        boxD.classList.add("box");
        document.getElementById("alert").innerHTML = "";
        document.getElementById("alert").removeAttribute("class");
        document.getElementById("confirm").style.display = "block";
    }
}




