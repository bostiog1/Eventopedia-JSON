const explore = [
    {
      title: "Family dynamic in Spain",
      subtitle: "Like anywhere in the world, all families in Spain are different. But, they’re usually warm, welcoming, and tight-knit. Many families eat both lunch and dinner together. Communal meals and other gatherings tend to become lively, and even a bit noisy, as Spaniards do tend to speak somewhat loudly in larger groups."
    },
    {
    title: "Language and Communication Styles",
    subtitle: "Spain has five official languages: Aranese, Catalan, Galician, Basque (Euskara) and Spanish.In Spanish culture, people stand close and frequently touch one another on the arm while conversing. Making eye contact is important and often maintained longer than in other cultures. Spaniards often use exaggerated hand gestures and facial expressions to support what they are saying. They may also speak loudly, laugh, and smile a lot."
    },
    {
    title: "Food in Spain",
    subtitle: "While each region of Spain has its own food specialties, Spanish cuisine is generally Mediterranean in style with lots of olive oil, garlic, onions, tomatoes and peppers. In Spanish culture, lunch is the main meal of the day and is served around 2 or 3 pm, while dinner may start as late as 9 pm. Fish and seafood are abundant, but red meat and pork are also eaten nearly every day."
    }
  ];

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