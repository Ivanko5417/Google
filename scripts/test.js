var appsIsVissible = false;
var clickOnButton = false;
var input = document.getElementById('input');
window.addEventListener('keypress',search(e));
function search(e){
  if(!e)
  location.href = 'https://www.google.ru/search?hl=ru&q='+document.getElementById('input').value+'&gws_rd=ssl';
  else {
    if(e.keyCode == 13)
    {
      search();
    }
  }
}

function lucky(){
  location.href ='https://www.google.com/doodles';
}

function sign(){
  location.href = 'https://accounts.google.com/signin/v2/identifier?hl=ru&passive=true&continue=https%3A%2F%2Fwww.google.by%2F%3Fgfe_rd%3Dcr%26ei%3DmxJEWdeTMY-8zAWe2rHgDw%26gws_rd%3Dssl&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
}
function switchApps()
{
  let elemApps = document.getElementById('appsId');
  if(!appsIsVissible) {
      elemApps.style.display = 'block';
      appsIsVissible = true;
  }
  else {
      appsIsVissible = false;
      elemApps.style.display = 'none';
  }
}
function apps(){
  clickOnButton = true;
  switchApps();
}
function bodyClick() {
  if (clickOnButton) {
    clickOnButton = false;
  }
  else {
    if(appsIsVissible)
    switchApps();
  }
}
function divApps()
{
  clickOnButton = true;
}
