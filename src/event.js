const str = "?name=";
const result = str.substring(6);
console.log('result', result)

const find = document.URL.includes(result)
console.log('find',find)



function link() {
    if(find === result) {
        return template(data[(object => {return object.name === result})])
    }
}




// function link() {
//     if(document.URL.includes("holy")) {
//         return template(data[data.findIndex(object => {return object.name === 'holy'})])
//     } else if (document.URL.includes("carnival")) {
//         return template(data[data.findIndex(object => {return object.name === 'carnival'})])
//     } else if (document.URL.includes("fallas")) {
//         return template(data[data.findIndex(object => {return object.name === 'fallas'})])
//     }
// }

function template(text) {
    return `
        <h1>${text.title}</h1>
        <p>${text.subtitle}</p>
        <a href="event.html" class="hero-btn">Visit Us To Know More</a>
        <h1 class="titleh">A Complete Guide</h1>
        <div class="entry">
            <p>${text.info}</p>
            <div class="col">
                <img srcset="${text.img}"> 
            </div>
            <p>${text.info1}</p>
            <h2>${text.info2}</h2>
            <div class="video">
                <iframe src="${text.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>           
                </iframe>  
            </div> 
            <p>${text.info3}</p>
        </div> 
    `
}


function pageTemplate() {
    return `
      ${link()}  
    `
}


document.getElementById("event").innerHTML = `
    ${pageTemplate()}
`;