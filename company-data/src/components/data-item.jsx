import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/data-item';
import UtilIcons from './util-icons';
import CustomNote from './custom-note';
const propTypes = {
    company:PropTypes.object
};


const DataItem = (props) => { 
    //const company = {...props};
    const company = props.company
   // console.log();
    //return null;
    return (
        <li>
        <div style={styles.itemContainer}>
            <UtilIcons/>
            <span>{company.company}</span>
            <br/>
            <span>{company.city}</span>
            <br/>
            <span>{company.state}</span>
            <br/>
            <span>{company.company_category}</span>
            <br/>
            <span>{company.description_short}</span>
            <br/>            
            <CustomNote/>
        </div>
        </li>

    );
};


DataItem.propTypes = propTypes;


export default DataItem;
