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
                message.innerHTML = "C'est la cinquième fois que je te souhaite ton anniversaire aujourd'hui, et je suis toujours aussi excité, comme la première fois.<br /> Voilà mon petit cadeau fait-maison traditionnel: une déclaration d'amour collaborative! Pour que tu continues de rayonner dans ma vie et dans celles de tous tes amis et de ta famille.<br /> Je t'aime.<br /> Joyeux anniversaire <i class='fas fa-heart'></i>";
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
                photoBack.setAttribute("src", "../img/lucie3.jpg");
                photoBack.setAttribute("alt", "Marussia porte Lucie chiot au parc La Fontaine");
                photoFront.classList.add("img--fill");
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
                messageAuthor.classList.add("card__message__author--long");
                messageAuthor.innerHTML = "Lalou et Vicky";
                message.classList.add("card__message__txt--less-margin");
                message.innerHTML = "Wesh Maru !<br /> Bon bah of course que tu nous manques beaucoup beaucoup ! Moi (Lalou) je m’ennuie beaucoup de tes performances épiques (d’où le choix musical tu catch ?) ! Hâte de te retrouver cet été et de faire une grosse fête de non-anniversaire commun ! Aussi, ton anniversaire marquera à jamais la dernière fête du monde d’avant, ça fait une raison de plus pour se mettre à l’envers !<br /> Muchos besos et du gros love, on t’aime fort ❤️🔥";
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
                message.innerHTML = "Bon anniversaire Marussia!<br />J'espère que le nom de l'interprète te plaira :D<br /><br />Indice: le nom de l'interprète c'est DANZIG.";
                audio.setAttribute("src", "../mus/hugues.mp3");
                break;
            case "naomi":
                console.log("Message de Naomi et Steve");
                pageTitle.innerHTML = "Naomi et Steve";
                photoBack.setAttribute("src", "");
                photoBack.setAttribute("alt", "");
                photoFront.setAttribute("src", "../img/naomi.jpg");
                photoFront.setAttribute("alt", "Naomi et Steve en vacances");
                messageAuthor.classList.add("card__message__author--long");
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
                message.classList.add("card__message__txt--xs");
                message.innerHTML = "Marussia,<br /> Tu as débarqué dans notre vie, attirée par la Suze Tonic, au vernissage d’un artiste éminent de la scène locale. Forte de ton charisme et de ta joie de vivre, tu as convaincu l’assemblée du gratin nantais, belle perf! Première étape franchie avec succès, la seconde étape permettra au jury de confirmer ton entrée au NAONED SELECT CLUB. Tu en bonne voie mais des points restent à préciser :<br /> Une bonne humeur constante,<br /> Un crazy leg maîtrisé,<br /> Un style imparable.<br /><br /> Au plaisir,<br /> Continuez ainsi!";
                audio.setAttribute("src", "../mus/anais.mp3");
                break;  
            case "william":
                console.log("Message de William, Nanou et Anna");
                pageTitle.innerHTML = "Papa, Nanou et Anna";
                photoBack.setAttribute("src", "../img/william2.jpg");
                photoBack.setAttribute("alt", "Marussia avec une couronne de roses");
                photoFront.setAttribute("src", "");
                photoFront.setAttribute("alt", "");
                messageAuthor.classList.add("card__message__author--long");
                messageAuthor.innerHTML = "Papa, Nanou et Anna";
                message.classList.add("card__message__txt--less-margin");
                message.innerHTML = "N’est-elle pas belle notre Marussia ? Ses jolis yeux verts, son petit sourire en coin ?<br />N’est-elle pas belle lorsqu’elle rit aux éclats ou lorsqu’elle se concentre sur son travail ?<br />N’est-elle pas belle lorsqu’elle s’interroge sur le sens de chaque chose, sur son devenir, du haut de ses 26 ans ?<br />Regardez son joli petit cœur, grand comme le monde, attentif à chacun.<br />Prenons soin d’elle !<br />Gros bisous et Joyeux anniversaire Marussia !";
                audio.setAttribute("src", "../mus/william.mp3");
                break; 
            case "winnoc":
                console.log("Message de Winnoc");
                pageTitle.innerHTML = "Winnoc";
                photoBack.classList.add("img--fill");
                photoBack.setAttribute("src", "../img/winnoc2.jpg");
                photoBack.setAttribute("alt", "Winnoc urine sur une haie");
                photoFront.setAttribute("src", "../img/winnoc.jpg");
                photoFront.setAttribute("alt", "Winnoc est chauve et beau-gosse");
                messageAuthor.innerHTML = "Winnoc";
                message.innerHTML = "Écoutez, moi je suis pas contre Marussia. Je trouve qu'elle pimente la vie. L'inconnu, c'est ce qui fascine le plus. L'Homme a besoin de points d'interrogation, ne serait-ce que pour s'en faire des porte-manteaux.<br />Biz";
                audio.setAttribute("src", "../mus/winnoc.mp3");
                break; 
            case "morve":
                console.log("Message de Morve");
                pageTitle.innerHTML = "Morwenna";
                photoBack.setAttribute("src", "../img/morve2.jpg");
                photoBack.setAttribute("alt", "Le beau front de Morwenna en gros plan");
                photoFront.setAttribute("src", "../img/morve.jpg");
                photoFront.setAttribute("alt", "Morve dans son appartement");
                messageAuthor.innerHTML = "Morve";
                message.classList.add("card__message__txt--less-margin");
                message.innerHTML = "Joyeux anniversaire!!<br />C'est une année qui sera sous le signe du renouveau, de la force et de l'épanouissement c'est certain! Je te souhaite d'être heureuse et de découvrir comment profiter de chaque instant sans penser au lendemain, tu mérites de vivre une vie épanouie!<br />Allez on se retrouve sur nos patins pour rider l'asphalte telle Lilith sortant des flammes de l'enfer. 🌞🌜";
                audio.setAttribute("src", "../mus/morve.mp3");
                break;
            case "anne":
                console.log("Message de Anne et Léo");
                pageTitle.innerHTML = "Anne et Léo";
                photoBack.classList.add("img--fill");
                photoBack.setAttribute("src", "../img/anne2.jpeg");
                photoBack.setAttribute("alt", "Anne et Léo avec un air sérieux");
                photoFront.classList.add("img--fill");
                photoFront.setAttribute("src", "../img/anne.jpeg");
                photoFront.setAttribute("alt", "Anne et Léo sont de sacrés déconneurs");
                messageAuthor.innerHTML = "Anne et Léo";
                message.classList.add("card__message__txt--sm");
                message.innerHTML = "Sept mois de séparation ont passé.<br />Il en faudra plus pour tuer notre amitié !<br />Un célèbre proverbe a dit « Loin des yeux près du cœur »,<br />Tu verras qu’on en sortira vainqueur !<br /><br />Maru, nous te souhaitons un très bel anniversaire !<br />Certes, à notre manière…<br />Vivement que l’on se serre à nouveau dans les bras,<br />Au gré de la musique (et des apéros) on festoiera !";
                audio.setAttribute("src", "../mus/anne.mp3");
                break;
            case "sandrine":
                console.log("Message de Sandrine et Mathieu");
                pageTitle.innerHTML = "Sandrine et Mathieu";
                photoBack.setAttribute("src", "../img/sandrine2.jpg");
                photoBack.setAttribute("alt", "Sandrine et Mathieu en riders");
                photoFront.setAttribute("src", "../img/sandrine.jpg");
                photoFront.setAttribute("alt", "Sandrine et Mathieu en amoureux");
                messageAuthor.classList.add("card__message__author--long");
                messageAuthor.innerHTML = "Sandrine et Mathieu";
                message.innerHTML = "HAPPY B-DAYYYY MARU !!<br />Ma belle rencontre de 2020, une meuf bourrée de talent et qui mérite d'être connue (et REconnue ;) !) T'es la rideuse la plus coolos de l'Ouest, la relève de Tony Hawk est assurée ! Keep going ma biche, on t'embrasse fort et on te fait confiance pour fêter ça comme il se doit <i class='fas fa-kiss-wink-heart'></i><br /><br />Sandrine et Mathieu (les bébous) <i class='fas fa-heart'></i>";
                audio.setAttribute("src", "../mus/sandrine.mp3");
                break;
            case "mailys":
                console.log("Message de Maïlys");
                pageTitle.innerHTML = "Maïlys";
                photoBack.setAttribute("src", "../img/mailys2.jpg");
                photoBack.setAttribute("alt", "Maïlys et Max déguisés");
                photoFront.setAttribute("src", "../img/mailys.jpg");
                photoFront.setAttribute("alt", "Selfie de Maïlys");
                messageAuthor.innerHTML = "Maïlys";
                message.classList.add("card__message__txt--less-margin");
                message.classList.add("card__message__txt--xs");
                message.innerHTML = "Chère Marussia,<br />Tu es quelqu’un d’extra. Merci d’être toi. <em>(ça rime)</em><br />N’oublie pas de continuer d’être la formidable personne que tu es, sans pareille ni égale. <em>(ça rime pas mais fallait quand même le dire)</em><br />On le sait, mais le redire fait toujours plaisir : je suis vraiment heureuse de te compter parmi mes amies. La distance et les années n’ont rien changé à la relation que nous entretenons. Et ça, ça n’a pas de prix. J’espère que l’on continuera encore longtemps à se forger de beaux souvenirs ensemble !<br />Je te souhaite un merveilleux anniversaire et une nouvelle année de ta vie pleine joie et de bonheur. Et de fêtes aussi. Je pense très fort à toi pour ce jour !<br />Happy birthday Maru, bisous de Max et moi 🌞💃🏼";
                audio.setAttribute("src", "../mus/mailys.mp3");
                break;
        } 
    };
};

buildMessagePage();