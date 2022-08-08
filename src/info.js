
function exploreTemplate(explore) {
    return `
            <div class="event-col">
                <h3>${explore.title}</h3>
                <p>${explore.subtitle}</p>
            </div>
        `
}

document.getElementById("info").innerHTML = `
    <section class="event">
    <h1>Exploring Spanish Culture</h1>
    <p> People, Language & Food</p>
    <div class="row">
        ${explore.map(exploreTemplate).join("")}
    </div>
    </section>
`;