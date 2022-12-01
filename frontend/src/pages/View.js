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
          <strong>ReceiptNo :</strong>
          <span>{user.ReceiptNo}</span>
          <br />
          <br />
          <strong>PassbookNo :</strong>
          <span>{user.PassbookNo}</span>
          <strong>CreatedDate :</strong>
          <span>{user.CreatedDate}</span>
          <br />
          <br />
          <strong>UpdatedDate :</strong>
          <span>{user.UpdatedDate}</span>
          <br />
          <br />
          <strong>PaymentDate :</strong>
          <span>{user.PaymentDate}</span>
          <br />
          <br />
          <strong>Percentage :</strong>
          <span>{user.Percentage}</span>
          <strong>Total :</strong>
          <span>{user.Total}</span>
          <br />
          <br />
          <strong>TDS :</strong>
          <span>{user.TDS}</span>
          <strong>Eligibility :</strong>
          <span>{user.Eligibility}</span>
          <br />
          <br />
          <strong>Advance :</strong>
          <span>{user.Advance}</span>
          <strong>Adjustment :</strong>
          <span>{user.Adjustment}</span>
          <br />
          <br />
          <strong>Pending :</strong>
          <span>{user.Pending}</span>
          <strong>Paid :</strong>
          <span>{user.Paid}</span>
          <br />
          <br />
          <strong>MarketerName :</strong>
          <span>{user.MarketerName}</span>
          <strong>ProjectId :</strong>
          <span>{user.ProjectId}</span>
          <br />
          <br />
          <Link to = "/" >
            <div className='btn btn-goback'>Go Back</div>
          </Link>
        </div>
      </div> 
    </div>
  )
}

export default View;