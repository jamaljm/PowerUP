import React from 'react'
import "./mallcard.css";
import { CalendarToday, LocationOn } from "@material-ui/icons";
import FeaturedInfo from "../featuredInfo/FeaturedInfo"; 
import { useEffect, useState } from "react";




export default function Mallcard1() {


  return (
     <div className="foodCard">
           
            <div className="foodCardBottom">
                <div className="foodCardBottomLeft">

                    <img src="https://images.thequint.com/thequint%2F2017-05%2F193cf3a1-13c1-4ffa-b7ae-8c2f87ca7a73%2F3a97063e-2d00-424d-84b7-8c1f7d9f88eb.jpg?rect=0%2C0%2C720%2C405" alt="" className="foodimage" />
                </div>
                <div className="foodCardBottomRight">
                    <h2>Oberon Mall Ernakulam</h2>
                    <div className="foodInfo">
                        
                        <div className="foodInfoBottom">
                            <div className="foodInfoChild">
                                <LocationOn />
                                <span className="foodInfoKey">Kochi   </span>
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
