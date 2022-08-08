
function footerTemplate(text) {
    return `
        <div class="footer">
            <h4>${text.title}</h4>
            <p>${text.subtitle}</p>
            <p>${text.sub}</p>
        </div>
    `
}

document.getElementById("footer").innerHTML = `
    <section class="footer">
    ${footer.map(footerTemplate)}
    </section>
`;