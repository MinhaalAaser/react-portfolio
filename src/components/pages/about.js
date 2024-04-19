import React from 'react';
import profilePicture from "../../../static/assets/images/bio/IMG_20220204_123047764.jpg"

export default function() {
  return (
    <div className='content-page-wrapper'>
      <div
      className='left-column'
      style={{
        background:"url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />

      <div className='right-column'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Ipsa architecto dignissimos illo ut quo sed odit in. 
      Id repellat voluptatem maxime adipisci quasi, blanditiis beatae earum officiis quisquam eum nesciunt a tempora consequatur vel sunt nihil. 
      Sapiente sit voluptatum est, sed ab illo fuga repellendus accusantium eaque minus ut eum?
      </div>
    </div>
  );
}