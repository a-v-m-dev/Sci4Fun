function renderResults(correct){
  var correct_score = correct;
  document.getElementById("getScore1QFormativeW4").value = correct_score;

  var test = $_("test");
  test.innerHTML = "<h2 class='w3-animate-zoom w3-center w3-xlarge w3-mobile' style='font-family: Arial, Helvetica, sans-serif; color: #E6E6FA;'>You got <span class='w3-tag w3-xlarge w3-green'>"+correct+"</span>  of <span class='w3-tag w3-xlarge w3-blue'>"+questions.length+"</span> questions.</h2>";
  $_("test_status").innerHTML = "<h2 class='w3-animate-zoom w3-sans-serif w3-xxlarge w3-mobile' style='color: #FFFFFF; text-shadow: 2px 2px 5px #1434A4'>You got assessment completed! <span class='fa fa-trophy' style='color:#FFD700;'></span></h2>";
  $_('timeleft').innerHTML = '';
  test.innerHTML += '<div class="w3-container w3-center" style="margin-top: 200px;"><button onclick="redirectPage()" name="score" class="w3-btn w3-blue w3-round-xxlarge w3-animate-zoom"><strong>See Score</strong></button>';

  setQuestionOrder();
  correct = 0;
  clearInterval(myVar);
  return false;
}

function redirectPage(){
var correct_score = document.getElementById("getScore1QFormativeW4");
localStorage.setItem("getScore1QFormativeW4", correct_score.value);

window.location.href = '1q_scores.html';
}

function checkAnswer(){
  var choices = "";
  choices = document.getElementsByName("choices");
  for (var i=0; i<choices.length; i++) {
    if (choices[i].checked) { 
      choice = choices[i].value; 
    }
  }
  rscore++;
  if (choice == questions[posn][5] && timelimit > 0) { 
    correct++; 
  }
  pos++;  
  posn = questionOrder[pos];
  if (pos < questions.length) { 
    renderQuestion();
    choice = "";
  }
  else {
    renderResults(correct);
    setTimeout("toAnalysisReport()", 3000); //3sec
  }
}

function toAnalysisReport(){
  redirectPage();
  window.location = "1q_scores.html";
}

window.onload = function() {
  setQuestionOrder();
  renderQuestion();
}