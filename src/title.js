const textBox = [
    {
      title: "Spain Events Guide",
      subtitle: "Spain (Spanish: España, or the Kingdom of Spain),is a country in  southwestern <br> Europe with parts of territory in the Atlantic Ocean and across the Mediterranean Sea."
    }
  ];

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