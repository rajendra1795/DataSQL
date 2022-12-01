import React, {useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./Edit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
  ReceiptNo: "",  
  PassbookNo: "",
  CreatedDate: "",
  UpdatedDate: "",
  PaymentDate: "",
  Percentage: "",
  Total: "",  
  TDS: "",
  Eligibility: "",
  Advance: "",
  Adjustment: "",
  Pending: "",
  Paid: "",
  MarketerName: "",
  ProjectId: "",
};

const AddEdit = () => {

  const [state, setState] = useState(initialState);

  const { ReceiptNo , PassbookNo, CreatedDate, UpdatedDate, PaymentDate, Percentage, Total, TDS, Eligibility, Advance, Adjustment, Pending, Paid, MarketerName, ProjectId } = state;

  const navigate = useNavigate();

  const {CommissionEntryId} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/Commissionentry/${CommissionEntryId}`)
    .then((resp) => setState({...resp.data[0]}));
  }, [CommissionEntryId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ReceiptNo || !PassbookNo || !CreatedDate || !UpdatedDate || !PaymentDate || !Percentage || !Total || !TDS || !Eligibility || !Advance || !Adjustment || !Pending || !Paid || !MarketerName || !ProjectId ) {
      toast.error("Please provide value in each input field");
    }else {
      if (!CommissionEntryId) {
        axios.post("http://localhost:5000/api/post/", {
          ReceiptNo,
          PassbookNo,
          CreatedDate,
          UpdatedDate,
          PaymentDate,
          Percentage,
          Total,
          TDS,
          Eligibility,
          Advance,
          Adjustment,
          Pending,
          Paid,
          MarketerName,
          ProjectId
      }).then(() => {
        setState({ReceiptNo: "", PassbookNo: "", CreatedDate: "", UpdatedDate: "", PaymentDate: "", Percentage: "", Total: "", TDS: "", Eligibility: "", Advance: "", Adjustment: "", Pending: "", Paid: "", MarketerName: "", ProjectId: "",});
     })
     .catch((err) => toast.error(err.response.data));
     toast.success("Added Successfully")
      } 
      else {
      axios.put(`http://localhost:5000/api/update/${CommissionEntryId}`, {
       ReceiptNo,
       PassbookNo, 
       CreatedDate,
       UpdatedDate,
       PaymentDate,
       Percentage,
       Total,
       TDS,
       Eligibility,
       Advance,
       Adjustment,
       Pending,
       Paid,
       MarketerName,
       ProjectId     
      }).then(() => {
        setState({ReceiptNo: "", PassbookNo: "", CreatedDate: "", UpdatedDate: "", PaymentDate: "", Percentage: "", Total: "", TDS: "", Eligibility: "", Advance: "", Adjustment: "", Pending: "", Paid: "", MarketerName: "", ProjectId: ""});
     })
     .catch((err) => toast.error(err.response.data));
     toast.success("Updated Successfully")
      }
     setTimeout(() => {
       navigate("/")
     }, 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({...state, [name] : value});
  };

  return (
    <div>
     <form style = {{
      margin : "auto",
      padding : "15px",
      maxWidth : "400px",
      alignContent : "center",
     }}
     onSubmit = {handleSubmit}
     >
      <label htmlFor="ReceiptNo">ReceiptNo</label>
      <input type = "number" id = "ReceiptNo" name = "ReceiptNo" placeholder="Enter Receipt No" value = {ReceiptNo || ""} onChange = {handleInputChange} />
 
      <label htmlFor="PassbookNo">PassbookNo</label>
      <input type = "number" id = "PassbookNo" name = "PassbookNo" placeholder="Enter PassbookNo" value = {PassbookNo || ""} onChange = {handleInputChange} />
      
      <label htmlFor="CreatedDate">CreatedDate</label>
      <input type = "date" id = "createdDate" name= "CreatedDate" placeholder="Enter Created Date" value = {CreatedDate || ""} onChange = {handleInputChange} />

      <label htmlFor="UpdatedDate">UpdatedDate</label>
      <input type = "date" id = "UpdatedDare" name = "UpdatedDate" placeholder="Enter Updated Date" value = {UpdatedDate || ""} onChange = {handleInputChange} />

      <label htmlFor="PaymentDate">PaymentDate</label>
      <input type = "date" id = "PaymentDate" name = "PaymentDate" placeholder="Enter Payment Date" value = {PaymentDate || ""} onChange = {handleInputChange} />

      <label htmlFor="Percentage">Percentage</label>
      <input type = "number" id = "Percentage" name = "Percentage" placeholder="Enter Percentage" value = {Percentage || ""} onChange = {handleInputChange} />
      

      <label htmlFor="Total">Total</label>
      <input type = "number" id = "Total" name= "Total" placeholder="Enter Total" value = {Total || ""} onChange = {handleInputChange} />

      <label htmlFor="TDS">TDS</label>
      <input type = "number" id = "TDS" name = "TDS" placeholder="Enter TDS" value = {TDS || ""} onChange = {handleInputChange} />


      <label htmlFor="Eligibility">Eligibility</label>
      <input type = "number" id = "Eligibility" name= "Eligibility" placeholder="Enter Eligibility" value = {Eligibility || ""} onChange = {handleInputChange} />

      <label htmlFor="Advance">Advance</label>
      <input type = "number" id = "Advance" name = "Advance" placeholder="Enter Advance" value = {Advance || ""} onChange = {handleInputChange} />

      <label htmlFor="Adjustment">Adjustment</label>
      <input type = "number" id = "Adjustment" name= "Adjustment" placeholder="Enter Adjustment" value = {Adjustment || ""} onChange = {handleInputChange} />

      <label htmlFor="Pending">Pending</label>
      <input type = "number" id = "Pending" name = "Pending" placeholder="Enter Pending" value = {Pending || ""} onChange = {handleInputChange} />

      <label htmlFor="Paid">Paid</label>
      <input type = "number" id = "Paid" name= "Paid" placeholder="Enter Paid" value = {Paid || ""} onChange = {handleInputChange} />

      <label htmlFor="MarketerName">MarketerName</label>
      <input type = "text" id = "MarketerName" name = "MarketerName" placeholder="Enter Marketer Name" value = {MarketerName || ""} onChange = {handleInputChange} />

      <label htmlFor="ProjectId">ProjectId</label>
      <input type = "number" id = "ProjectId" name= "ProjectId" placeholder="Enter ProjectId" value = {ProjectId || ""} onChange = {handleInputChange} />

      <input className = "btn btn-save" type = "submit" value = {CommissionEntryId ? "Update" : "Add"}/>
      <Link to = "/">
      <button className = "btn btn-close" value = "Close">Close</button>
      </Link> 

     </form>  
    </div>
  );
};

export default AddEdit;