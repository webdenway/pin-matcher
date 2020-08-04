// pinCode generator area=================================

const generateButton = document.getElementById("random-code-generator");
generateButton.addEventListener("click", function() {

    const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    document.getElementById("code-display").value = randomNumber;

})

// pin board area==============================================

const buttonNumber = document.getElementsByClassName("button");
for (i = 0; i < buttonNumber.length; i++) {
    buttonNumber[i].addEventListener("click", function() {
        const displayNumber = this.innerHTML;

        if (displayNumber == "C") {
            document.getElementById("display-area").value = "";


        } else if (displayNumber == "&lt;") {
            const removeDigit = document.getElementById("display-area").value;
            const clearDigit = removeDigit.slice(0, -1);
            document.getElementById("display-area").value = clearDigit;

        } else {
            document.getElementById("display-area").value += displayNumber;

        }
    })
}
// match and massage area=============================

const submitBtn = document.getElementById("pin-submit");
submitBtn.addEventListener("click", function() {

    const matchRandom = document.getElementById("code-display").value;
    const submitNumber = document.getElementById("display-area").value;

    if (matchRandom == submitNumber) {
        document.getElementById("massage-right").style.display = "block";
        document.getElementById("massage-wrong").style.display = "none";

    } else {
        document.getElementById("massage-right").style.display = "none";
        document.getElementById("massage-wrong").style.display = "block";

    }
    // =====Try Left================
    const num = document.getElementById("action-remaining").innerHTML;
    if (matchRandom !== submitNumber && num > 0) {

        document.getElementById("action-remaining").innerHTML--;
    } else {
        document.getElementById("pin-submit").disabled = true;
    }
})