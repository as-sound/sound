const pixboxes = [
    {
        id: 1,
        img: "i/spgs.png",
        description: "stage sound desing",
        link: "https://www.youtube.com/watch?v=nVL4nhqnzIw"
    },
    {
        id: 2,
        img: "i/perspektiva.png",
        description: "sound design, mixing",
        link: "https://www.youtube.com/watch?v=nVL4nhqnzIw"
    },
    {
        id: 3,
        img: "i/tutu.png",
        description: "sound design, mixing",
        link: "https://www.youtube.com/watch?v=Gevt9cAb7p0"
    },
    {
        id: 4,
        img: "i/samolet2.png",
        description: "sound design, mixing",
        link: "https://www.youtube.com/watch?v=iUzyfjqGdrQ"
    },
    {
        id: 5,
        img: "i/ypanalys.png",
        description: "sound design, mixing",
        link: "https://www.youtube.com/watch?v=Yd3hfslhMn0"
    },
    {
        id: 6,
        img: "i/nezagorami.png",
        description: "composing",
        link: "https://www.youtube.com/watch?v=pOIXY6oDvKA"
    },
    {
        id: 7,
        img: "i/gobelen.png",
        description: "composing",
        link: "https://www.kinopoisk.ru/film/4875751/?utm_referrer=www.google.com"
    },
    {
        id: 8,
        img: "i/advokati.png",
        description: "sound design, mixing",
        link: "https://www.youtube.com/watch?v=QiPPQP_7FEo"
    },
    {
        id: 9,
        img: "i/portal.png",
        description: "full redesign",
        link: "https://vimeo.com/671751653"
    }
]

const picContainer = document.getElementsByClassName('pics')[0];

pixboxes.forEach((picbox,ix) => {

    let boxDiv = document.createElement('div');
    boxDiv.className = 'box';

    let descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'description-wrapper';
    
    
    let a = document.createElement('a');
    let link = picbox.link;
    a.setAttribute('href', link);


    let typeP = document.createElement('p');
    typeP.className = 'description';
    let typePText = document.createTextNode(picbox.description);
    typeP.appendChild(typePText);
    descriptionDiv.appendChild(typeP);

    let img = document.createElement('img');
    img.className = 'img';
    img.src = picbox.img;

    a.appendChild(descriptionDiv);
    boxDiv.appendChild(a);
    boxDiv.appendChild(img);
    picContainer.appendChild(boxDiv);
})