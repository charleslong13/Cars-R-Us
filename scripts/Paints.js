import { getColors, setColor } from "./database.js";

const paintSelection = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
            window.alert(`You have selected package #${event.target.value}`)
        }
    }
)

export const Colors = () => {
    let html = ""

    html += '<select name="color" id="color">'
    html += '<option value="0">Select a paint package</option>'

    const arrayOfOptions = paintSelection.map( (color) => {
            return `<option value="${color.id}">${color.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}