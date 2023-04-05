import axios from "axios";
import * as React from "react";
import Table from "../components/molecules/Table";

function Home() {
  const [transactions, setTransactions] = React.useState([]);
  const [keyTransactions, setKeyTransactions] = React.useState([]);
  const [listStatus, setListStatus] = React.useState([]);

  React.useEffect(() => {
    document.title = "Home Page";

    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/transaction?limit=10&page=1`)
      .then((res) => {
        const status = res?.data?.data?.status;

        const objectStatus = {};
        status.map((item) => {
          objectStatus[item.id] = item.name;
        });

        setListStatus(objectStatus);

        const data = res?.data?.data?.data;
        const groupMonthYear = {};
        const keyTransactionTemp = [];

        let monthYearTemp = "";
        data.map((_item) => {
          let date = _item.transactiondate.split("T")[0];
          let monthYear = `${date.split("-")[0]}Z${date.split("-")[1]}`;
          if (monthYear !== monthYearTemp) {
            groupMonthYear[monthYear] = [_item];
            monthYearTemp = monthYear;
          } else {
            groupMonthYear[monthYear].push(_item);
          }
        });

        Object.keys(groupMonthYear).map((_item) => {
          keyTransactionTemp.push(_item);
        });

        setTransactions(groupMonthYear);
        setKeyTransactions(keyTransactionTemp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex justify-content-center mt-5">
        <div className="row">
          <Table
            keyTransactions={keyTransactions}
            listStatus={listStatus}
            transactions={transactions}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
