import React, {useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import "./App.css";
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

const CommissionEntry = () => {

// Data Table

const [data, setData] = useState([]);

const [user, setUser] = useState({});

const {CommissionEntryId} = useParams();


useEffect(() => {
  axios.get(`http://localhost:5000/api/Commissionentry/${CommissionEntryId}`)
  .then((response) => setUser({...response.data[0] }))
 }, [CommissionEntryId]);

const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/Commissionentry");
    setData(response.data);
  };

useEffect(() => {
  loadData();
}, []);

// Delete Data

const deleteData = (CommissionEntryId) => {
  if(window.confirm("Are you sure that you wanted to delete Data ?")) {
    axios.delete(`http://localhost:5000/api/delete/${CommissionEntryId}`);
    toast.success("Data Deleted Successfully");
    setTimeout(() => loadData(), 500);
  }
}

// View Data 

  const ViewData = (CommissionEntryId) => {
      axios.get(`http://localhost:5000/api/Commissionentry/${CommissionEntryId}`)
      .then((response) => setUser({...response.data[0] }))
     };
  
// Edit Data

const [state, setState] = useState(initialState);

const { ReceiptNo , PassbookNo, CreatedDate, UpdatedDate, PaymentDate, Percentage, Total, TDS, Eligibility, Advance, Adjustment, Pending, Paid, MarketerName, ProjectId } = state;

const navigate = useNavigate();

const EditData = () => {}

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

  return(
    <div>
       <div className = "container mt-2">
       <div className = 'box row-sm-4'>
        <form className = 'row p-4 ml-3' onSubmit={handleSubmit}> 
          <h3 className='heading mb-4 text-center'>COMMISSION ENTRY</h3>
               
             <div className='row-sm-4 p-3 ml-3'>
                 
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id = "ReceiptNo" name="ReceiptNo" value={ReceiptNo || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Receipt No</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id = "PassbookNo" name="PassbookNo" value={PassbookNo || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Passbook No</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="date" class="form-control  mb-4" id = "CreatedDate" name="CreatedDate" value={CreatedDate || ""} onChange = {handleInputChange} required="required"/>
                   <span>CreatedDate</span>
                </div>

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="date" class="form-control  mb-4" id = "UpdatedDate" name="UpdatedDate" value={UpdatedDate || ""} onChange = {handleInputChange}  required="required"/>
                   <span>UpdatedDate</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="date" class="form-control  mb-4" id = "PaymentDate" name="PaymentDate" value={PaymentDate || ""} onChange = {handleInputChange}  required="required"/>
                   <span>PaymentDate</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control  mb-4" id = "Percentage" name="Percentage" value={Percentage || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Percentage</span>
                </div>  
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control  mb-4" id = "Total" name="Total" value={Total || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Total</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id ="TDS" name="TDS" value = {TDS || ""} onChange = {handleInputChange} required="required"/>
                   <span>TDS</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id ="Eligibility" name="Eligibility" value={Eligibility || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Eligibility</span>
                </div>  
                
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id = "Advance" name="Advance" value = {Advance || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Advance</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id = "Adjustment" name="Adjustment" value={Adjustment || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Adjustment</span>
                </div> 
                
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control  mb-4" id = "Pending" name="Pending" value={Pending || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Pending</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control  mb-4" id = "Paid" name="Paid" value={Paid || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Paid</span>
                </div> 
                
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="text" class="form-control  mb-4" id = "MarketerName" name="MarketerName" value={MarketerName || ""} onChange = {handleInputChange}  required="required"/>
                   <span>MarketerName</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control  mb-4" id = "ProjectId" name="ProjectId" value={ProjectId || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Project ID</span>
                </div> 
                </div>
                <button type="submit" className='submit' value = {CommissionEntryId ? "Update" : "Add"}>Insert Record</button>
              
             </form>
      </div>   
    </div>
    <div class="col-sm-8" style ={{backgroundColor:"skyblue", width:"100%"}}>
    <div class="input-group mb-4 mt-3">
    </div>  
    <table class="table table-hover  table-striped table-bordered ml-4 ">
        <thead>
        <tr style={{backgroundColor:"#1d2b3a",color:"#00dfc4", textAlign:"center"}}>
            <th>Commission Entry ID</th>
            <th>Receipt No</th>
            <th>Passbook No</th>
            <th>Created Date</th>
            <th>Updated Date</th>
            <th>Payment Date</th>
            <th>Percentage</th>
            <th>Total</th>
            <th>TDS</th>
            <th>Eligibility</th>
            <th>Advance</th>
            <th>Adjustment</th>
            <th>Pending</th>
            <th>Paid</th>
            <th>MarketerName</th>
            <th>Project Id</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody style={{textAlign:"center", fontFamily:"unset", fontWeight:"700", fontSize:"20px"}}>
        {data.map((item,index)=>{
            return(
              <tr key = {item.CommissionEntryId}>
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
                  <div className = "buttons">
             
                  <button className = "btn btn-edit" onClick={() => EditData(item.CommissionEntryId)}>Edit</button>
                  <button type="button" className ="btn btn-view" onClick={() => ViewData(item.CommissionEntryId)} data-toggle="modal" data-target="#exampleModal">
                           View
                  </button>
                  <button className = "btn btn-delete" onClick={() => deleteData(item.CommissionEntryId)}>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
    </table>
  </div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header" style={{fontSize:"20px", backgroundColor: "#1d2b3a"}} >
        <h1 className ="card-header" style={{fontSize:"20px", backgroundColor: "#1d2b3a"}} id="exampleModalLabel">CommissionEntry ID<span>{user.CommissionEntryId}</span></h1>
        <button type="button" className ="btn-close" data-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div className ="modal-body">
      <div style={{marginTop: "15px"}}>
    
          <strong>ReceiptNo  : <span>{user.ReceiptNo}</span></strong>
          <br/>

          <strong>PassbookNo : <span>{user.PassbookNo}</span></strong>
          <br/>

          <strong>CreatedDate : <span>{user.CreatedDate}</span></strong>
          <br/>

          <strong>UpdatedDate : <span>{user.UpdatedDate}</span> </strong>
          <br/>

          <strong>PaymentDate : <span>{user.PaymentDate}</span> </strong>
          <br/>

          <strong>Percentage  : <span>{user.Percentage}</span></strong>
          <br/>

          <strong>    Total   : <span>{user.Total}</span></strong>
          <br/>

          <strong>     TDS    : <span>{user.TDS}</span></strong>
          <br/>

          <strong>Eligibility : <span>{user.Eligibility}</span></strong>
          <br/>

          <strong>    Advance        : <span>{user.Advance}</span></strong>
          <br/>

          <strong>  Adjustment       : <span>{user.Adjustment}</span></strong>
          <br/>

          <strong>     Pending       : <span>{user.Pending}</span></strong>
          <br/>

          <strong>      Paid         : <span>{user.Paid}</span></strong>
          <br/>

          <strong>  MarketerName     : <span>{user.MarketerName}</span></strong>
          <br/>

          <strong>    ProjectId      : <span>{user.ProjectId}</span></strong>
          <br/>

    </div>
      </div>
      <div class="modal-footer" style={{backgroundColor: "#00dfc4"}} >
      <button type="button" class="btn btn-danger" style={{fontSize:"25px"}}  data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
 
  </div>
  )
}
 
export default CommissionEntry;