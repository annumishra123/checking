import React, {useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {getCartItem} from '../../actions/GetDataAction'
import "../../App.css";

const Developers = ({ history,AllProducts,getCartItem }) => {
 
  useEffect(() => {
    getCartItem()
 },[]);

  

  return (
    <div className="search-table">
      <div className="search-box">
        <div className="row">
        </div>
      </div>
      <div className="search-list">
        <h3 style={{ textAlign: "center" }}>Records </h3>
        <table className="table">
          <tbody>
            {AllProducts.map((name, index) => {
              return (
                <Fragment key={index}>
                  <tr>
                    <td>{name.name}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (product) => {
  return {
    AllProducts: product.GetRudecer.products,
  };
};

export default connect(mapStateToProps,{getCartItem,
})(Developers);
