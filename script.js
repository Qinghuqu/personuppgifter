let titleSphere = document.querySelector('#titleSphere');
let titlesCount = document.getElementsByClassName('title').length;

let titles = [];
for (let i = 1; i <= titlesCount; i++)
{
  titles.push(document.querySelector('#title' + String(i)));
}


let yPos = window.scrollY;
let yPosFloor = Math.floor(yPos/400);
let yPosFloorLegacy = yPosFloor;


for (let i = 0; i < titlesCount; i++)
{
  titles[i].style="transform: translateY(-50%) rotate("+String(45*(yPosFloor-i))+"deg);";
}


setInterval(loop, 20);


for (let i = 0; i <= titlesCount; i++)
{
  titles[i].addEventListener("click", function() {
    window.scrollY = i * 400;
  });
}

for (let i = -3; i <= 3; i++)
{
  try
  {
    titles[yPosFloor + i].style.visibility = "visible";
    titles[yPosFloor + i].style.opacity = Math.cos(2 * Math.PI / 12 * i);
  }
  catch(e){}
}
titles[yPosFloor].style.fontWeight = "bold";


function loop()
{
  yPos = window.scrollY;
  console.log(yPos);

  yPosFloor = Math.floor(yPos/400);

  if (yPosFloor != yPosFloorLegacy)
  {
    for (let i = 0; i < titlesCount; i++)
    {
      titles[i].style = "transform: translateY(-50%) rotate("+String(45*(yPosFloor-i))+"deg);";
    }

    for (i = -3; i <= 3; i++)
    {
      try
      {
        titles[yPosFloor + i].style.visibility = "visible";
        titles[yPosFloor + i].style.opacity = Math.cos(2 * Math.PI / 12 * i);
      }
      catch(e) {}
    }

    titles[yPosFloor].style.fontWeight = "bold";
  }

  yPosFloorLegacy = yPosFloor;
}
