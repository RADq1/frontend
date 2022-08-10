
// const baseUrl = "http://192.168.0.38:8080"

import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Edit = () => {
  const [campName, setCampName] = useState('');
  const [campEmail, setCampEmail] = useState('');
  const [selectRole, setSelectRole] = useState('');
  const [campPhone, setCampPhone] = useState('');
  const [campAddress, setCampAddress] = useState('');

  const { id } = useParams();

  useEffect(() => {
    // console.log("asd");
    const baseUrl = "http://localhost:8080";
    const url = baseUrl+"/employee/get/"+id
    // const url = `${baseUrl}/employee/get/${userId}`
    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0];
        if(!data) return;
        // this.setState({
        //   dataEmployee:data,
        //   campName: data.name,
        //   campEmail:data.email,
        //   campPhone:data.phone,
        //   campAddress:data.address,
        //   stringRole:data.role.role,
        //   selectRole:data.roleId
        // })
        setCampName(data.name);
        setCampEmail(data.email);
        setSelectRole(data.role.role);
        setCampPhone(data.phone);
        setCampAddress(data.address);
        // console.log(JSON.stringify(data.role.role))
        // console.log(JSON.stringify(data.name.name))
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })
  // eslint-disable-next-line
  },[])
  const sendUpdate = () => {
    const baseUrl = "http://localhost:8080/employee/update/"+id
    // url de backend
    // console.log("bla")
    // parametros de datos post
    // axios.post(baseUrl,{
    //   name : campName,
    //   email : campEmail,
    //   phone : campPhone,
    //   address : campAddress,
    //   role  : selectRole
    // })
    // .then(response=>{
    //   if (response.data.success===true) {
    //     alert(response.data.message)
    //   }
    //   else {
    //     alert("Error")
    //   }
    // }).catch(error=>{
    //   alert("Error 34 "+error)
    // })

    try {
       axios.post(baseUrl, {
        name : campName,
        email : campEmail,
        phone : campPhone,
        address : campAddress,
        role  : selectRole
      }).then((res) => console.log(res));
    } catch (e) {
      console.log(e);
    }
   }

   console.log(selectRole);
  return (
    <div>
    <div>
      <div>
        <label>Name</label>
        <input type="text" class="form-control"  placeholder="Name"
          value={campName} onChange={(value)=> setCampName(value.target.value)}/>
      </div>
      <div>
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control"  placeholder="Email"
          value={campEmail} onChange={(value)=> setCampEmail(value.target.value)}/>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputState">Role
          <select id="inputState" class="form-control" value={selectRole} onChange={(e)=> setSelectRole(e.target.value)}>
          <option value="1">Admin</option>
          <option value="2">Project Manager</option>
          <option value="3">Programmer</option>
        </select>
        </label>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Phone</label>
        <input type="number" class="form-control"  placeholder="Phone"
          value={campPhone} onChange={(value)=> setCampPhone(value.target.value)}/>
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
        value={campAddress} onChange={(value)=> setCampAddress(value.target.value)}/>
    </div>
    <br></br>
    <button type="submit" class="btn btn-primary" onClick={sendUpdate}>Update</button>
  </div>
  );
}


export default Edit