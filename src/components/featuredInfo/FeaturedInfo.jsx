import "./featuredInfo.css";
import { CalendarToday, LocationOn } from "@material-ui/icons";
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
        <div className="searchBox">
          <input
            placeholder="Location:"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          ></input>
          <button>Search</button>
        </div>
        <div className="foodCardsection">
          {search(data)
            .slice(0)
            .reverse()
            .map((item) => (
              <div key={item._id}>
                <div className="foodCard">
                  <div className="foodCardTop">
                    <div className="foodCardTopLeft">
                      <img
                        src="https://avatars.githubusercontent.com/u/34004150?v=4"
                        alt=""
                        className="topAvatar"
                      />
                      <span className="foodCardSubTitle">
                        {item.userId.name}
                      </span>
                    </div>
                    <div className="foodCardTopRight">
                      <CalendarToday className="foodCardIcon" />
                      <span className="foodCardPercent">
                        {item.createdOn.slice(0, 10)}
                      </span>
                      <span className="foodCardPercent1">
                        {item.createdOn.slice(11, 16)}
                      </span>
                    </div>
                  </div>
                  <div className="foodCardBottom">
                    <div className="foodCardBottomLeft">
                      <img
                        src="https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="foodimage"
                      />
                    </div>
                    <div className="foodCardBottomRight">
                      <h2>{item.title}</h2>
                      <div className="foodInfo">
                        <div className="foodInfoTop">
                          <div className="foodInfoChild">
                            <span className="foodInfoKey">
                              Food Type:{" "}
                              {item.isNonVeg ? (
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
                                  alt=""
                                  className="topAvatar1"
                                />
                              ) : (
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
                                  alt=""
                                  className="topAvatar1"
                                />
                              )}{" "}
                            </span>
                          </div>
                          <span className="foodInfoValue">
                            Quantity : {item.numberOfServing}
                          </span>
                        </div>
                        <div className="foodInfoBottom">
                          <div className="foodInfoChild">
                            <LocationOn />
                            <span className="foodInfoKey">{item.city} </span>
                          </div>
                          <span className="foodInfoValue">
                            Expiry: {item.expiry.slice(0, 10)}
                          </span>
                        </div>

                        <div className="foodinfobottombutton">
                          <button
                            className="foodinfobutton"
                            key={item._id}
                            // onClick={() => acceptRequest(item._id)}
                            disabled={item.isAccepted}
                          >
                            {item.isAccepted ? "Accepted " : "Accept"}
                          </button>
                          <button
                            className="foodinfobutton"
                            key={item._id}
                            //onClick={() => acceptDelivery(item._id)}
                            disabled={item.isDelivery}
                          >
                            {item.isDelivery ? "Delivered" : "Deliver"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="featuredItem2">
        <div className="widgetSm1">
          <Addrequest />
          <WidgetSm />
        </div>
      </div>
    </div>
  );
}
