import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const Home = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/Commissionentry");
      setData(response.data);
    };

  useEffect(() => {
    loadData();
  }, []);

  const deleteData = (CommissionEntryId) => {
    if(window.confirm("Are you sure that you wanted to delete Data ?")) {
      axios.delete(`http://localhost:5000/api/delete/${CommissionEntryId}`);
      toast.success("Data Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (
    <div style = {{marginTop: "55px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style = {{textAlign: "center"}}>CommissionEntryID</th>
            <th style = {{textAlign: "center"}}>ReceiptNo</th>
            <th style = {{textAlign: "center"}}>PassbookNo</th>
            <th style = {{textAlign: "center"}}>CreatedDate</th>
            <th style = {{textAlign: "center"}}>UpdatedDate</th>
            <th style = {{textAlign: "center"}}>PaymentDate</th>
            <th style = {{textAlign: "center"}}>Percentage</th>
            <th style = {{textAlign: "center"}}>Total</th>
            <th style = {{textAlign: "center"}}>TDS</th>
            <th style = {{textAlign: "center"}}>Eligibility</th>
            <th style = {{textAlign: "center"}}>Advance</th>
            <th style = {{textAlign: "center"}}>Adjustment</th>
            <th style = {{textAlign: "center"}}>Pending</th>
            <th style = {{textAlign: "center"}}>Paid</th>
            <th style = {{textAlign: "center"}}>MarketerName</th>
            <th style = {{textAlign: "center"}}>ProjectId</th>
           
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.CommissionEntryID}>
                <td>{item.CommissionEntryId}</td>
                <td>{item.ReceiptNo}</td>
                <td>{item.PassbookNo}</td>
                <td>{item.CreatedDate}</td>
                <td>{item.UpdatedDate}</td>
                <td>{item.PaymentDate}</td>
                <td>{item.Percentage}</td>
                <td>{item.Total}</td>
                <td>{item.TDS}</td>
                <td>{item.Eligibility}</td>
                <td>{item.Advance}</td>
                <td>{item.Adjustment}</td>
                <td>{item.Pending}</td>
                <td>{item.Paid}</td>
                <td>{item.MarketerName}</td>
                <td>{item.ProjectId}</td>
                <td>
                  <Link to = {`/update/${item.CommissionEntryId}`}>
                  <button className = "btn btn-edit">Edit</button>
                  </Link>
                  <Link to = {`/view/${item.CommissionEntryId}`}>
                  <button className = "btn btn-view">View</button>
                  </Link>
                  <button className = "btn btn-delete" onClick={() => deleteData(item.CommissionEntryId)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to = "/addData"> 
      <button className="btn btn-add">Add Data</button>
      </Link>
      <div>
      </div>
      
    </div>
  );
};

export default Home;