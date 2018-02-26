import React from 'react'
import { Link } from 'react-router-dom';

import Haikus from './Haikus';
import SingleIcon from './SingleIcon';

export default function ImageList () {
  // on click, grab random haiku from Haikus and call SELECT_HAIKU action with that haiku
  return (
    <div>
      <ul id="imagelist">
        <li className="icon"><Link to={'./SingleHaiku'}><img src="/images/avocado.svg" /></Link></li>
        <br />
        <li className="icon"><img src="/images/crabbie.svg" /></li>
        <br />
        <li className="icon"><img src="/images/pint.svg" /></li>
        <br />
        <li className="icon"><img src="/images/sunflowers.svg" /></li>
        <br />
        <li className="icon"><img src="/images/pizza.svg" /></li>
        <br />
        <li className="icon"><img src="/images/shrimp.svg" /></li>
        <br />
        <li className="icon"><img src="/images/orangetree.svg" /></li>
        <br />
        <li className="icon"><img src="/images/lolly.svg" /></li>
      </ul>
    </div>
  )
}
