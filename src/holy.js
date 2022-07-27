const holy = [
    {
      title: "The Semana Santa Festival",
      subtitle: "Spain (Spanish: España, or the Kingdom of Spain),is a country in  southwestern <br> Europe with parts of territory in the Atlantic Ocean and across the Mediterranean Sea."
        
    }
  ];

function holyTemplate(text) {
    return `
            <h1>${text.title}</h1>
            <p>${text.subtitle}</p>
    `
}

document.getElementById("holyTitle").innerHTML = `

    ${holy.map(holyTemplate)}


`;