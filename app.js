// code for smooth reveal
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);

// menu list for mobile 

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
function navToggle(){
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click' , navToggle)

// Darkmode localstorage

let darkMode = localStorage.getItem('darkMode'); //cookie of 5 MB (no concern of security)
const darkModeToggle = document.querySelector('#dark-mode-toggle');



//check if dark mode is enabled
//if enabled, turn it off
//if disabled, turn it on

const enableDarkMode = () =>{
  //1. Add class darkmode to the body
  document.body.classList.add('darkmode');
  //2. Update darkmode in the local storage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () =>{
  //1. Add class darkmode to the body
  document.body.classList.remove('darkmode');
  //2. Update darkmode in the local storage
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled'){
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if(darkMode !== 'enabled'){
    enableDarkMode();
    // console.log(darkmode);
  }
  else {
    disableDarkMode();
    // console.log(darkmode);
  }
});

//show password feature basically change it from type password to type text (make sure css for text is available)

function myFunction() {
  const showpass = document.getElementById("password");
  if (showpass.type === "password") {
    showpass.type = "text";
  } else {
    showpass.type = "password";
  }
};

function myFunction2() {
  const showpass = document.getElementById("password2");
  if (showpass.type === "password") {
    showpass.type = "text";
  } else {
    showpass.type = "password";
  }
};

// preloader
var loader = document.querySelector("#preloader");

window.addEventListener("load", function(){
  loader.style.opacity = 0;
  setTimeout(function() {
    loader.style.display = "none";
  }, 300);

})

// popup for loginregister
var popupcontainer = document.querySelector(".popup");

document.querySelector(".register").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
    setTimeout(function() {
      document.querySelector(".popup").style.opacity = 1;
    }, 150);
  })
  
  document.querySelector(".fa-times-circle").addEventListener("click", function() {
    document.querySelector(".popup").style.opacity = 0;
    setTimeout(function () {
     document.querySelector(".popup").style.display = 'none'
    }, 900);
  })
  
  document.querySelector(".popup").onclick = function(e){
    e.stopPropagation();
  };
  

