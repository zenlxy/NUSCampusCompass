import { places } from './Places';

const historical = {
    itinerary: [
        places[1],
        places[2],
        places[3],
        places[0]
    ],
    startDate: new Date(),
    text: "Cultural Tour",
}

const food = {
    itinerary: [
        places[4],
        places[7],
        places[8],
        places[6]
    ],
    startDate: new Date(),
    text: "Food Tour",
}

const recommended = [
    historical,
    food
]

export default recommended;