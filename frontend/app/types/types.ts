import { Timestamp } from "firebase/firestore";

export type Coordinates = {
    latitude: number,
    longitude: number,
};

export type ImageType = {
    source: any;
};


export type Itinerary = {
    id: string,
    itinerary: Place[],
    text: string,
    startDate: Timestamp,
};

export type Place = {
    placeId: number;
    name: string;
    description: string;
    history: string;
    funFacts: string;
    address: string;
    coordinates: Coordinates;
    images: ImageType[];
};

export type RootStackParamList = {
    Main: undefined;
    'Existing Itineraries': undefined;
    'Build Your Own': undefined;
    'Recommended Tours': undefined;
    'Edit Itinerary': {
        iti: Itinerary,
    };
    'Start Itinerary': {
        iti: Itinerary,
    };
    'Start Recommended': {
        iti: Itinerary,
    }
};