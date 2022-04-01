var num1 = Math.floor(Math.random() * 6) + 1;
        var num2 = Math.floor(Math.random() * 6) + 1;
        var dice1 = document.querySelector("#dice1");
        var dice2 = document.querySelector("#dice2");
        if (num1 == 1) {
            dice1.setAttribute("src", "images/dice1.png");
        } else if (num1 == 2) {
            dice1.setAttribute("src", "images/dice2.png");
        } else if (num1 == 3) {
            dice1.setAttribute("src", "images/dice3.png");
        } else if (num1 == 4) {
            dice1.setAttribute("src", "images/dice4.png");
        } else if (num1 == 5) {
            dice1.setAttribute("src", "images/dice5.png");
        } else {
            dice1.setAttribute("src", "images/dice6.png");
        }
        if (num2 == 1) {
            dice2.setAttribute("src", "images/dice1.png");
        } else if (num2 == 2) {
            dice2.setAttribute("src", "images/dice2.png");
        } else if (num2 == 3) {
            dice2.setAttribute("src", "images/dice3.png");
        } else if (num2 == 4) {
            dice2.setAttribute("src", "images/dice4.png");
        } else if (num2 == 5) {
            dice2.setAttribute("src", "images/dice5.png");
        } else {
            dice2.setAttribute("src", "images/dice6.png");
        }
        var p1 = document.querySelector(".p1");
        var p2 = document.querySelector(".p2");
        var tied = document.querySelector(".tied");
        if (num1 == num2) {
            console.log("tied");
            p1.style.display = "none";
            p2.style.display = "none";
            tied.style.display = "inline";
        } else if (num1 < num2) {
            p2.style.display = "inline";
            console.log("num2 win");
        } else if (num1 > num2) {
            p1.style.display = "inline";
            console.log("num1 win");
        }