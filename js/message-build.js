const pageTitle = document.querySelector("title");
const photoBack = document.querySelector("#photoBack");
const photoFront = document.querySelector("#photoFront");
const messageAuthor = document.querySelector(".card__message__author");
const message = document.querySelector(".card__message__txt");
const audio = document.querySelector("#audio");

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
                photoBack.setAttribute("src", "../img/guillaume2.jpeg");
                photoBack.setAttribute("alt", "Guillaume et Marussia à Rimouski");
                photoFront.setAttribute("src", "../img/guillaume.jpg");
                photoFront.setAttribute("alt", "Guillaume et Marussia sur la plage en Gaspésie");
                messageAuthor.innerHTML = "Guillaume";
                message.innerHTML = "C'est la cinquième fois que je te souhaite ton anniversaire aujourd'hui, et je suis toujours aussi excité, comme la première fois.<br /> Voilà mon petit cadeau fait-maison traditionnel, une déclaration d'amour collaborative! Pour que tu continues de rayonner dans ma vie et dans celles de tous tes amis et de ta famille.<br /> Je t'aime.<br /> Joyeux anniversaire <i class='fas fa-heart'></i>";
                audio.setAttribute("src", "../mus/guillaume.mp3");
                break;
            case "juliette":
                console.log("Message de Juliette");
                pageTitle.innerHTML = "Juliette";
                photoBack.setAttribute("src", "../img/juliette2.png");
                photoBack.setAttribute("alt", "Juliette et Marussia jouent une pièce de théâtre");
                photoFront.setAttribute("src", "../img/juliette.png");
                photoFront.setAttribute("alt", "Juliette et Marussia petites");
                messageAuthor.innerHTML = "Juliette";
                message.innerHTML = "Joyeux anniversaire ma grande soeur chérie d’amour ! <br /> J’ai choisi ces deux photos car elles montrent à la perfection la philosophie qui nous anime: se supporter dans les bons, comme dans les mauvais moments. <br /> Je t’aime fort !";
                audio.setAttribute("src", "../mus/juliette.mp3");
                break;
            case "alix":
                console.log("Message d'Alix'");
                pageTitle.innerHTML = "Alix";
                photoBack.setAttribute("src", "../img/alix2.jpg");
                photoBack.setAttribute("alt", "Alix, Marussia et d'autres amis en soirée");
                photoFront.setAttribute("src", "../img/alix.jpg");
                photoFront.setAttribute("alt", "Alix et Marussia aux 24 ans de Marussia");
                messageAuthor.innerHTML = "Alix";
                message.innerHTML = "Ma Maru d’amour, belle de nuit comme de jour,<br /> Je te souhaite un magnifique anniversaire et une magnifique journée bien entourée,<br /> Et puis en fait je te souhaite tout le bonheur du monde, je t’aime très très très très très fort,<br /> Parce que comme dit Angèle, Que Du Love.<br /> PS: J'ai extrêmement hâte de te retrouver.";
                audio.setAttribute("src", "../mus/alix.mp3");
                break;
        } 
    };
};

buildMessagePage();