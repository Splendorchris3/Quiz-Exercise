let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let loader = document.querySelector(".loader");
let quz = document.querySelector(".quiz");
let buttons = document.querySelectorAll("button");
let progress = document.getElementById("progress");
let score = document.getElementById("score")
let scoreDiv = document.querySelector(".scoreDiv")
let facebookIcon = document.getElementById("facebook-icon");
let twitterIcon = document.getElementById("twitter-icon");
let instagramIcon = document.getElementById("instagram-icon");
let right = document.getElementById("right");
let wrong = docment.getElementById("wrong");
let endgame = document.getElementById("endgame");
let answerCount = 0;

let api =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";

let arr = [];
let nextQuestion = 0;

fetch(api)
  .then((Response) => Response.json())
  .then((data) => {
    let quiz = data.results;

    quiz.map((item) => {
      let quizObj = {
        question: item.question,
        options: [...item.incorrect_answers, item.correct_answer],
        answer: item.correct_answer,
      };

      quizObj.options.sort((a) => Math.random() - 0.5);
      arr.push(quizObj);
    });
    question.innerHTML = arr[nextQuestion].question;
    option1.innerHTML = arr[nextQuestion].options[0];
    option2.innerHTML = arr[nextQuestion].options[1];
    option3.innerHTML = arr[nextQuestion].options[2];
    option4.innerHTML = arr[nextQuestion].options[3];
    loader.style.display = "none";
    quz.style.display = "block";
    console.log(arr[0].answer);
  });

for (const button of buttons) {
  let btn = [option1, option2, option3, option4,];
  button.onclick = function () {
    btn.map((butt) => (butt.disabled = true))
    if (button.innerText === arr[nextQuestion].answer) {

      button.style.backgroundColor = "green";
      button.style.color = "white";
      right.play();
      answerCount++;
      setTimeout(() => {
        button.style.backgroundColor = "gray";
        button.style.color = "white";
      }, 3000);
    } else {
      button.style.backgroundColor = "red";
      button.style.color = "black";
      wrong.play("");
      setTimeout(() => {
        button.style.backgroundColor = "gray";
        button.style.color = "white";
      }, 3000);
    }
    setTimeout(() => {
      nextQuestion = nextQuestion + 1;
      progress.innerText = `Question ${nextQuestion + 1} of 10`
      btn.map((butt) => (butt.disabled = false));
       question.innerHTML = arr[nextQuestion].question;
       option1.innerHTML = arr[nextQuestion].options[0];
       option2.innerHTML = arr[nextQuestion].options[1];
       option3.innerHTML = arr[nextQuestion].options[2];
       option4.innerHTML = arr[nextQuestion].options[3];
    }, 3000);
    setTimeout(() => {
      if (nextQuestion == 10) {
        quz.style.display = "none"
        progress.style.display = "none"
        loader.style.display = "flex"
        
     setTimeout(() => {
      endgame.play();
      loader.style.display = "none"
       scoreDiv.style.display = "grid";
       score.innerText = `${answerCount} / 10`;
     }, 3000);
      }
    }, 3000);
  };
}



function redirectToFacebook() {
  let facebookLink = document.createElement("a");

  facebookLink.href = "https://www.facebook.com/profile.php?id=100081341208797";

  facebookLink.target = "_blank";

  facebookLink.innerHTML =
    '<i  class="bi bi-facebook" style="color: blue"></i>';

  facebookIcon.parentNode.replaceChild(facebookLink, facebookIcon);

  window.location.href =
    "https://www.facebook.com/profile.php?id=100081341208797";
}

function Twitter() {
  let twitterLink = document.createElement("a");

  twitterLink.href =
    "https://twitter.com/centsplendor3?t=UWqbHihMR0bHyiX80xNkDg&s=09";

  twitterLink.target = "_blank";

  twitterLink.innerHTML = '<i class="bi bi-twitter" style="color: blue"></i>';

  twitterIcon.parentNode.replaceChild(twitterLink, twitterIcon);

  window.location.href =
    "https://twitter.com/centsplendor3?t=UWqbHihMR0bHyiX80xNkDg&s=09";
}

function Instagram() {
  let instagramLink = document.createElement("a");
  instagramLink.href =
    "https://instagram.com/splendor_chris3?igshid=NTc4MTIwNjQ2YQ==";

  instagramLink.target = "_blank";

  instagramLink.innerHTML =
    '<i class="bi bi-instagram" style="color: purple"></i>';

  instagramIcon.parentNode.replaceChild(instagramLink, instagramIcon);

  window.location.href =
    "https://instagram.com/splendor_chris3?igshid=NTc4MTIwNjQ2YQ==";
}
