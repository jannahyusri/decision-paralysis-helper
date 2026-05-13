import "./styles.css";

document.getElementById("askButton").addEventListener("click", function () {
  let question = document.getElementById("questionInput").value;

  if (question.trim() === "") {
    answerBox.textContent = "Hey, no cheating!";
    return;
  }

  let randomNumber = Math.floor(Math.random() * 20);
  let answer = "";

  switch (randomNumber) {
    case 0:
      answer = "Taylor Swift has a song for that";
      break;
    case 1:
      answer = "Potentially, I think";
      break;
    case 2:
      answer =
        "I think you need to ask someone else on that. A real person maybe?";
      break;
    case 3:
      answer = "100% maybe. Without a doubt.";
      break;
    case 4:
      answer = "Have you debriefed with the girls?";
      break;
    case 5:
      answer = "Yeah yeah sure whatever you say";
      break;
    case 6:
      answer = "I wouldn't think so.....";
      break;
    case 7:
      answer = "BRB, toilet break";
      break;
    case 8:
      answer = "Have you tried to google that?";
      break;
    case 9:
      answer = "Wait, what? Totally didn't catch that";
      break;
    case 10:
      answer = "Before that, have you tried therapy?";
      break;
    case 11:
      answer = "I'm afraid this requires further discussion with...myself";
      break;
    case 12:
      answer = "I'll get back to you on that....promise";
      break;
    case 13:
      answer = "I usually ask my mom about this";
      break;
    case 14:
      answer =
        "Pay RM50 for 5 more answers. RM100 for the answer that you want.";
      break;
    case 15:
      answer =
        "I think we need to get to know each other better. How about coffee tomorrow? Or is this weird...";
      break;
    case 16:
      answer = "Hold up. Let me get my lawyer";
      break;
    case 17:
      answer = "Have you asked the thing hanging on the ceiling?";
      break;
    default:
      answer = "Im kinda busy...hit me up again?";
  }

  document.getElementById("answerBox").textContent =
    "The Board says: " + answer;
});
