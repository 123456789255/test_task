const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}


$(document).ready(function() {
    $('.single-item').slick({
        arrows: false,
        dots: true,
        infinite: true,
        draggable: false,
        fade: false,
        edgeFriction: true,
        variableWidth: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                dots: false,
            }
        }, ],
    });
});