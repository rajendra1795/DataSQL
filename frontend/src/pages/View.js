import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "./View.css";

const View = () => {
  
  const [user, setUser] = useState({});

  const {CommissionEntryId} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/Commissionentry/${CommissionEntryId}`)
    .then((response) => setUser({...response.data[0] }))
   }, [CommissionEntryId]);

  return (
    <div style={{marginTop: "55px"}}>
      <div className='card'>
        <div className='card-header'>
          <p>Commission Entry Details</p>
        </div>
        <div className='container'>
          <strong>Commission Entry ID :</strong>
          <span>{CommissionEntryId}</span>
          <br />
          <br />
          <strong>ReceiptNo :</strong>
          <span>{user.ReceiptNo}</span>
          <br />
          <br />
          <strong>CreatedDate :</strong>
          <span>{user.CreatedDate}</span>
          <br />
          <br />
          <strong>MarketerName :</strong>
          <span>{user.MarketerName}</span>
          <br />
          <br />
          <Link to = "/" >
            <div className='btn btn-goback'>Close</div>
          </Link>
        </div>
      </div> 
    </div>
  )
}

export default View;