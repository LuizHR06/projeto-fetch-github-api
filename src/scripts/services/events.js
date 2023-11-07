import { baseUrl, maxItems } from "/src/scripts/variables.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxItems}`)
    // console.log(await response.json())
    return await response.json()
}

export { getEvents }