import "./product.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Addproduct from "../../components/addproduct/addproduct";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
            
          <div className="productListItem">
          <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "status",
      headerName: "Catogary",
      width: 170,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
            
          <>
          
            <Link to={"/products" }>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="product_body">
      <Addproduct />
   
    <div className="product_table" style={{ height: 450,padding:'20px'}}>
      <DataGrid
        sx={{ m: 2 }}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={6}
        checkboxSelection
      />
      </div>
    </div>
  );
}
