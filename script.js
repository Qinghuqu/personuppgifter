let answer = document.querySelector('#answer');

answer.addEventListener('click', function(){
  answer.style="animation: "
});



let answerCircle = document.querySelector('#answerCircle');

let titleSphere = document.querySelector('#titleSphere');
let titles = document.getElementsByClassName('title');
let titlesCount = titles.length;



let yPos = window.scrollY;
let yPosFloor = Math.floor(yPos/400);
let yPosFloorLegacy = yPosFloor;

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
  console.log(yPos);

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
  }


  yPosFloorLegacy = yPosFloor;
}
