import { getTechnologyPackages, setTechnologyPackages } from "./database.js"

const technologies = getTechnologyPackages()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            setTechnologyPackages(parseInt(event.target.value))
            window.alert(`You have selected package #${event.target.value}`)
        }
    }
)


export const Technologies = () => {
    let html = ""

    html += '<select name="tech" id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologies.map( (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}



// export const technologyFunction = () => {
//     let html = "<ul>"

//     const listItems = technologies.map(technology => {
//         return `<select name="technology" id="resource">
//         <option value="Please choose a Technology Package">Choose a package</option>
//         <option value="Basic Package (basic sound system)">Basic Package (basic sound system)</option>
//         <option value="Navigation Package (includes integrated navigation controls)">Navigation Package (includes integrated navigation controls)</option>
//         <option value=""Visibility Package (includes side and rear cameras)">Visibility Package (includes side and rear cameras)</option>
//     </select>    `
// })

// html += listItems.join("")
// html += "</ul>"

// return html

// }