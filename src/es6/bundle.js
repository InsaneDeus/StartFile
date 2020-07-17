import "./App.scss";

let menuButton = document.getElementsByClassName("menu__button");
let menuLinks = document.getElementsByClassName("menu__links");

let tabsButton = document.getElementsByClassName("tabs__button");
let articleContainer = document.getElementsByClassName("article-container");

let mainButton = document.getElementsByClassName("main__button");
let articleContainerActive = document.getElementsByClassName("article-container_active");

function buttonCheck(){
    if(articleContainerActive[0].querySelectorAll(".article-container__item_hide").length === 0){
        mainButton[0].style.display = "none";
    }
    else{
        mainButton[0].style.display = "flex";
    };
};

buttonCheck();

// Меню

menuButton[0].addEventListener("click", function(){
    if(menuLinks[0].classList.contains("menu__links_hide")){
        menuLinks[0].classList.remove("menu__links_hide");
        menuButton[0].querySelector(".menu_escape").style.display = "block";
        menuButton[0].querySelector(".menu_open").style.display = "none";
    }
    else{
        menuLinks[0].classList.add("menu__links_hide");
        menuButton[0].querySelector(".menu_escape").style.display = "none";
        menuButton[0].querySelector(".menu_open").style.display = "flex";
    };
});


//Табы

for(let i = 0; i < tabsButton.length; i++){
    tabsButton[i].addEventListener("click", function(){
        for(let j = 0; j < tabsButton.length; j++){
            tabsButton[j].classList.remove("tabs__button_active");
            articleContainer[j].classList.remove("article-container_active");
        };
        tabsButton[i].classList.add("tabs__button_active");
        articleContainer[i].classList.add("article-container_active");
        buttonCheck();
    });
};

//Больше статей

mainButton[0].addEventListener("click", function(){
    let num = 6;

    if(articleContainerActive[0].querySelectorAll(".article-container__item_hide").length < 6){
        num = articleContainerActive[0].querySelectorAll(".article-container__item_hide").length;
    };
    for(let i = 0; i < num; i++){
        articleContainerActive[0].querySelectorAll(".article-container__item_hide")[0].classList.remove("article-container__item_hide");
    };
    buttonCheck();
})