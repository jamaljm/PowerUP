import "./featuredInfo.css";
import { CalendarToday, LocationOn, MoreVert } from "@material-ui/icons";
import Foodcard from "../foodcard/foodcard";
import WidgetSm from "../widgetSm/WidgetSm";
import axios from "axios";
import Addrequest from "../Addrequest";
import { useEffect, useState } from "react";
import { TbSquareDot } from "react-icons/tb";
import Mallcard from "../mallcard/mallcard";
import Powerup from "../poweup";
import { useNavigate } from "react-router-dom";
import Mallcard1 from "../mallcard/mallcard1";
import Mallcard2 from "../mallcard/mallcard2";






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
  const [bookcard, setBookcard] = useState("true");
  const [isActive, setActive] = useState(false);
  const [booknow, setBooknow] = useState("true");
  
  const datass = { "niw":booknow };
  export default datass;

  
  

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

  const navigate = useNavigate();
  
  function Logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("auth");
    navigate("/login");
  }

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
                <button onClick={Logout}>Logout{" "}</button>
            </div>
          </div>
        </div>
        </div>

          <div className="mallcard">
           <div className="sidebarprofiletop">
              <div className="sidebarprofiletop-left">

              <p>My Car
                </p>
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
      

        {bookcard &&  booknow && <Powerup /> }
        {!bookcard && booknow && <Mallcard2 />}
        {!bookcard && booknow && <Mallcard1 />}
        {!bookcard && booknow && <Mallcard />}
        





        


            
        

    
        
        
          
      </div>
      <div className="featuredItem3">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17640.48045310525!2d76.3042217471343!3d10.019215573124796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dafbed183bf%3A0x5951f316ba13a37e!2sLuLu%20International%20Shopping%20Malls%20Private%20Limited%20Kochi!5e0!3m2!1sen!2sin!4v1668814324318!5m2!1sen!2sin"
          width="100%"
              height="70%"
              frameBorder="0"
          style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="10"
            />

        <div className="locationinput">
          <div className="locationinput-left">
            <img src="https://i.imgur.com/Tz6dKer.png" />
          </div>
          <div className="locationinput-right">

        <input placeholder="From">

        </input>
        <input placeholder="To">
        </input>
          <button onClick={() => setBookcard(false)}>Find Charging Station</button>
          </div>
          </div>

      </div>
    </div>
  );
}
