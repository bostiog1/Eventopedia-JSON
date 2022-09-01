
function calendarTemplate(text) {
    return `
        <div class="campus-col">
            <img src=${text.img}>
            <div class="layer">
            <a href="template.html?name=${text.src}">
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
    ${data.map(calendarTemplate).join("")}
    </div>
    </section>
    `;