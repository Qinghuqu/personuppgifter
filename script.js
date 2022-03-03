var titleSphere = document.querySelector('#titleSphere');
const titlesCount = document.getElementsByClassName('title').length;

const titles = [];
for (let i = 1; i <= titlesCount; i++)
{
  titles.push(document.querySelector('#title' + String(i)));
}

setInterval(loop, 20);

function loop()
{
  console.log(window.scrollY);
  for (let i = 0; i < titles.length; i++)
  {
    titles[i].style="transform: translateY(-50%) rotate("+String(window.scrollY+45*i)+"deg);";
  }
}
