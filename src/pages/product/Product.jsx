import "./product.css";
import {Link, useLocation} from "react-router-dom";
import {Publish} from "@material-ui/icons";
import { useSelector } from "react-redux";

export const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const product = useSelector((state)=>state.product.products.find((product)=>product._id === productId));

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
              <form className="productForm">
                  <div className="productFormLeft">
                      <label>Product Name</label>
                      <input type="text" placeholder={product.title} />
                      <label>Product description</label>
                      <input type="text" placeholder={product.desc} />
                      <label>Product price</label>
                      <input type="text" placeholder={product.price} />
                      <label>In Stock</label>
                      <select name="inStock" id="idStock">
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                      </select>
                      
                      <button className="productButton">Update</button>
                  </div>
                  <div className="productFormRight">
                      <div className="productUpload">
                          <img src={product.img} alt="" className="productUploadImg" />
                          <label for="file">
                              <Publish/>
                          </label>
                          <input type="file" id="file" style={{display:"none"}} />
                      </div>
                     
                  </div>
              </form>
            </div>
        </div>
    )
}
