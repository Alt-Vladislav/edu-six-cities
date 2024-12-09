import { Offer, User } from '../../types';
import Header from '../../components/header/header';
import TabsList from '../../components/tabs-list/tabs-list';
import OfferCardsList from '../../components/offer-cards-list/offer-cards-list';
import Map from '../../components/map/map';

type MainPageProps = {
  offers: Offer[];
  favoriteOffers: Offer[];
  user?: User;
}


export default function MainPage({offers, favoriteOffers, user}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      {user
        ? <Header user={ user } favoritesNumber={ favoriteOffers.length } />
        : <Header /> }

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsList />

        <div className="cities">
          <div className="cities__places-container container">
            <OfferCardsList offers={ offers }/>
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
}
