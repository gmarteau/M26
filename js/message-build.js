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
                console.log("Message d'Alix");
                pageTitle.innerHTML = "Alix";
                photoBack.setAttribute("src", "../img/alix2.jpg");
                photoBack.setAttribute("alt", "Alix, Marussia et d'autres amis en soirée");
                photoFront.setAttribute("src", "../img/alix.jpg");
                photoFront.setAttribute("alt", "Alix et Marussia aux 24 ans de Marussia");
                messageAuthor.innerHTML = "Alix";
                message.innerHTML = "Ma Maru d’amour, belle de nuit comme de jour,<br /> Je te souhaite un magnifique anniversaire et une magnifique journée bien entourée,<br /> Et puis en fait je te souhaite tout le bonheur du monde, je t’aime très très très très très fort,<br /> Parce que comme dit Angèle, Que Du Love.<br /> PS: J'ai extrêmement hâte de te retrouver.";
                audio.setAttribute("src", "../mus/alix.mp3");
                break;
            case "darons":
                console.log("Message de Catherine et Thierry");
                pageTitle.innerHTML = "Catherine et Thierry";
                photoBack.setAttribute("src", "../img/darons2.jpg");
                photoBack.setAttribute("alt", "Marussia, Guillaume et ses parents prennent l'apéro sur la plage en Martinique");
                photoFront.setAttribute("src", "../img/darons.jpg");
                photoFront.setAttribute("alt", "Les parents de Guillaume en Martinique");
                messageAuthor.innerHTML = "Catherine et Thierry";
                messageAuthor.classList.add("card__message__author--long");
                message.innerHTML = "Tu es un rayon de soleil.<br /> Ne change surtout pas!<br /> Joyeux anniversaire,<br /> avec toute notre affection <i class='fas fa-heart'></i>";
                audio.setAttribute("src", "../mus/darons.mp3");
                break;   
            case "morgane":
                console.log("Message de Morgane");
                pageTitle.innerHTML = "Morgane";
                photoBack.setAttribute("src", "../img/morgane2.jpg");
                photoBack.setAttribute("alt", "Marussia à Montréal, de dos avec son bonnet ours");
                photoFront.setAttribute("src", "");
                photoFront.setAttribute("alt", "");
                messageAuthor.innerHTML = "Morgane";
                message.innerHTML = "";
                audio.setAttribute("src", "../mus/morgane.mp3");
                break;   
            case "bib":
                console.log("Message de Briac");
                pageTitle.innerHTML = "Briac";
                photoBack.setAttribute("src", "");
                photoBack.setAttribute("alt", "");
                photoFront.setAttribute("src", "");
                photoFront.setAttribute("alt", "");
                messageAuthor.innerHTML = "Briac";
                message.classList.add("card__message__txt--less-margin");
                message.innerHTML = "Joyeux anniversaire Marussia!<br /> En prenant un peu de recul je réalise que l'on s'est rencontré il y a 4 ans déjà et pourtant on ne se connait pas si bien que ça. Cela n'empêche que tu m'as déjà apporté pas mal de positif dans ma vie, rien qu'en rendant mon cousin heureux ce qui n'était pas forcement gagné d'avance puis en me faisant découvrir Montréal aussi mais surtout, en me transmettant ton savoir en matière de magie noire!  J'ai hâte d'être enfin à Nantes l'année prochaine pour que l'on puisse se voir plus!";
                audio.setAttribute("src", "../mus/bib.mp3");
                break;
            case "lucie":
                console.log("Message de Lucie");
                pageTitle.innerHTML = "Lucie";
                photoBack.setAttribute("src", "../img/lucie2.jpeg");
                photoBack.setAttribute("alt", "Lucie sur la plage en Gaspésie");
                photoFront.setAttribute("src", "../img/lucie.jpeg");
                photoFront.setAttribute("alt", "Lucie fait du kayak en Gaspésie");
                messageAuthor.innerHTML = "Lucie";
                message.innerHTML = "*WOUF*<br /> Je suis une saucisse qui aime sa maman même si j'aboie sur tout le monde, je me casse le dos et je mange des poubelles!";
                audio.setAttribute("src", "../mus/lucie.mp3");
                break;
            case "lalou":
                console.log("Message de Lalou et Vicky");
                pageTitle.innerHTML = "Lalou et Vicky";
                photoBack.classList.add("img--fill");
                photoBack.setAttribute("src", "../img/lalou3.jpg");
                photoBack.setAttribute("alt", "Lalou et Vicky déguisés en Frida Kahlo");
                photoFront.setAttribute("src", "../img/lalou.jpg");
                photoFront.setAttribute("alt", "Lalou et Vicky déguisés sur un balcon à Montréal");
                messageAuthor.innerHTML = "Lalou et Vicky";
                message.classList.add("card__message__txt--less-margin");
                message.innerHTML = "Wesh Maru !<br /> Bon bah of course que tu nous manques beaucoup beaucoup ! Moi (Lalou) je m’ennuie beaucoup de tes performances épiques (d’où le choix musical tu catch ?) ! Hâte de te retrouver cet été et de faire une grosse fête de non-anniversaire commun ! Aussi, ton anniversaire marquera à jamais la dernière fête du monde d’avant, ça fait une raison de plus pour se mettre à l’envers !<br /> Muchos besos et du gros love, on t’aime fort <i class='fas fa-heart'></i> <i class='fas fa-fire'></i>";
                audio.setAttribute("src", "../mus/lalou.mp3");
                break;
            case "hugues":
                console.log("Message de Hugues");
                pageTitle.innerHTML = "Hugues";
                photoBack.setAttribute("src", "../img/hugues2.jpg");
                photoBack.setAttribute("alt", "Hugues boit du vin dans un pichet de festival en plastique");
                photoFront.setAttribute("src", "../img/hugues.jpg");
                photoFront.setAttribute("alt", "Hugues prend la pose en extérieur");
                messageAuthor.innerHTML = "Hugues";
                message.innerHTML = "";
                audio.setAttribute("src", "../mus/hugues.mp3");
                break;
            case "naomi":
                console.log("Message de Naomi et Steve");
                pageTitle.innerHTML = "Naomi et Steve";
                photoBack.setAttribute("src", "");
                photoBack.setAttribute("alt", "");
                photoFront.setAttribute("src", "../img/naomi.jpg");
                photoFront.setAttribute("alt", "Naomi et Steve en vacances");
                messageAuthor.innerHTML = "Naomi et Steve";
                message.classList.add("card__message__txt--less-margin");
                message.innerHTML = "On te souhaite un très bel anniversaire!<br /> On est heureux de connaître une fille rayonnante comme toi.<br /> La musique qu’on a choisie correspond à une story que tu avais mise quand on s’est rencontré la première fois en faisant nos roulettes <i class='fas fa-grin-alt'></i><br /> On a hâte d’avoir de nouveaux souvenirs avec toi.<br /> Ps: notre deuxième souvenir avec toi c’est ton mime de radar! F A M O U S<br /> Gros zoubiiiiii";
                audio.setAttribute("src", "../mus/naomi.mp3");
                break;
            case "anais":
                console.log("Message de Anaïs et Pierre");
                pageTitle.innerHTML = "Anaïs et Pierre";
                photoBack.setAttribute("src", "../img/anais2.jpg");
                photoBack.setAttribute("alt", "Anaïs et Pierre avec un chat");
                photoFront.setAttribute("src", "../img/anais.jpg");
                photoFront.setAttribute("alt", "Anaïs et Pierre en combinaison à la plage");
                messageAuthor.innerHTML = "Anaïs et Pierre";
                message.classList.add("card__message__txt--less-margin");
                message.classList.add("card__message__txt--sm");
                message.innerHTML = "Marussia,<br /> Tu as débarqué dans notre vie, attirée par la Suze Tonic, au vernissage d’un artiste éminent de la scène locale. Forte de ton charisme et de ta joie de vivre, tu as convaincu l’assemblée du gratin nantais, belle perf! Première étape franchie avec succès, la seconde étape permettra au jury de confirmer ton entrée au NAONED SELECT CLUB. Tu en bonne voie mais des points restent à préciser :<br /> Une bonne humeur constante,<br /> Un crazy leg maîtrisé,<br /> Un style imparable.<br /><br /> Au plaisir,<br /> Continuez ainsi!";
                audio.setAttribute("src", "../mus/anais.mp3");
                break;    
        } 
    };
};

buildMessagePage();