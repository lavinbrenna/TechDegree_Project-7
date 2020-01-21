import React from 'react';

//photo component whech takes prop data passed from API calls and parses the information into a template literal which can be used to display the images on the page

const Photo = props => {

  //Prop data
  const id = props.data.id;
  const secret = props.data.secret;
  const server = props.data.server;
  const farm = props.data.farm;
  


  return (
  //Add prop data to attributes with template literals
  <li>
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" />
  </li>

  );
}

export default Photo;

