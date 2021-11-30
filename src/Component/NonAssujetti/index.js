import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const NonAssujetti = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>
        <button onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
        </div>

      <h4>Votre client est il établi en France ou dans un autre pays de l'Union Européenne ?</h4>

        <div className="select_container">
          <Link to='/non_assujetti_UE'><button className='select'>Oui</button></Link>
          <Link to='/non_assujetti_hors_UE'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default NonAssujetti;