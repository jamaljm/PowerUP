import "./featuredInfo.css";
import { CalendarToday, LocationOn, MoreVert } from "@material-ui/icons";
import Foodcard from "../foodcard/foodcard";
import WidgetSm from "../widgetSm/WidgetSm";
import axios from "axios";
import Addrequest from "../Addrequest";
import { useEffect, useState } from "react";
import { TbSquareDot } from "react-icons/tb";


export default function FeaturedInfo() {
  const token = window.localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = useState(["city", "city"]);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const acceptRequest = (id) => {
    axios
      .put(
        `https://bon-appetit-server.alapanoski.repl.co/api/post/acceptReq/${id}`,id,config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(typeof(id),id);
        console.log(err);
      });
  };

  const acceptDelivery = (id) => {
    axios
      .put(
        `https://bon-appetit-server.alapanoski.repl.co/api/post/deliveryReq/${id}`,
        id,
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(typeof id, id);
        console.log(err);
      });
  };

  const getPosts = async () => {
    await axios
      .get("https://bon-appetit-server.alapanoski.repl.co/api/post", config)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem1">

        <div className="profilecard">
            <div className="sidebarprofiletop">
              <div className="sidebarprofiletop-left">

              <p>Profile
                </p>
              </div>
              <div className="sidebarprofiletop-right">
                <button><MoreVert /></button>


              </div>
            </div>
          <div className="sidebarprofile">
          
            
              
          <img
            src="https://avatars.githubusercontent.com/u/34004150?v=4"
            alt=""
            className="topAvatar2"
          />
            <p className="sidebarprofile-name">Jamal</p>
            <div className="sidebarprofileinfo_username">
            </div>
          <div className="sidebarprofileinfo">
            <div className="profileinfocard">
                <button>Log Out</button>
            </div>
          </div>
        </div>
        </div>

          <div className="mallcard">
           <div className="sidebarprofiletop">
              <div className="sidebarprofiletop-left">

              <p>Malls
                </p>
              </div>
              <div className="sidebarprofiletop-right">


              </div>
          </div>
          <div className="mallsmallcard">
            <div className="mallsmallcard-left">
              <img
                src="https://thumb.cadbull.com/img/product_img/original/multi-story_luxuries_shopping_mall_front_design_photoshop_file_22082018124429.png"
                alt=""
                className="topAvatar2"
              />
              <p>LuLu Malls</p>
            </div>
            <div className="mallsmallcard-right">
              <button>View</button>
              </div>
            
          </div>
          </div>


  
        {/* <div className="searchBox">
          <input
            placeholder="Location:"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          ></input>
          <button>Search</button>
        </div> */}

        
      </div>
      <div className="featuredItem2">
        
          
      </div>
      <div className="featuredItem3">
         
      </div>
    </div>
  );
}
