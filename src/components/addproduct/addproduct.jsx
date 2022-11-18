import "./addproduct.css";

export default function AddProduct() {
  return (
    <div className="productList">
      <div className="newProduct">
      <h2 className="addProductTitle">Add New Product</h2>
      <form className="addProductForm">
      <div className="addProductRow1">
        
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Iphone" />
        </div>
        <div className="addProductItem">
          <label>category</label>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="456" />
        </div>
        </div>
        <div className="addProductRow2">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea rows="2" cols="500" placeholder="12bg ram">
            </textarea>
        </div>
        </div>
        <button className="addProductButton">Add Product</button>

      </form>
    </div>
    </div>
  );
}
