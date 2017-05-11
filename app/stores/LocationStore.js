import { datasource } from 'alt-utils/lib/decorators';
import alt from '../alt';
import LocationActions from '../actions/LocationActions';
import LocationSource from '../sources/LocationSource';

@datasource(LocationSource)
class LocationStore {
    constructor() {
        this.errorMessage = null;
        this.bindActions(LocationActions);
        // this.registerAsync(LocationSource);
        this.locations = [];
        // this.state = {
        //     errorMessage: null,
        //     locations: []
        // };
    }

    onFetch() {
        if (!this.getInstance().isLoading()) {
            this.getInstance().fetch();
        }
    }

    onFetchSuccess(response) {
        this.locations = response;
        this.errorMessage = null;
    }

    onFetchFailure(error) {
        this.errorMessage = error;
    }

}

export default alt.createStore(LocationStore, 'LocationStore');
