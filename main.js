import "./main.scss"
import "./animation.scss"

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


