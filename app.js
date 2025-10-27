const ListItems = document.getElementById("listItem");
const openMe = document.getElementById("openMe")
const closeMe = document.getElementById("closeMe")
const overlay = document.getElementById("dim")
const details = document.querySelectorAll(".details");
const lists = document.querySelectorAll(".list");
const modeBtn = document.querySelector(".iconMode");


openMe.addEventListener("click", function(){
  ListItems.style.top = "0px"
  overlay.style.display = "block"
})

closeMe.addEventListener("click", function(){
  ListItems.style.top = "-3000px";
  overlay.style.display = "none";

})

overlay.addEventListener("click", function(){
  ListItems.style.top = "-3000px";
  overlay.style.display = "none";  
})

// Hide Work 
const seeMore = document.querySelector("#more");
const hiddenWorks = document.querySelector("#hide");
const seeLess = document.getElementById("less")
// footer year
footerYear = document.getElementById("year"),



// ...............................for about section ................................


 document.addEventListener("DOMContentLoaded", () => {

    window.showSkill = function (sectionId, el) {
      details.forEach((d) => d.classList.remove("special"));
      el.classList.add("special");
      lists.forEach((list) => list.classList.remove("active"));


      document.getElementById(sectionId).classList.add("active");
    };
  });

  // ...............................for light and darkMode ................................
  function themeMode(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
      modeBtn.src = "Images/light.svg"
    }
    else{
      modeBtn.src="Images/dark.svg"
    }
  }
  modeBtn.addEventListener("click", themeMode);
  // ...............................Hiddden Work ................................
  function workMore(){
    hiddenWorks.style.display = "grid";
    seeMore.style.display = "none"
    seeLess.style.display = "flex"
  }
  seeMore.addEventListener("click", workMore)

  function workLess(){
    hiddenWorks.style.display = "none";
    seeMore.style.display = "flex"
    seeLess.style.display = "none"
  }
  seeLess.addEventListener("click", workLess)

  footerYear.innerHTML = new Date().getFullYear();


