import React from 'react'
import classNames from 'classnames'

import "components/DayListItem.scss"

/*Displays selected day with appointment availability*/

export default function DayListItem(props) {
  let dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  })

  const formatSpots = (spots) => {
    if (spots === 0) {
      return (`no spots remaining`)
    } else if (spots === 1) {
      return (`1 spot remaining`)
    }
    return (`${spots} spots remaining`)
  }


  const availability = formatSpots(props.spots)


  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected} data-testid='day'>
      <h2 className='text--regular'>{props.name}</h2>
      <h3 className='text--light'>{availability}</h3>

    </li>

  );
}

