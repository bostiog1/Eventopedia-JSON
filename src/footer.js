const footer = [
    {
      title: "About Us",
      subtitle: "Eventopedia provides marketing and tourism intelligence resources to support <br> tourism professionals in their promotion and marketing activities abroad.",
      sub: "Made by Teo <br>with HTML, CSS and JavaScript."
    }
  ];

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