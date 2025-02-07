import { CITIES, AppRoute } from './consts';
import { Offer, Cities, Comment, Page } from './types';


const generateRandomNumber = (min: number = 0, max: number = 1000, isInteger: boolean = true): number => {
  let processedMin: number = Math.min(min, max);
  let processedMax: number = Math.max(min, max);

  if (isInteger) {
    processedMin = Math.ceil(processedMin);
    processedMax = Math.floor(processedMax);
    return Math.floor(Math.random() * (processedMax - processedMin + 1) + processedMin);
  }

  return Math.round((Math.random() * (processedMax - processedMin) + processedMin) * 1000) / 1000;
};

const capitalizeFirstLetter = (inputWord: string): string => inputWord[0].toUpperCase() + inputWord.slice(1);

const checkPluralRule = (itemsNumber: number, itemsName: string): string => `${itemsNumber} ${itemsName}${itemsNumber > 1 ? 's' : ''}`;

const getPageName = (path: string): Page => {
  const processedPath = path.replace(/\/offer\/[^/]+/, '/offer/:id');

  for (const key in AppRoute) {
    if (AppRoute[key as Page].Path === processedPath) {
      return key as Page;
    }
  }
  return 'Main';
};

const sortOffersByCity = (offers: Offer[]) => (
  offers.reduce<Record<Cities, Offer[]>>(
    (groupedOffers, offer) => {
      const key = offer.city.name;
      const group = groupedOffers[key];
      group.push(offer);
      return { ...groupedOffers, [key]: group };
    },
    Object.fromEntries(CITIES.map((city) => [ city, [] as Offer[] ])) as Record<Cities, Offer[]>
  )
);

const sortComments = (commentA: Comment, commentB: Comment) => new Date(commentB.date).getTime() - new Date(commentA.date).getTime();

const sortByPriceLow = (offerA: Offer, offerB: Offer): number => offerA.price - offerB.price;

const sortByPriceHigh = (offerA: Offer, offerB: Offer): number => offerB.price - offerA.price;

const sortByRating = (offerA: Offer, offerB: Offer): number => offerB.rating - offerA.rating;

const updateOffersFavoriteFlag = (offers: Offer[], ids: string[]) => {
  offers.forEach(
    (offer) => {
      offer.isFavorite = ids.includes(offer.id);
    }
  );
};

const updateOfferFavoriteFlag = (offers: Offer[], id: string, isFavorite: boolean) => {
  const indexOffer = offers.findIndex((offer) => offer.id === id);

  if (indexOffer !== -1) {
    offers[indexOffer].isFavorite = isFavorite;
  }
};

export { generateRandomNumber, capitalizeFirstLetter, checkPluralRule, getPageName, sortOffersByCity,
  sortComments, sortByPriceLow, sortByPriceHigh, sortByRating, updateOffersFavoriteFlag, updateOfferFavoriteFlag };
