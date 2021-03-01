const pageTitle = document.querySelector("title");
const photoBack = document.querySelector("#photoBack");
const photoFront = document.querySelector("#photoFront");
const messageAuthor = document.querySelector(".card__message__author");
const message = document.querySelector(".card__message__txt");

const buildMessagePage = () => {
    let currentPageUrl = window.location.href;
    let searchUrl = new URLSearchParams(currentPageUrl);
    for (let p of searchUrl) {
        let currentPageId = p[1];
        console.log(currentPageId);
        switch(currentPageId) {
            case "guillaume":
                console.log("Message de Guillaume");
                pageTitle.innerHTML = "Guillaume";
                photoBack.setAttribute("src", "../img/guillaume2.jpg");
                photoBack.setAttribute("alt", "Selfie de Guillaume qui se croit beau");
                photoFront.setAttribute("src", "../img/guillaume.jpg");
                photoFront.setAttribute("alt", "Guillaume et Marussia sur la plage en Gaspésie");
                messageAuthor.innerHTML = "Guillaume";
                message.innerHTML = "C'est la quatrième fois que je te souhaite ton anniversaire aujourd'hui, et je suis toujours aussi excité, comme la première fois.<br /> Voilà mon petit cadeau fait-maison traditionnel, une déclaration d'amour collaborative! Pour que tu continues de rayonner dans ma vie et dans celles de tous tes amis et de ta famille.<br /> Je t'aime.<br /> Joyeux anniversaire <i class='fas fa-heart'></i>";
        } 
    };
};

buildMessagePage();