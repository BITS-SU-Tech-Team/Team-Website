var work = document.getElementsByClassName("work");
var content = document.getElementsByClassName("content")[0];
var links = document.getElementsByClassName("bring-link");


window.addEventListener('load',function(){
    work[0].classList.add('active');
    setTimeout(function() {
    work[1].classList.add('active1');
    },(500));
    setTimeout(function() {
        work[2].classList.add('active2');
    },(1000));
    document.getElementsByClassName("vector-img")[0].style.opacity = "1";
    document.getElementsByClassName("logo")[0].style.opacity = "1";

  })

function scaleup()
{
    content.style.transform = "scale(1.1)";
}

function scaledown()
{
    content.style.transform = "scale(1)";
}

// var count = 1;

// function changediv()
// {   if(count==0)
//     {
//     document.getElementsByClassName("color-div")[0].style.height = "100%";
//     document.getElementsByClassName("color-div")[0].style.width = "100%";
//     document.getElementsByClassName("color-div")[0].style.margin = "0 0 0 0";
//     document.getElementsByClassName("color-div")[0].style.borderRadius = "0";
//     count++;
//     setTimeout(function() 
//     {
//     document.getElementsByClassName("project-name")[0].style.color="white";
//     },(300));
//     setTimeout(function() 
//     {
//     document.getElementsByClassName("project-bio")[0].style.left = "50%";
//     document.getElementsByClassName("project-bio")[0].style.opacity = "1";
//     },(500));
//     }
//     else if(count==1)
//     {
//     document.getElementsByClassName("color-div")[0].style.height = "50px";
//     document.getElementsByClassName("color-div")[0].style.width = "50px";
//     document.getElementsByClassName("color-div")[0].style.marginTop = "24px";
//     document.getElementsByClassName("color-div")[0].style.marginLeft = "85%";
//     document.getElementsByClassName("color-div")[0].style.borderRadius = "50%";
//     setTimeout(function() 
//     {
//     document.getElementsByClassName("project-name")[0].style.color="#c60f7b";
//     },(300));
//     setTimeout(function() 
//     {
//     document.getElementsByClassName("project-bio")[0].style.left = "-100vw";
//     document.getElementsByClassName("project-bio")[0].style.opacity = "0";
//     },(500));
//     count--;   
//     }
// }

function bringp2()
{    if(document.getElementsByClassName("project-name")[0].innerHTML == "Project 2")
{
    return
}
    document.getElementsByClassName("color-div")[0].style.height = "50px";
    document.getElementsByClassName("color-div")[0].style.width = "50px";
    document.getElementsByClassName("color-div")[0].style.marginTop = "24px";
    document.getElementsByClassName("color-div")[0].style.marginLeft = "85%";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "50%";
    links[1].style.transform = "scale(1.1)";
    links[0].style.opacity = "0";
    links[2].style.opacity = "0";
    links[3].style.opacity = "0";
    setTimeout(function() 
    {
    document.getElementsByClassName("project-name")[0].style.color="#c60f7b";
    },(300));
    setTimeout(function() 
    {
    document.getElementsByClassName("project-bio")[0].style.left = "-100vw";
    document.getElementsByClassName("project-bio")[0].style.opacity = "0";
    document.getElementsByClassName("project-name")[0].style.left="-100vw";
    document.getElementsByClassName("project-name")[0].style.opacity="0";
    },(600));
    setTimeout(function() 
    {
    document.getElementsByClassName("color-div")[0].style.background = "#E81A4B";
    document.getElementsByClassName("project-name")[0].innerHTML = "Project 2";
    document.getElementsByClassName("project-name")[0].style.color="white";
    },(1000));
    setTimeout(function() 
    {
    document.getElementsByClassName("color-div")[0].style.height = "100%";
    document.getElementsByClassName("color-div")[0].style.width = "100%";
    document.getElementsByClassName("color-div")[0].style.margin = "0 0 0 0";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "0";
    document.getElementsByClassName("project-bio")[0].style.left = "50%";
    document.getElementsByClassName("project-bio")[0].style.opacity = "1";
    document.getElementsByClassName("project-name")[0].style.left="50%";
    document.getElementsByClassName("project-name")[0].style.opacity="1";
    links[1].style.transform = "scale(1)";
    links[0].style.opacity = "1";
    links[2].style.opacity = "1";
    links[3].style.opacity = "1";
    },(1200));
}

