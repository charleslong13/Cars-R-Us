import { getInteriors, setInteriors } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInteriors(parseInt(event.target.value))
            window.alert(`You have selected package #${event.target.value}`)
        }
    }
)

export const interiorFunction = () => {
    let html = ""

    html += '<select name="interior" id="interior">'
    html += '<option value="0">Select an interior package</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.fabric}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}