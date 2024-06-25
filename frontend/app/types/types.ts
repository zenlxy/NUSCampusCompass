export type Coordinates = {
    latitude: number,
    longitude: number,
};

export type Itinerary = {
    itinerary: Place[],
    text: string,
    startDate: Date,
};

export type Place = {
    placeId: number;
    name: string;
    description: string;
    history: string;
    funFacts: string;
    address: string;
    coordinates: Coordinates;
};

export type RootStackParamList = {
    Main: undefined;
    'Existing Itineraries': undefined;
    'Build Your Own': undefined;
    'Recommended Tours': undefined;
    'Edit Itinerary': {
        itineraryId: string;
        date: Date;
        title: string;
        places: Place[];
    };
};