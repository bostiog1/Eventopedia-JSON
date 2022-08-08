
function titleTemplate(text) {
    return `
        <div class="text-box">
            <h1>${text.title}</h1>
            <p>${text.subtitle}</p>
        </div>
    `
}



document.getElementById("title").innerHTML = `
    ${textBox.map(titleTemplate)}
`;