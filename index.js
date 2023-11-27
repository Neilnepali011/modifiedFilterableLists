const image_array = [
    {
        "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c2/9b/db/night-life-coffee-house.jpg?w=600&h=400&s=1",
        "title": "Cafes and coffee shops",
        "desc": "A cozy spot with good coffee and a relaxed atmosphere can be an ideal place to catch up with friends, work, or simply unwind.",
        "exploreBtn": ""
    },
    {
        "img_url": "https://api.time.com/wp-content/uploads/2016/08/gettyimages-535829001.jpg",
        "title": "Parks and Nature Reserves",
        "desc": "Many people enjoy spending time in nature, whether it's a local park, hiking trail, or a beautiful natural setting. It provides a break from urban life and a chance to connect with the outdoors.",
        "exploreBtn": ""

    },
    {
        "img_url": "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/649611-gettyimages-1283947553-9c4762123f70b04f6135dba5d9a43891.jpg",
        "title": "Bookstores and Libraries",
        "desc": "For those who love reading, bookstores and libraries are great places to explore new books, study, or attend book-related events.",
        "exploreBtn": ""

    },
    {
        "img_url": "https://srv-1.eden-gallery.com/2021/08/11/6113e0e420cfa-Art-Galleries-vs-Museums--Eden-Gallery.jpeg",
        "title": "Art Galleries and Museums",
        "desc": " If you appreciate art, museums and galleries offer a chance to explore cultural exhibits, paintings, sculptures, and more.",
        "exploreBtn": ""
    }
];

let itemContainer = document.querySelector('#itemContainer');
let ul = document.createElement('ul');

for({img_url, title, desc, exploreBtn} of image_array) {
    let li = document.createElement('li');

    let img = document.createElement('img');
    img.setAttribute('src', img_url);
    img.classList.add('images');

    let titleBlock = document.createElement('div');
    titleBlock.classList.add('titleBlock');

    let h4 = document.createElement('h4');
    h4.innerHTML = title;

    let p = document.createElement('p');
    p.innerHTML = desc;

    let btn = document.createElement('a');
    btn.innerHTML = 'Exlore More';
    btn.setAttribute('href', exploreBtn);
    btn.setAttribute('target', '_blank');

    titleBlock.append(h4, p, btn);

    li.append(img, titleBlock);

    ul.append(li);

};

itemContainer.append(ul);


let filterInput = document.querySelector('#filterText');

filterInput.addEventListener('input', function() {
    let filterText = filterInput.value.toLowerCase();
    let foundItem = false;


    let listItems = document.querySelectorAll('#itemContainer ul li');

    listItems.forEach(function(item) {
        let title = item.querySelector('h4').innerText.toLowerCase();

        if(title.includes(filterText)) {
            item.style.display = 'block';
            foundItem = true;
        }
        else {
            item.style.display = 'none';
        }
    });

    let msg = document.getElementById('msg');
    if(!foundItem) {
    msg.innerHTML = `${filterText} not found`;
    }
    else {
    msg.innerHTML = "";
    }

})

