function myAlert()
{
  var cookies=document.cookie.split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key,value]) =>
  ({...accumulator, [key.trim()]: decodeURIComponent(value) }),
  {});
  if(cookies.visit==null)
  {
    window.alert('This is your first visit')
    document.cookie="visit=1"
  }
  else
  {
    window.alert('You have visited here more than once')
  }
}

function deleteCookie()
{
  document.cookie="visit=;expires= Wed, 30 Nov 2016 12:00:00 GMT";
  console.log(document.cookie);
}