function bringp1()
{   if(document.getElementsByClassName("project-name")[0].innerHTML == "Project 1")
{
    return
}
    document.getElementsByClassName("color-div")[0].style.height = "50px";
    document.getElementsByClassName("color-div")[0].style.width = "50px";
    document.getElementsByClassName("color-div")[0].style.marginTop = "24px";
    document.getElementsByClassName("color-div")[0].style.marginLeft = "85%";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "50%";
    links[0].style.transform = "scale(1.1)";
    links[1].style.opacity = "0";
    links[2].style.opacity = "0";
    links[3].style.opacity = "0";
    setTimeout(function() 
    {
    document.getElementsByClassName("project-name")[0].style.color="#c60f7b";
    },(300));
    setTimeout(function() 
    {
    document.getElementsByClassName("project-bio")[0].style.left = "-100vw";
    document.getElementsByClassName("project-bio")[0].style.opacity = "0";
    document.getElementsByClassName("project-name")[0].style.left="-100vw";
    document.getElementsByClassName("project-name")[0].style.opacity="0";
    },(600));
    setTimeout(function() 
    {
    document.getElementsByClassName("color-div")[0].style.background = "#FFCF4E";
    document.getElementsByClassName("project-name")[0].innerHTML = "Project 1";
    document.getElementsByClassName("project-name")[0].style.color="white";
    },(1000));
    setTimeout(function() 
    {
    document.getElementsByClassName("color-div")[0].style.height = "100%";
    document.getElementsByClassName("color-div")[0].style.width = "100%";
    document.getElementsByClassName("color-div")[0].style.margin = "0 0 0 0";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "0";
    document.getElementsByClassName("project-bio")[0].style.left = "50%";
    document.getElementsByClassName("project-bio")[0].style.opacity = "1";
    document.getElementsByClassName("project-name")[0].style.left="50%";
    document.getElementsByClassName("project-name")[0].style.opacity="1";
    links[0].style.transform = "scale(1)";
    links[1].style.opacity = "1";
    links[2].style.opacity = "1";
    links[3].style.opacity = "1";
    },(1200));
}

function bringp3()
{    if(document.getElementsByClassName("project-name")[0].innerHTML == "Project 3")
{
    return
}
    document.getElementsByClassName("color-div")[0].style.height = "50px";
    document.getElementsByClassName("color-div")[0].style.width = "50px";
    document.getElementsByClassName("color-div")[0].style.marginTop = "24px";
    document.getElementsByClassName("color-div")[0].style.marginLeft = "85%";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "50%";
    links[2].style.transform = "scale(1.1)";
    links[1].style.opacity = "0";
    links[0].style.opacity = "0";
    links[3].style.opacity = "0";
    setTimeout(function() 
    {
    document.getElementsByClassName("project-name")[0].style.color="#c60f7b";
    },(300));
    setTimeout(function() 
    {
    document.getElementsByClassName("project-bio")[0].style.left = "-100vw";
    document.getElementsByClassName("project-bio")[0].style.opacity = "0";
    document.getElementsByClassName("project-name")[0].style.left="-100vw";
    document.getElementsByClassName("project-name")[0].style.opacity="0";
    },(600));
    setTimeout(function() 
    {
    document.getElementsByClassName("color-div")[0].style.background = "#0083CA";
    document.getElementsByClassName("project-name")[0].innerHTML = "Project 3";
    document.getElementsByClassName("project-name")[0].style.color="white";
    },(1000));
    setTimeout(function() 
    {
    document.getElementsByClassName("color-div")[0].style.height = "100%";
    document.getElementsByClassName("color-div")[0].style.width = "100%";
    document.getElementsByClassName("color-div")[0].style.margin = "0 0 0 0";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "0";
    document.getElementsByClassName("project-bio")[0].style.left = "50%";
    document.getElementsByClassName("project-bio")[0].style.opacity = "1";
    document.getElementsByClassName("project-name")[0].style.left="50%";
    document.getElementsByClassName("project-name")[0].style.opacity="1";
    links[2].style.transform = "scale(1)";
    links[1].style.opacity = "1";
    links[0].style.opacity = "1";
    links[3].style.opacity = "1";
    },(1200));
}


function bringp4()
{    if(document.getElementsByClassName("project-name")[0].innerHTML == "Project 4")
{
    return
}
    document.getElementsByClassName("color-div")[0].style.height = "50px";
    document.getElementsByClassName("color-div")[0].style.width = "50px";
    document.getElementsByClassName("color-div")[0].style.marginTop = "24px";
    document.getElementsByClassName("color-div")[0].style.marginLeft = "85%";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "50%";
    links[3].style.transform = "scale(1.1)";
    links[1].style.opacity = "0";
    links[0].style.opacity = "0";
    links[2].style.opacity = "0";
    setTimeout(function() 
    {
    document.getElementsByClassName("project-name")[0].style.color="#c60f7b";
    },(300));
    setTimeout(function() 
    {
    document.getElementsByClassName("project-bio")[0].style.left = "-100vw";
    document.getElementsByClassName("project-bio")[0].style.opacity = "0";
    document.getElementsByClassName("project-name")[0].style.left="-100vw";
    document.getElementsByClassName("project-name")[0].style.opacity="0";
    },(600));
    setTimeout(function() 
    {
    document.getElementsByClassName("color-div")[0].style.background = "#FF8C00";
    document.getElementsByClassName("project-name")[0].innerHTML = "Project 4";
    document.getElementsByClassName("project-name")[0].style.color="white";
    },(1000));
    setTimeout(function() 
    {
    document.getElementsByClassName("color-div")[0].style.height = "100%";
    document.getElementsByClassName("color-div")[0].style.width = "100%";
    document.getElementsByClassName("color-div")[0].style.margin = "0 0 0 0";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "0";
    document.getElementsByClassName("project-bio")[0].style.left = "50%";
    document.getElementsByClassName("project-bio")[0].style.opacity = "1";
    document.getElementsByClassName("project-name")[0].style.left="50%";
    document.getElementsByClassName("project-name")[0].style.opacity="1";
    links[3].style.transform = "scale(1)";
    links[1].style.opacity = "1";
    links[0].style.opacity = "1";
    links[2].style.opacity = "1";
    },(1200));
}

// **************************************-sidenav-*********************************//


