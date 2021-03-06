import LocationActions from '../actions/LocationActions';

const mockData = [
  { id: 0, name: 'Abu Dhabi' },
  { id: 1, name: 'Berlin' },
  { id: 2, name: 'Bogota' },
  { id: 3, name: 'Buenos Aires' },
  { id: 4, name: 'Cairo' },
  { id: 5, name: 'Chicago' },
  { id: 6, name: 'Lima' },
  { id: 7, name: 'London' },
  { id: 8, name: 'Miami' },
  { id: 9, name: 'Moscow' },
  { id: 10, name: 'Mumbai' },
  { id: 11, name: 'Paris' },
  { id: 12, name: 'San Francisco' }
];

const getLocationSource = (ms) => new Promise((resolve) => {
    setTimeout(resolve(mockData), ms);
});

const LocationSource = {
    fetch: {
        remote() {
            return getLocationSource(250);
        },
        success: LocationActions.fetchSuccess,
        error: LocationActions.fetchFailed
    }
};

export default LocationSource;
