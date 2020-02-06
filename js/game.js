let Game = function () {
    let g = this;
    this.point = 0;
    this.time = TIME;
    this.stage = 0;
    this.answer = "";
    this.point = 0;

    this.showQuestion = function () {
        document.getElementById("question").innerHTML = QUESTION[this.stage].question;
        document.getElementById("boxA").innerHTML = QUESTION[this.stage].answer.A;
        document.getElementById("boxB").innerHTML = QUESTION[this.stage].answer.B;
        document.getElementById("boxC").innerHTML = QUESTION[this.stage].answer.C;
        document.getElementById("boxD").innerHTML = QUESTION[this.stage].answer.D;
    };

    this.showPoint = function () {
        document.getElementById("point").innerText = "Số tiền đạt được  " + this.point + " $" ;
    };

    this.chooseAnswer = function (answer) {
        this.answer = answer;
    };

    this.reset = function () {
        this.stage = 0;
        this.point = 0;
        removeToDefault();
        this.showQuestion();
        this.showPoint();
        this.time = TIME;
        document.getElementById("survey").innerHTML = ""
    };

    this.checkAnswer = function () {
        let successAudio = new Audio('audio/correct answer.mp3');
        let failureAudio = new Audio("audio/wrong answer.mp3");
        if(this.answer == QUESTION[this.stage].correct)
        {
            g.point += QUESTION[g.stage].point;
            if(g.stage >= 12){
                document.getElementById("alert").classList.add("successAlert");
                document.getElementById("alert").innerText = "Bạn đã chiến thắng và đạt được " + g.point + " $";
                successAudio.play();
                setTimeout(function () {
                    g.reset()
                },7000)
            } else {
                successAudio.play();
                document.getElementById("alert").classList.add("successAlert");
                document.getElementById("alert").innerHTML = "Chúc mừng ! Bạn đã trả lời đúng";
                this.alertRightAnswer();
                setTimeout(function () {
                    removeToDefault();
                    g.stage++;
                    document.getElementById("survey").innerHTML = "";
                    g.showQuestion();
                    g.showPoint();
                    g.time = TIME;
                    successAudio.pause();
                }, 3000);
            }
        } else {
            this.alertRightAnswer();
            failureAudio.play();
            document.getElementById("alert").classList.add("failureAlert");
            document.getElementById("alert").innerHTML = "Rất tiếc! Bạn đã trả lời sai và kết thúc với " + this.point + " $";
            setTimeout(function () {
                g.reset();
                failureAudio.pause();
            },7000);
        }
    };

    this.alertRightAnswer = function () {
        let boxId = "box" + QUESTION[this.stage].correct ;
        document.getElementById(boxId).classList.add("answerBox");
    };



};
