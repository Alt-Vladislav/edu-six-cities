import { Cities, SortingType } from '../types';
import { createAction } from '@reduxjs/toolkit';


export const changeCity = createAction<{city: Cities}>('app/changeCity');

export const changeSortType = createAction<{sortType: SortingType}>('app/changeSortType');

export const loadFullOffer = createAction<{id: string | undefined}>('data/loadFullOffer');

export const loadNearOffers = createAction<{id: string | undefined}>('data/loadNearOffers');

export const loadComments = createAction<{id: string | undefined}>('data/loadComments');
