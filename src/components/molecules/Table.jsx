import React from "react";
import { useNavigate } from "react-router-dom";

function Table(props) {
  const { keyTransactions, listStatus, transactions } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="p-5">
        <table className="table table-striped w-100">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Customer Name</th>
              <th>Status</th>
              <th>Transaction Date</th>
              <th>Created By</th>
              <th>Updated By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {keyTransactions?.map((itemParent, key) => {
              return transactions[itemParent].map((_item, _key) => {
                return (
                  <>
                    <tr key={_key}>
                      <td>{_item.id}</td>
                      <td>{_item.productid}</td>
                      <td>{_item.productname}</td>
                      <td>{_item.amount}</td>
                      <td>{_item.customername}</td>
                      <td>{listStatus[_item.status]}</td>
                      <td>{_item.transactiondate}</td>
                      <td>{_item.createdby}</td>
                      <td>{_item.createon}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => {
                            navigate(`/${_item.id}`);
                          }}
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  </>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
