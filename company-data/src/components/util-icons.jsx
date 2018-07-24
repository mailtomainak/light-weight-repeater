import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    companyId:PropTypes.string
};


class UtilIcons extends Component {
constructor(props) {
    super(props);
    this.state = {
        isFavorited:false,
        isSubscribed:false
    }
    this.onSetAsFavourite = this.onSetAsFavourite.bind(this);
    this.onSetAsSubscription = this.onSetAsSubscription.bind(this);

}
onSetAsSubscription(e){
    this.setState(prevState=>({
        isSubscribed:!prevState.isSubscribed
    }))
}
onSetAsFavourite(e){
    this.setState(prevState=>({
        isFavorited:!prevState.isFavorited
    }))
}
    render() {
        return (
            <div>
                <input type="checkbox" onClick={this.onSetAsFavourite} checked={this.state.isFavorited}/>
                <br/>
                <input type="checkbox" onClick={this.onSetAsSubscription} checked={this.state.isSubscribed}/>
            </div>
        );
    }
}


UtilIcons.propTypes = propTypes;


export default UtilIcons;
