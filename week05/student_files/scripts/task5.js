/* Lesson 5 */

/* IF/ELSE IF */
let date = new Date();

let weekDay = date.getDay();
let message1 = "";

if (weekDay === 1 || weekDay === 2 || weekDay === 3 || weekDay === 4 || weekDay === 5) {
    message1 = `Hang in there!`;
} else {
    message1 = `Woohoo! It is the weekend!`;
}


/* SWITCH, CASE, BREAK */
switch (weekDay) {
    case 0:
        weekDayString = `Sunday`;
        break;
    case 1:
        weekDayString = `Monday`;
        break;
    case 2:
        weekDayString = `Tuesday`;
        break;
    case 3:
        weekDayString = `Wednesday`;
        break;
    case 4:
        weekDayString = `Thursday`;
        break;
    case 5:
        weekDayString = `Friday`;
        break;
    case 6:
        weekDayString = `Saturday`;
        break;
}

let message2 = `${weekDayString}`;



/* OUTPUT */
document.querySelector('#message1').textContent = message1;

document.querySelector('#message2').textContent = message2;



/* FETCH */
let templeList = [];

const output = (temples) => {
    temples.forEach(
        temple => {
            let article = document.createElement("article")

            let templeName = document.createElement("h3")
            templeName.textContent = temple.templeName;

            let location = document.createElement("h4")
            location.textContent = temple.location;

            let dedicated = document.createElement("h4")
            dedicated.textContent = temple.dedicated;

            let img = document.createElement("img")
            img.setAttribute("src", temple.imageUrl)
            img.setAttribute("alt", temple.templeName)

            article.appendChild(templeName);
            article.appendChild(location);
            article.appendChild(dedicated);
            article.appendChild(img);

            document.querySelector("#temples").appendChild(article);
        }
    );
}

// ***This is the code I tried following the results before looking at the provided solution.

// const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
// let results = null;
// async function getTemples(url) {
//     const response = await getTemples(url);
//     if (response.ok) {
//         let templeList = await response.json();
//         output(templeList);
//     }
// }
// getTemples(url);

const getTemples = async () => {
    const response = await fetch(
        "https://byui-cse.github.io/cse121b-course/week05/temples.json"
    );
    templeList = await response.json();
    output(templeList);
    };
    getTemples();


const reset = () => {
    document.querySelector("#temples").textContent = "";
}

const sortBy = () => {
    reset();

    let filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case "templeNameAscending":
            output(templeList.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.templeName.toLowerCase();
                    let templeName2 = temple2.templeName.toLowerCase();
                    if (templeName1 < templeName2) return -1;
                    else if (templeName1 > templeName2) return 1;
                    else return 0;
                }
            ));
            break;
        case "templeNameDescending":
            output(templeList.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.templeName.toLowerCase();
                    let templeName2 = temple2.templeName.toLowerCase();
                    if (templeName1 > templeName2) return -1;
                    else if (templeName1 < templeName2) return 1;
                    else return 0;
                }
            ));
            break;
        default:
            output(templeList.sort(
                (temple1, temple2) =>
                temple1.templeName.toLowerCase() >temple2.templeName.toLowerCase() ? 1 :
                    temple2.templeName.toLowerCase() > temple1.templeName.toLowerCase() ? -1 : 0))
            break;
    }
}

document.querySelector("#sortBy").addEventListener('change', sortBy);
