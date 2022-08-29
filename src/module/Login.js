import React from "react";
import "../LoginCss.css"
import axios from "axios";

class Login extends React.Component{
    state = {
        email: "",
        password: "",
        token: "",
    }
    handleTakeLogin = (e) => {
        // console.log(`login: ${e.target.value}`);
        this.setState({
            email: e.target.value,
        })
    }
    handleTakePassword = (e) => {
        // console.log(`haslo: ${e.target.value}`);
        this.setState({
            password: e.target.value,
        })
    }
    handleSubmit = (e) => {
        const {email, password} = this.state
        e.preventDefault()
        if(email === "")
        {
            return alert("Nie podałeś emaila!")
        }
        else if(password === "")
        {
            return alert("Nie podałeś hasła!")
        }
        else {
            const baseUrl = "http://localhost:8080/login/checkLogin"

            const datapost = {
                email : email,
                password : password,
            }
            console.log(datapost)
            axios.post(baseUrl,datapost)
            .then(response=>{
              if (response.data.success===true) {
                //wykona sie, jesli backend zwroci true
                alert(`${response.data.message} , token: ${response.data.token}`)
                this.setState({
                    token: response.data.token,
                })
                console.log(this.state.token)
                return true;
              }
              else {
                alert(response.data.message)
              }
            }).catch(error=>{
              alert("Error 34 "+error)
            })
        }
    }
    render(){
        const {email, password} = this.state
        return (
            <div>
                <form>
                <label>Login:
                    <input value={email} type="text" onChange={this.handleTakeLogin}></input>
                </label>
                <br/>
                <label>Hasło:
                    <input value={password} type="password" onChange={this.handleTakePassword}></input>
                </label>
                <button type="submit" onClick={this.handleSubmit}>Zaloguj</button>
                </form>
            </div>
            )
    }
}
export default Login;