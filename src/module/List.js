import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
import { Link } from "react-router-dom";
import axios from 'axios';
class listComponent extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      listEmployee:[]
    }
  }

  sendDelete(userId)
  {
    // url de backend
    const baseUrl = "http://localhost:8080/employee/delete"    // parameter data post
    // network
    axios.post(baseUrl,{
      id:userId
    })
    .then(response =>{
      if (response.data.success) {
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }

  componentDidMount(){
    axios.get("http://192.168.0.38:8080/employee/list")
    .then(res => {
      const data = res.data.data;
      this.setState({ listEmployee:data });
      console.log('res z get', res);
    })
    .catch(error => {
      alert(error)
    });

  }
  render()
  {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Role</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }
  loadFillData(){

    return this.state.listEmployee.map((data)=>{
      return(
        <tr>
          <th>{data.id}</th>
          <td>{data.role.role}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
          <Link class="btn btn-outline-info "  to={"/edit/"+data.id} >Edit</Link>
          </td>
          <td>
          <button type="submit" class="btn btn-outline-danger" onClick={()=>this.sendDelete(data.id)}>Delete</button>
          </td>
        </tr>
      )
    });
  }
}

export default listComponent;