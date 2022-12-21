import React, {useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./Edit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
  ReceiptNo: "",  
  CreatedDate: "",
  MarketerName: "",
};

const AddEdit = () => {

  const [state, setState] = useState(initialState);

  const { ReceiptNo, CreatedDate, MarketerName } = state;

  const navigate = useNavigate();

  const {CommissionEntryId} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/Commissionentry/${CommissionEntryId}`)
    .then((resp) => setState({...resp.data[0]}));
  }, [CommissionEntryId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ReceiptNo || !CreatedDate || !MarketerName ) {
      toast.error("Please provide value in each input field");
    }else {
      if (!CommissionEntryId) {
        axios.post("http://localhost:5000/api/post/", {
          ReceiptNo,   
          CreatedDate,
          MarketerName
      }).then(() => {
        setState({ReceiptNo: "", CreatedDate: "", MarketerName: "",});
     })
     .catch((err) => toast.error(err.response.data));
     toast.success("Added Successfully")
      } 
      else {
      axios.put(`http://localhost:5000/api/update/${CommissionEntryId}`, {
       ReceiptNo,
       CreatedDate,
       MarketerName    
      }).then(() => {
        setState({ReceiptNo: "", CreatedDate: "", MarketerName: ""});
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
    <div className = "form">
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
      
      <label htmlFor="CreatedDate">CreatedDate</label>
      <input type = "date" id = "createdDate" name= "CreatedDate" placeholder="Enter Created Date" value = {CreatedDate || ""} onChange = {handleInputChange} />
      
      <label htmlFor="MarketerName">MarketerName</label>
      <input type = "text" id = "MarketerName" name = "MarketerName" placeholder="Enter Marketer Name" value = {MarketerName || ""} onChange = {handleInputChange} />  
      
      <input className = "btn btn-add" type = "submit" value = {CommissionEntryId ? "Update" : "Add"}/>
      <Link to = "/">
      <button className = "btn btn-close" value = "Close">Close</button>
      </Link> 

     </form>  
    </div>
  );
};

export default AddEdit;