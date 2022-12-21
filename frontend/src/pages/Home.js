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
          <tr style = {{fontSize: "20px"}}>
            <th style = {{textAlign: "center"}}>CommissionEntryID</th>
            <th style = {{textAlign: "center"}}>ReceiptNo</th>
            <th style = {{textAlign: "center"}}>CreatedDate</th>
            <th style = {{textAlign: "center"}}>MarketerName</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr style = {{textAlign: "center", fontSize: "20px"}} key = {item.CommissionEntryID}>
                <td>{item.CommissionEntryId}</td>
                <td>{item.ReceiptNo}</td>
              
                <td>{item.CreatedDate}</td>
                
                <td>{item.MarketerName}</td>
    
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