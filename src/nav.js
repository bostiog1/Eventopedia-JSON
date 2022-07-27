const navBar = [
    {
       nav: "HOME",  
       src: "event.html"
    },
    {
        nav: "CALENDAR OF EVENTS",
        src: "calendar.html"
    },
    {
        nav: "ABOUT",
        src: "about.html"
    }
  ];


function navTemplate(text) {
    return `<div class="nav-links">
                <ul>
                    <li><a href="${text.src}">${text.nav}</a></li>
                </ul> 
            </div>`
}

document.getElementById("nav").innerHTML = `
    <a href="/event.html">
        <img class="logo"  src="images/logo.png"/> 
    </a>
    ${navBar.map(navTemplate).join("")}
`;