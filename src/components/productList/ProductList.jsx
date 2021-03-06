import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="plTexts">
        <h1 className="plTitle">Create & inspire. It's Lewinskie</h1>
        <p className="plDesc">
          Lewisnkie is a creative portfolio that your work has been
          waiting.Beautiful homes, stunning porfolio styles & a whole lot more
          inside
        </p>
      </div>
      <div className="plList">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
          
        ))}
      </div>
    </div>
  );
}

export default ProductList;
