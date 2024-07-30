let divLogoText = document.getElementById("hoverLogo");
let hoverServies = document.getElementById("hoverServies");
let hoverProjects = document.getElementById("hoverProjects");
let hoverHelp = document.getElementById("hoverHelp");

divLogoText.onclick = function()
{
    location.href = "./"
}
hoverServies.onclick = function()
{
    location.href = "Servies.html";
}
hoverProjects.onclick = function()
{
    location.href = "Projects.html";
}
hoverHelp.onclick = function()
{
    location.href = "https://www.facebook.com/profile.php?id=100061540674435&locale=en_AR";
}

function colorLogo()
{
    divLogoText.style.backgroundColor = "#5a189a";
    divLogoText.style.cursor = "pointer";
}

function removeColorLogo()
{
    divLogoText.style.backgroundColor = "";
}

function colorServies()
{
    hoverServies.style.backgroundColor = "#5a189a";
    hoverServies.style.cursor = "pointer";
}

function removeColorServies()
{
    hoverServies.style.backgroundColor = "";
}

function colorProjects()
{
    hoverProjects.style.backgroundColor = "#5a189a";
    hoverProjects.style.cursor = "pointer";
}

function removeColorProjects()
{
    hoverProjects.style.backgroundColor = "";
}

function colorHelp()
{
    hoverHelp.style.backgroundColor = "#5a189a";
    hoverHelp.style.cursor = "pointer";
}

function removeColorHelp()
{
    hoverHelp.style.backgroundColor = "";
}
