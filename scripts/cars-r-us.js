import { Technologies } from "./Technologies.js"
import {interiorFunction} from "./Interiors.js"
import {Colors} from "./Paints.js"
import {wheelsFunction} from "./wheels.js"
import { Orders } from "./Orders.js"
import {addCustomOrder} from "./database.js"




document.addEventListener(
    "click",
    (changeEvent) => {
        if (changeEvent.target.id === "orderButton") {
            addCustomOrder()
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
    )
    


//generating html 

export const carsRUs = () => {
    return `
    <h1> Cars-R-Us</h1>
    
    <article class="choices">
    <section class="choices__color options">
        <h2>Colors</h2>
        ${Colors()}
    </section>
    <section class="choices__interior options">
        <h2>Interiors</h2>
        ${interiorFunction()}
    </section>
    <section class="choices__technologyPackage options">
        <h2>Technology Packages</h2>
        ${Technologies()}
    </section>
    <section class="choices__wheelPackage options">
    <h2>Wheel Packages</h2>
    ${wheelsFunction()}
</section>
</article>

<article>

<h3>--------------------------------------------------------------</h3>
<button id="orderButton">Create Custom Order</button>
    
</article>

<article class="customOrders">
    <h2>Custom Vehicle Orders</h2>
     ${Orders()}
</article>
    `
}



