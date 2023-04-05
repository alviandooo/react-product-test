import React from "react";

function CardDetail(props) {
  const { listStatus, transaction } = props;
  return (
    <div>
      <div className="form-group">
        <label htmlFor="">Transaction ID : {transaction.id}</label>
      </div>
      <div className="form-group">
        <label htmlFor="">Product ID : {transaction.productid}</label>
      </div>
      <div className="form-group">
        <label htmlFor="">Product Name : {transaction.productname}</label>
      </div>
      <div className="form-group">
        <label htmlFor="">Amount : {transaction.amount} </label>
      </div>
      <div className="form-group">
        <label htmlFor="">Customer Name : {transaction.customername}</label>
      </div>
      <div className="form-group">
        <label htmlFor="">Status : {listStatus[transaction.status]} </label>
      </div>
      <div className="form-group">
        <label htmlFor="">
          Transaction Date : {transaction.transactiondate}
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="">Created By : {transaction.createdby} </label>
      </div>
      <div className="form-group">
        <label htmlFor="">Created On : {transaction.createon} </label>
      </div>
    </div>
  );
}

export default CardDetail;
