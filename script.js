let answerCircle = document.querySelector('#answerCircle');

let titleSphere = document.querySelector('#titleSphere');
let titles = document.getElementsByClassName('title');
let titlesCount = titles.length;


let answers =
[
  {
    question: 'Vad är GDPR? Vilket är syftet med GDPR?',
    answerText: 'Dataskyddsförordningen (GDPR) är en europeisk förordning som avser hur personliga uppgifter får hanteras och spridas. Ett av dess syften enligt Integritetsskyddsmyndigheten (imy.se): "Att skydda enskildas grundläggande rättigheter och friheter, särskilt deras rätt till skydd av personuppgifter." Privatliv är en rätt som medborgarna har rätt till, '
  }
];


let yPos = window.scrollY;
let yPosFloor = Math.floor(yPos/400);
let yPosFloorLegacy = yPosFloor;


let answer = document.querySelector('#answer');
let lastAnswer = document.querySelector('#lastAnswer');
let nextAnswer = document.querySelector('#nextAnswer');

answer.innerHTML = "<h1 class='question'>" + answers[0].question + "</h1><p class='answer-text'>" + answers[0].answerText + "</p>";
lastAnswer.innerHTML = "answer" + String(yPosFloor - 1);
nextAnswer.innerHTML = "answer" + String(yPosFloor + 1);


console.log(titles);

let j = 0;
let m = 0;
let n = 0;


for (let i = 0; i < titlesCount; i++)
{
  titles[i].style="transform: translateY(-50%) rotate("+String(45*(yPosFloor-i))+"deg);";
  titles[i].addEventListener('click', function(){
    window.scroll(0, i * 400);
  })
}


setInterval(loop, 20);


for (let j = -3; j <= 3; j++)
{
  try
  {
    titles[yPosFloor + j].style.visibility = "visible";
    titles[yPosFloor + j].style.opacity = Math.cos(2 * Math.PI / 12 * j);
  }
  catch(e){}
}
titles[yPosFloor].style.fontWeight = "bold";


let timeout1, timeout2, timeout3;
let isRotating = false;


function loop(n)
{
  yPos = window.scrollY;

  yPosFloor = Math.floor(yPos/400);

  if (yPosFloor != yPosFloorLegacy)
  {
    for (m = 0; m < titlesCount; m++)
    {
      titles[m].style = "transform: translateY(-50%) rotate("+String(45*(yPosFloor-m))+"deg);";
    }

    for (n = -3; n <= 3; n++)
    {
      try
      {
        titles[yPosFloor + n].style.visibility = "visible";
        titles[yPosFloor + n].style.opacity = Math.cos(2 * Math.PI / 12 * n);
      }
      catch(e) {}
    }

    titles[yPosFloor].style.fontWeight = "bold";

    if (yPosFloor > yPosFloorLegacy)
    {
      document.body.removeChild(answer);
      document.body.appendChild(answer);
      document.body.removeChild(lastAnswer);
      document.body.appendChild(lastAnswer);

      answer.innerHTML = "answer" + String(yPosFloor);
      nextAnswer.innerHTML = "answer" + String(yPosFloor + 1);
      lastAnswer.innerHTML = "answer" + String(yPosFloor - 1);

      answer.style = "animation: answer-change-down 1s;";
      lastAnswer.style = "animation: last-answer-change-down 1s;";
    }

    if (yPosFloor < yPosFloorLegacy)
    {
      document.body.removeChild(answer);
      document.body.appendChild(answer);
      document.body.removeChild(nextAnswer);
      document.body.appendChild(nextAnswer);

      answer.innerHTML = "answer" + String(yPosFloor);
      nextAnswer.innerHTML = "answer" + String(yPosFloor + 1);
      lastAnswer.innerHTML = "answer" + String(yPosFloor - 1);

      answer.style = "animation: answer-change-up 1s;";
      nextAnswer.style = "animation: next-answer-change-up 1s;";
    }
  }


  yPosFloorLegacy = yPosFloor;
}
