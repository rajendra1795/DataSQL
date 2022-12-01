import React from 'react'
import {Link} from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div className = "row-sm-4 p-3 ml-3" style={{backgroundColor:"#1d2b3a",width:"100%", height:"100%"}}>
        <center>
        <h1 className = 'header'>Welcome To RealEstate</h1>
        </center>
        <ol>                                                                                                                                               
        <Link to='/'></Link><br/>
        <Link to='/AccountType' className="Link"><li>AccountType</li></Link><br/>
        <Link to='/CommissionEntry' className="Link"><li>CommissionEntry</li></Link><br/>
        <Link to='/Commissions' className="Link"><li>Commissions</li></Link><br/>
        <Link to='/Customer' className="Link"><li>Customer</li></Link><br/>
        <Link to='/CustomerDocuments' className="Link"><li>CustomerDocuments</li></Link><br/>
        <Link to='/Designations' className="Link"><li>Designations</li></Link><br/>
        <Link to='/Dummy' className="Link"><li>Dummy</li></Link><br/>
        <Link to='/EmployeeDocuments' className="Link"><li>EmployeeDocuments</li></Link><br/>
        <Link to='/Employees' className="Link"><li>Employees</li></Link><br/>
        <Link to='/LandDocuments' className="Link"><li>LandDocuments</li></Link><br/>
        <Link to='/Lands' className="Link"><li>Lands</li></Link><br/>
        <Link to='/Login' className="Link"><li>Login</li></Link><br/>
        <Link to='/Passbook' className="Link"><li>Passbook</li></Link><br/>
        <Link to='/PassbookDocuments' className="Link"><li>PassbookDocuments</li></Link><br/>
        <Link to='/Payments' className="Link"><li>Payments</li></Link><br/>
        <Link to='/PlotPayments' className="Link"><li>Plotpayments</li></Link><br/>
        <Link to='/Plots' className="Link"><li>Plots</li></Link><br/>
        <Link to='/Projects' className="Link"><li>Projects</li></Link><br/>
        <Link to='/Plots' className="Link"><li>Plots</li></Link><br/>
        <Link to='/Users' className="Link"><li>Users</li></Link><br/>
        </ol>
    </div>
  )
}

export default Home;