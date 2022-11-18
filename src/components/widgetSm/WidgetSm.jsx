import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Top Contributer</span>
      <ul className="widgetSmList">
        <div className="contributerprofilewidget">
          <li className="widgetSmListItem">
            <img
              src="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00_400x400.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Jamal</span>
            </div>
          </li>

          <li>
            <button className="widgetSmButton">Point : 264</button>
          </li>
        </div>

        <div className="contributerprofilewidget">
          <li className="widgetSmListItem">
            <img
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Jozef</span>
            </div>
          </li>

          <li>
            <button className="widgetSmButton">Point : 255</button>
          </li>
        </div>

        <div className="contributerprofilewidget">
          <li className="widgetSmListItem">
            <img
              src="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00_400x400.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Allen</span>
            </div>
          </li>

          <li>
            <button className="widgetSmButton">Point : 245</button>
          </li>
        </div>

        <div className="contributerprofilewidget">
          <li className="widgetSmListItem">
            <img
              src="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00_400x400.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Nazim</span>
            </div>
          </li>

          <li>
            <button className="widgetSmButton">Point : 220</button>
          </li>
        </div>

        <div className="contributerprofilewidget">
          <li className="widgetSmListItem">
            <img
              src="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00_400x400.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Samuel</span>
            </div>
          </li>

          <li>
            <button className="widgetSmButton">Point : 200</button>
          </li>
        </div>
      </ul>
    </div>
  );
}
