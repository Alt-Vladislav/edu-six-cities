import { CITIES, OFFER_TYPES } from './consts';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Offer = {
  id: string;
  title: string;
  type: typeof OFFER_TYPES[number];
  price: number;
  previewImage: string;
  city: {
    name: typeof CITIES[number];
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type { Offer, Location, User };
