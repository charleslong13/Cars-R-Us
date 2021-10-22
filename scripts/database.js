const database = {
    orderBuilder: {
        // id: 1,
        // colorId: 2,
        // interiorId: 1,
        // techPackageId: 1,
        // wheelPackageId: 2,
        // timestamp: 12307439832
    },
    colors: [
        { id: 1, color: "Silver", price: 1100 },
        { id: 2, color: "Midnight Blue", price: 1000 },
        { id: 3, color: "Firebrick Red", price: 1150 },
        { id: 4, color: "Spring Green", price: 1050 }
],
    interiors: [
        { id: 1, fabric: "Beige Fabric", price: 600 },
        { id: 2, fabric: "Charcoal Fabric", price: 600 },
        { id: 3, fabric: "White Leather", price: 1200 },
        { id: 4, fabric: "Black Leather", price: 1000 }

],  technologyPackages: [
    {id: 1, package: "Basic Package (basic sound system)", price: 250 },
    {id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 500},
    {id: 3, package: "Visibility Package (includes side and rear cameras)", price: 600}
],  wheelPackages: [
    {id: 1, package: "17-inch Pair Radial", price: 400},
    {id: 2, package: "17-inch Pair Radial Black", price: 400},
    {id: 3, package: "18-inch Pair Spoke Silver", price: 600},
    {id: 4, package: "18-inch Pair Spoke Black", price: 600}
],
    customOrders: [
        {
            id: 1,
            colorId: 2,
            interiorId: 1,
            techPackageId: 1,
            wheelPackageId: 2,
            timestamp: 12307439832
        }
    ]
}
export const getCurrentOrder = () => {
    return database.orderBuilder
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologyPackages = () => {
    return database.technologyPackages.map(technologyPackage => ({...technologyPackage}))
}
export const getWheelPackages = () => {
    return database.wheelPackages.map(wheelPackage => ({...wheelPackage}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

//export functions whose responsibility is to set state

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnologyPackages = (id) => {
    database.orderBuilder.techPackageId = id
}
export const setWheelPackages = (id) => {
    database.orderBuilder.wheelPackageId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}