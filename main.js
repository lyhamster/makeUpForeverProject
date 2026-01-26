import "./main.scss"
import "./animation.scss"
import "./dropdownMenu.scss"

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("inview");
            return;
        }
    });
}, {
    threshold: 0.4
});

const landingAnimTest = document.querySelectorAll(".landingAnim");
landingAnimTest.forEach(div => observer.observe(div)) ;

const navWrapperCross = document.querySelector(".crossWrapper")
navWrapperCross.addEventListener("click",() => {  
    const cross = document.querySelector(".navWrapper--cross");
    const crossTransformed = cross.classList.toggle("navWrapper--cross--transform");

      if(crossTransformed || cross) {
        const removeClass = document.querySelectorAll("section");
        removeClass.forEach((element)=> {
            element.classList.toggle("hide--openMenu")
        });

        const main = document.querySelector("main");
        main.classList.toggle("hide--openMenu");

        const body = document.querySelector("body");
        body.classList.toggle("openMenu--color")

        const dropdownWrapper = document.querySelector(".dropdownMenu__titleWrapper");
        dropdownWrapper.classList.toggle("openMenu--unset")
    }
})

const newsTitle = document.querySelector(".dropdownMenu--news")
newsTitle.addEventListener("click",() => {
    const newsSection = document.querySelectorAll("div.dropdownMenu--img > img");
    const newsHgroup = document.querySelectorAll("div.caca");

    newsSection.forEach((element) => {
    element.classList.toggle("burgerMenu__cross--hide")
    })

    newsHgroup.forEach((hgroup) => {
        hgroup.classList.toggle("dropdownMenu__hgroup")
        hgroup.classList.toggle("burgerMenu__cross--hide")
    })

    console.log(newsSection)

})

const bestseller = document.querySelector(".dropdownMenu--bestseller");
bestseller.addEventListener("click",() => {
    const bestsellerSection = document.querySelectorAll("h4.hideElement--bestseller, div.hideElement--bestseller > img")
  

    bestsellerSection.forEach((element) => {
        element.classList.toggle("burgerMenu__cross--hide");
    })

    document.querySelector(".openMenu--unset").classList.remove("dropdownMenu__titleWrapper");
})

