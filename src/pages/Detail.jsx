import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardDetail from "../components/molecules/CardDetail";

function Detail() {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = React.useState(false);
  const [listStatus, setListStatus] = React.useState([]);
  const [transaction, setTransaction] = React.useState({});

  React.useEffect(() => {
    document.title = "Detail Page";

    const id = window.location.pathname.split("/")[1];
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/transaction/${id}`)
      .then((res) => {
        const objectStatus = {};
        const status = res?.data?.data?.status;
        status.map((item) => {
          objectStatus[item.id] = item.name;
        });
        setListStatus(objectStatus);
        setTransaction(res?.data?.data?.data?.[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex justify-content-center mt-5">
        <div className="row">
          <div className="card">
            <div className="card-body">
              {isEdit === false ? (
                <CardDetail listStatus={listStatus} transaction={transaction} />
              ) : (
                <div>
                  <div className="form-group">
                    <label htmlFor="">Transaction ID : </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={transaction.id}
                      disabled={true}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="">Product ID :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={transaction.productid}
                      disabled
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="">
                      Status : {listStatus[transaction.status]}
                    </label>
                    <select name="" id="" className="form-control">
                      <option value="0">Failed</option>
                      <option value="1">Success</option>
                    </select>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="">Transaction Date :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={transaction.transactiondate}
                      disabled
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="">Created By :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={transaction.createdby}
                      disabled
                    />
                  </div>
                </div>
              )}

              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-primary btn-sm mt-4"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back Home
                </button>

                {isEdit === false ? (
                  <button
                    className="btn btn-warning btn-sm mt-4 "
                    onClick={() => setIsEdit(true)}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-sm mt-4 "
                    onClick={() => setIsEdit(false)}
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
