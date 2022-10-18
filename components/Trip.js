import React from 'react'
import Triptype from './Cards.js/Triptype'
const Trip = ({name,text}) => {
  return (
    <div className={text}>
    <input type="radio" name="prefer "></input>
    <label for="ONEWAY" className="pl-2 font-bold">
      {name}
    </label>
  </div>
  )
}

export default Trip