window.addEventListener("load",function myAlert()
{
  var cookies=document.cookie.split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key,value]) =>
  ({...accumulator, [key.trim()]: decodeURIComponent(value) }),
  {});
  if(cookies.visit==null)
  {
    //window.alert('This is your first visit')
    welcomeMessage.innerHTML="<h4>Welcome first time user. We recommend that if you are unfamiliar with similar apps to view our tutorial. Please leave us any feedback in the discussion forum.</h4>";
    document.cookie="visit=1"
  }
  else
  {
    //window.alert('You have visited here more than once')
  }
},false);

function deleteCookie()
{
  document.cookie="visit=;expires= Wed, 30 Nov 2016 12:00:00 GMT";
  console.log(document.cookie);
}