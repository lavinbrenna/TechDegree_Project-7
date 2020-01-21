import React from 'react';
//passes in a not found message when there are no photos that match the search
const NotFound = props => (
  <li className='photo-container not-found'>
    <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
    <h3>Sorry, no photos match your search</h3>
  </li>
);

export default NotFound;