import React, { Component } from 'react'

const DefaultVideos = ({ defaultVideos }) => (
  <div>
    {
      defaultVideos.map((link,i) => {
      return <div key={i} className="floating-box">
               <iframe width="300" height="200" src={link} frameBorder="0" allowFullScreen></iframe>
             </div>
      })
    }
  </div>
)
export default DefaultVideos;
