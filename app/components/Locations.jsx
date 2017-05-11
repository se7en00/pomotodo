import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';

@connectToStores
class Locations extends React.Component {

    static getStores() {
        return [LocationStore];
    }

    static getPropsFromStores() {
        return LocationStore.getState();
    }

    componentDidMount() {
        LocationActions.fetch();
    }

    render() {
        if (this.props.errorMessage) {
            return (<div> Something is wrong </div>);
        }

        if (!this.props.locations.length) {
            return (<div>
                    <img src="ajax-loader.gif" />
                </div>
            );
        }

        return (<ul> {
            this.props.locations.map(location => (<li> { location.name } </li>))
        } </ul>);
    }
}

Locations.propTypes = {
    errorMessage: React.PropTypes.string,
    locations: React.PropTypes.array
};
Locations.defaultProps = {
    errorMessage: null,
    locations: []
};

export default Locations;
