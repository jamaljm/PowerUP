import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Products</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Products</th>
          <th className="widgetLgTh">Quantity</th>
          <th className="widgetLgTh">Price</th>
          <th className="widgetLgTh">Stock</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://m.media-amazon.com/images/I/61eDXs9QFNL._SX522_.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">iPhone 14 Pro</span>
          </td>
          <td className="widgetLgQuantity">234</td>
          <td className="widgetLgAmount">₹12342.00</td>
          <td className="widgetLgStatus">
            <Button type="Stock" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">iPhone 14 Pro</span>
          </td>
          <td className="widgetLgQuantity">342</td>
          <td className="widgetLgAmount">₹13422.00</td>
          <td className="widgetLgStatus">
            <Button type="Out of stock" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://m.media-amazon.com/images/I/61eDXs9QFNL._SX522_.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">iPhone 14 Pro</span>
          </td>
          <td className="widgetLgQuantity">4535</td>
          <td className="widgetLgAmount">₹14322.00</td>
          <td className="widgetLgStatus">
            <Button type="Stock" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://m.media-amazon.com/images/I/61eDXs9QFNL._SX522_.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">iPhone 14 Pro</span>
          </td>
          <td className="widgetLgQuantity">435</td>
          <td className="widgetLgAmount">₹132422.00</td>
          <td className="widgetLgStatus">
            <Button type="Stock" />
          </td>
        </tr>
        
      </table>
    </div>
  );
}
