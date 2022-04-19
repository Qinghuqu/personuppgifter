let answerCircle = document.querySelector('#answerCircle');

let titleSphere = document.querySelector('#titleSphere');
let titles = document.getElementsByClassName('title');
let titlesCount = titles.length;


let answers =
[
  {
    question: 'Vad är GDPR? Vilket är syftet med GDPR?',
    answerText: 'Dataskyddsförordningen (GDPR) är en europeisk förordning som avser hur personliga uppgifter får hanteras och spridas. Ett av dess syften enligt Integritetsskyddsmyndigheten (imy.se): "Att skydda enskildas grundläggande rättigheter och friheter, särskilt deras rätt till skydd av personuppgifter."'
  },

  {
    question: 'Vad räknas som personuppgifter?',
    answerText: 'Personuppgifter är information som kan kopplas till en individ. Dessa kan vara namn, födelsedatum, bostadsadress, kontaktuppgifter, jobb med mera.'
  },

  {
    question: 'Vad kan känsliga personuppgifter vara?',
    answerText: 'Några exempel på känsliga personuppgifter är medicinsk information och brottsregister.'
  },

  {
    question: 'Vilka personuppgifter kan du publicera på din hemsida?',
    answerText: ''
  },

  {
    question: 'Vad är det för skillnad på Tryckfrihetsförordningen (TF) och Yttrandefrihetsgrundlagen (YGL)?',
    answerText: ''
  },

  {
    question: 'Vad går Tryckfrihetsförordningen (TF) och Yttrandefrihetsgrundlagen (YGL) ut på?',
    answerText: ''
  },

  {
    question: 'Vilka undantag finns från Tryckfrihetsförordningen (TF) och Yttrandefrihetsgrundlagen (YGL)?',
    answerText: ''
  },

  {
    question: 'Ett av undantagen har en koppling till känsliga personuppgifter? Vilken?',
    answerText: ''
  },

  {
    question: 'Berätta om den ansvarige utgivarens roll då det gäller Tryckfrihetsförordningen (TF) och Yttrandefrihetsgrundlagen (YGL).',
    answerText: ''
  },

  {
    question: 'Vad innebär upphovsrätt? Vad omfattas av upphovsrätten?',
    answerText: ''
  },

  {
    question: 'Hur länge gäller upphovsrätten?',
    answerText: ''
  },

  {
    question: 'Får du visa vilken bild som helst på din hemsida?',
    answerText: ''
  },

  {
    question: 'Får du möjliggöra spelandet av en låt på din hemsida?',
    answerText: ''
  },

  {
    question: 'Får du möjliggöra spelandet av en film på din hemsida?',
    answerText: ''
  },

  {
    question: 'Vad är Creative Commons? Hur kan du ha nytta av det som webbutvecklare?',
    answerText: ''
  }

];


let yPos = window.scrollY;
let yPosFloor = Math.floor(yPos/400);
let yPosFloorLegacy = yPosFloor;


let answer = document.querySelector('#answer');
let lastAnswer = document.querySelector('#lastAnswer');
let nextAnswer = document.querySelector('#nextAnswer');

answer.innerHTML = "<h1 class='question'>" + answers[yPosFloor].question + "</h1><p class='answer-text'>" + answers[yPosFloor].answerText + "</p>";
if (yPosFloor >= 1)
{
  lastAnswer.innerHTML = "<h1 class='question'>" + answers[yPosFloor - 1].question + "</h1><p class='answer-text'>" + answers[yPosFloor - 1].answerText + "</p>";
}
if (yPosFloor < answers.length - 1)
{
  nextAnswer.innerHTML = "<h1 class='question'>" + answers[yPosFloor + 1].question + "</h1><p class='answer-text'>" + answers[yPosFloor + 1].answerText + "</p>";
}


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

      answer.innerHTML = "<h1 class='question'>" + answers[yPosFloor].question + "</h1><p class='answer-text'>" + answers[yPosFloor].answerText + "</p>";
      if (yPosFloor >= 1)
      {
        lastAnswer.innerHTML = "<h1 class='question'>" + answers[yPosFloor - 1].question + "</h1><p class='answer-text'>" + answers[yPosFloor - 1].answerText + "</p>";
      }
      if (yPosFloor < answers.length - 1)
      {
        nextAnswer.innerHTML = "<h1 class='question'>" + answers[yPosFloor + 1].question + "</h1><p class='answer-text'>" + answers[yPosFloor + 1].answerText + "</p>";
      }

      answer.style = "animation: answer-change-down 1s;";
      lastAnswer.style = "animation: last-answer-change-down 1s;";
    }

    if (yPosFloor < yPosFloorLegacy)
    {
      document.body.removeChild(answer);
      document.body.appendChild(answer);
      document.body.removeChild(nextAnswer);
      document.body.appendChild(nextAnswer);

      answer.innerHTML = "<h1 class='question'>" + answers[yPosFloor].question + "</h1><p class='answer-text'>" + answers[yPosFloor].answerText + "</p>";
      if (yPosFloor >= 1)
      {
        lastAnswer.innerHTML = "<h1 class='question'>" + answers[yPosFloor - 1].question + "</h1><p class='answer-text'>" + answers[yPosFloor - 1].answerText + "</p>";
      }
      if (yPosFloor < answers.length - 1)
      {
        nextAnswer.innerHTML = "<h1 class='question'>" + answers[yPosFloor + 1].question + "</h1><p class='answer-text'>" + answers[yPosFloor + 1].answerText + "</p>";
      }

      answer.style = "animation: answer-change-up 1s;";
      nextAnswer.style = "animation: next-answer-change-up 1s;";
    }
  }


  yPosFloorLegacy = yPosFloor;
}
