
function init()
{
  const closeBtn = {
    workClose : document.querySelector('#work-close'),
    socialClose :document.querySelector('#social-close'),
    contactClose : document.querySelector('#contact-close')
  }
 
 
  const homePageImg = document.querySelector('#main-home-img');
  const introBox = document.querySelectorAll('.transition-box');
 
  const aLinks = document.querySelectorAll('.home-link')
  var navButtonClicked = false;

  var homeMenu = ['Social', 'Work' , 'Contact', 'About' ];

  //introAnimation

//  1.  home
  for (let i = 1; i <= introBox.length; i++) {
      if(i%2 == 0) 
      {
        setTimeout(() => {
            introBox[i-1].style = "width:30%; border-radius:2%; margin-left:70%;"
        }, 200*i);
      }
      else
      {
        setTimeout(() => {
            introBox[i-1].style = "width:30%; border-radius:2%;"
        }, 200*i);
      }
  }

// 2. Contact


 //filling linksss
  setTimeout(() => {
        for (let i = 1; i <= introBox.length; i++) {
      if(i%2 == 0) 
      {
        setTimeout(() => {
            aLinks[i-1].innerHTML = homeMenu[i-1];
            introBox[i-1].style = "margin-top:2%; background-color:var(--nav-btn); box-shadow:5px 5px 10px 5px #888888; height:10%; width:20%; margin-left:80%; opacity:1"
        }, 200*i);
      }
      else
      {
        setTimeout(() => {
            aLinks[i-1].innerHTML = homeMenu[i-1];
            introBox[i-1].style = "margin-top:2%; background-color:var(--nav-btn); box-shadow:5px 5px 10px 5px #888888; height:10%; width:20%; opacity:1;"
            
        }, 200*i);
      }
  }
  }, 2500);
  setTimeout(() => {
      homePageImg.style = "top:30%"
  }, 200);

// social page event
introBox[0].addEventListener('click',()=>{
  if(!navButtonClicked)
  {
    var spillShadow = document.querySelector('#spill-shadow')
    spillShadow.style = "left:100%"
    var social = document.querySelector('#social-page');
    social.style = "width:100%; left:0%; border-top-right-radius: 40%; border-bottom-right-radius:40% ;"
    navButtonClicked = true;
  }
 
})

//work page even
introBox[1].addEventListener('click',()=>{
  if(!navButtonClicked)
  {
    var spillShadow = document.querySelector('#spill-shadow')
    spillShadow.style = "left:-100%"
    var workPage = document.querySelector('#work-page');
  workPage.style = " left:0%;border-top-left-radius: 40%; border-bottom-left-radius:40%"
  navButtonClicked = true;
  setTimeout(() => {
    var imgPro = document.querySelector('#img-profile-cover');
    imgPro.style = "display:flex;"
  }, 1050);
  }
})

//Contact page event
introBox[2].addEventListener("click",()=>{
  if(!navButtonClicked)
  {
    var spillShadow = document.querySelector('#spill-shadow')
    spillShadow.style = "left:100%"
    var contact = document.querySelector('#contact-page');
    contact.style = "width:100%; left:0%; border-top-right-radius: 40%; border-bottom-right-radius:40% ;"
    navButtonClicked = true;
  }
})


//work close even
closeBtn.workClose.addEventListener('click',()=>{
  if(navButtonClicked){
      var spillShadow = document.querySelector('#spill-shadow');
      spillShadow.style = "left:0%";

    var workPage = document.querySelector('#work-page');
    workPage.style = "left:100%;"
    setTimeout(() => {
      var imgPro = document.querySelector('#img-profile-cover');
      imgPro.style = "display:none;"
    }, 800);
    navButtonClicked = false;
  }
})

//social Close
closeBtn.socialClose.addEventListener('click',()=>{
  if(navButtonClicked){
    var spillShadow = document.querySelector('#spill-shadow');
    spillShadow.style = "left:0%";
    var social = document.querySelector('#social-page');
    social.style = "width:20%; left:-20%;"
    navButtonClicked = false;
  }
})

//contact Close
closeBtn.contactClose.addEventListener('click',()=>{
  if(navButtonClicked){
    var spillShadow = document.querySelector('#spill-shadow');
    spillShadow.style = "left:0%";
    var contact = document.querySelector('#contact-page');
   
   
    contact.style = "width:20%; left:-20%;"
    navButtonClicked = false;
  }
})
 


}
init();