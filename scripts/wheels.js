import { getWheelPackages, setWheelPackages } from "./database.js"

const wheels = getWheelPackages()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheelPackages(parseInt(event.target.value))
            window.alert(`You have selected package #${event.target.value}`)
        }
    }
)

export const wheelsFunction = () => {
    let html = ""

    html += '<select name="wheel" id="wheel">'
    html += '<option value="0">Select a wheels package</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}


