

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import DataList from './data-list';
import dataRepeaterStyles from '../styles/data-repeater.js';
{
    /*
    Main Component Which Calls the backend gets the data
    and passes it to child via props
    */
}


const propTypes = {
    
};


class DataRepeater extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfCompanies:[],
            isError:false
        }
    }
    
    
    componentDidMount() {
        fetch('http://localhost:8091/companies')
        .then(response=>{return response.json()})
        .then(listOfCompanies=>this.setState({listOfCompanies:listOfCompanies}))
        .catch(err=>this.setState({isError:true}))
    }   
    
    render() {
        return (
            this.state.isError?
            <span>Error</span>:
            <div id="data-repeater-container" style={dataRepeaterStyles.dataRepeaterContainer} ><DataList companyList={this.state.listOfCompanies}></DataList></div>        
        );
    }
}


DataRepeater.propTypes = propTypes;


export default DataRepeater;
