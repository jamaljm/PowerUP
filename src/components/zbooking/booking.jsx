import React from 'react'
import "./booking.css";
import Booked from "./booked"
import { useEffect, useState } from "react";


export default function Booking() {

  



  return (
      <div className='bookingcard'>
          <h2>Book A Slot</h2>
          <div className='bookingslotes'>
              
          <div className="bookingcard-top5">
          <a href="https://i.imgur.com/wfWGiHc.png"><button >AD203</button></a>
                  <a href="https://i.imgur.com/wfWGiHc.png"><button >AD204</button></a>
                  <a href="https://i.imgur.com/wfWGiHc.png"><button >AD205</button></a>
          </div>
          <div className="bookingcard-top5">
              <a href="https://i.imgur.com/wfWGiHc.png"><button >AD206</button></a>
              <a href="https://i.imgur.com/wfWGiHc.png"><button >AD207</button></a>
              <a href="https://i.imgur.com/wfWGiHc.png"><button >AD208</button></a>
          </div>
          <div className="bookingcard-top5">
             <a href="https://i.imgur.com/wfWGiHc.png"><button >AD209</button></a>
             <a href="https://i.imgur.com/wfWGiHc.png"><button >AD210</button></a>
              <a href="https://i.imgur.com/wfWGiHc.png"><button >AD211</button></a>
          </div>
      </div>
    </div> 
    
  )
}
