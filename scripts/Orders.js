import { getColors } from "./database.js"
import { getInteriors } from "./database.js"
import { getTechnologyPackages } from "./database.js"
import { getWheelPackages } from "./database.js"
import { getOrders } from "./database.js"

const buildOrderListItem = (order) => {
    const paints = getColors()
    const interiors = getInteriors()
    const techPackages = getTechnologyPackages()
    const wheelPackages = getWheelPackages()

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.colorId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechPackage = techPackages.find(
        (techPackage) => {
            return techPackage.id === order.techPackageId
        }
    )
    const foundWheelPackage = wheelPackages.find(
        (wheelPackage) => {
            return wheelPackage.id === order.wheelPackageId
        }
    )
    const totalCost = foundPaint.price + foundInterior.price + foundTechPackage.price + foundWheelPackage.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} costs ${costString} and was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}