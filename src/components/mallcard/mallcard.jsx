import React from 'react'
import "./mallcard.css";
import { CalendarToday, LocationOn } from "@material-ui/icons";
import FeaturedInfo from "../featuredInfo/FeaturedInfo"; 
import { useEffect, useState } from "react";




export default function Mallcard() {
  const [booknowcard, setBooknowcard] = useState(true);


  return (
     <div className="foodCard">
           
            <div className="foodCardBottom">
                <div className="foodCardBottomLeft">

                    <img src="https://content.jdmagicbox.com/comp/ernakulam/b9/0484px484.x484.180208123903.z4b9/catalogue/grand-mall-edapally-ernakulam-malls-79w3n5cyoj.jpg?clr=333333" alt="" className="foodimage" />
                </div>
                <div className="foodCardBottomRight">
                    <h2>Grand Mall Toll Junction</h2>
                    <div className="foodInfo">
                        
                        <div className="foodInfoBottom">
                            <div className="foodInfoChild">
                                <LocationOn />
                                <span className="foodInfoKey">Edappally   </span>
                            </div>
                        </div>
                   
                        <div className="foodinfobottombutton">
                            <button className="foodinfobutton">Book NOw</button>
                            
                    </div>
                        
                    </div>
                </div>
              


            </div>
              
        </div>
  )
}
