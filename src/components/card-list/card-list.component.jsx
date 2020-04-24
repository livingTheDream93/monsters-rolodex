import React from 'react'
import { Card } from '../../components/card/card.component'
import './card-list.styles.css'

export const CardList = (props) => (
  <div className='card-list'>
    {
      props.monsters.map(el => (
        <Card key={el.id} monster={el} /> 
      ))
    }
   </div>
)

