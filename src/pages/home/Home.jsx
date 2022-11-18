import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";


export default function home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      
    </div>

  )
}
