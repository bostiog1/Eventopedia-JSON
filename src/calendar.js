const calendar = [
    {
       img: "images/holy.jpg",  
       src: "holy.html",
       txt: "La Semana Santa"
    },
    {
        img: "images/carnival.jpg",
        src: "carnival.html",
        txt: "Carnival"
    },
    {
        img: "images/fallas.jpg",
        src: "fallas.html",
        txt: "Las Fallas de Valencia"
    }
  ];


function calendarTemplate(text) {
    return `
    
        <div class="campus-col">
            <img src=${text.img}>
            <div class="layer">
            <a href="${text.src}">
                    <h3>${text.txt}</h3>
            </a>
            </div>
        </div>
    `
}

document.getElementById("calendar").innerHTML = `
    <section class="campus">
    <h1>Spain's most famous events</h1>
    <p>Spain, the country of fiestas and festivals! Every village, no matter how small, <br>has its own, unique celebrations. </p>
    <div class="row">
    ${calendar.map(calendarTemplate).join("")}
    </div>
    </section>
    `;