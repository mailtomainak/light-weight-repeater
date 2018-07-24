import React from 'react';
import PropTypes from 'prop-types';
import DataItem from './data-item';
import styles from '../styles/data-list';
const propTypes = {
    companyList:PropTypes.array
};



   
const DataList = (props) => {
  if(!props.companyList.length){
    return null;
  }
  else{
    return (<ul style={styles.listStyle}> 
      {props.companyList.map(company => <DataItem key = {company.company_id} company = {company} />)}
    </ul>)
  }


};


DataList.propTypes = propTypes;


export default DataList;
