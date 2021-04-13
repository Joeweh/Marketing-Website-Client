const downloadButton = document.getElementById('download-button')

function detectOS()
{
  let os = "";

  if (navigator.appVersion.indexOf("Win") != -1) 
  {
    os = "For Windows";
  } 

  else if (navigator.appVersion.indexOf("Mac") != -1)
  {
    os = "For MacOS";
  }

  else if (navigator.appVersion.indexOf("X11") != -1)
  {
    os = "For UNIX";
  } 

  else if (navigator.appVersion.indexOf("Linux") != -1)
  {
    os = "For Linux";
  }
  return os;
}

function setDownloadText()
{
  downloadButton.innerHTML = "Download " + detectOS()
}

setDownloadText()