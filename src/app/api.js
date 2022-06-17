/**
 * Create timestmp API result
 */
const getTimestamp = (request, response) => {
    const input = Number(request.params.date) || request.params.date
    const date = request.params.date === undefined ? new Date() : new Date(input)
    if (date.toString() === "Invalid Date") {
        response.status(400).send(
            {
                error: "Invalid Date"
            }
        )
    } else {
        response.send(
            {
                unix: date.getTime(),
                utc: date.toUTCString()
            }
        )
    }
}

module.exports = getTimestamp