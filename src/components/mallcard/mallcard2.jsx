import React from 'react'
import "./mallcard.css";
import { CalendarToday, LocationOn } from "@material-ui/icons";
import FeaturedInfo from "../featuredInfo/FeaturedInfo"; 
import { useEffect, useState } from "react";




export default function Mallcard2() {


  return (
     <div className="foodCard">
           
            <div className="foodCardBottom">
                <div className="foodCardBottomLeft">

                    <img src="https://kerala.mallsmarket.com/sites/default/files/photos/malls/lulu-mall-thiruvananthapuram-1.jpg" alt="" className="foodimage" />
                </div>
                <div className="foodCardBottomRight">
                    <h2>LuLu International Mall</h2>
                    <div className="foodInfo">
                        
                        <div className="foodInfoBottom">
                            <div className="foodInfoChild">
                                <LocationOn />
                                <span className="foodInfoKey">Edappally   </span>
                            </div>
                        </div>
                   
                        <div className="foodinfobottombutton">
                            <button className="foodinfobutton">Book Now</button>
                            
                    </div>
                        
                    </div>
                </div>
              


            </div>
              
        </div>
  )
}
