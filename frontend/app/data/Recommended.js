import places from './Places';

const historical = {
    itinerary: [
        places[1],
    ],
    startDate: new Date(),
    text: "Historical Tour",
}

const food = {
    itinerary: [
        places[5],
    ],
    startDate: new Date(),
    text: "Food Tour",
}

const recommended = [
    historical,
    food
]

export default recommended;