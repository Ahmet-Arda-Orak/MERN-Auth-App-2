import { useContext, useState } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { signup } from "./auth-api";
import AuthApi from "../utils/AuthApi"


const SignUp = () => {
  const [userName,setUserName] = useState();
  const [lastName,setLastName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const authApi = useContext(AuthApi);

  const handleOnChange = (e) =>{
    if(e.target.name === "email" ){
      setEmail(e.target.value)
    }else if(e.target.name === "userName"){
      setUserName(e.target.value)  
    }else if(e.target.name === "password"){
      setPassword(e.target.value)  
    }else{
      setLastName(e.target.value)
    }
  }
  
  const handleSignUp = async(e) => {
    e.preventDefault();
    const result = await signup({userName,lastName,email,password});
    console.log(result)
   if(result.data.auth){
      authApi.setAuth(true);
   }else{ 
     if(password == null || userName == null || lastName == null  ){
      window.alert("Please enter password,username and lastname")
    }else if( userName.length < 2 ){
      window.alert("Username too short")
    }else if( lastName.length < 2 ){
      window.alert("Lastname too short")
    }else if( password.length < 6 ){
      window.alert("Password min 6 chars")
    }else{
      window.alert("Email used before")
    }}
  }

  return (
      <Container className="App">
        <Form className="form">
        <Col xs={4} style={{margin:"auto"}} >
        <h2>Sign Up</h2>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="userName"
                id="username"
                placeholder="John"
                onChange={handleOnChange}
              />
            </FormGroup>
          </Col>
        <Col xs={4} style={{margin:"auto"}} >
            <FormGroup>
              <Label>LastName</Label>
              <Input
                type="text"
                name="lastName"
                id="lastname"
                placeholder="Doe"
                onChange={handleOnChange}
              />
            </FormGroup>
          </Col>
          <Col xs={4} style={{margin:"auto"}} >
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="myemail@email.com"
                onChange={handleOnChange}
              />
            </FormGroup>
          </Col>
          <Col xs={4} style={{margin:"auto"}}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                onChange={handleOnChange}
              />
            </FormGroup>
            <Button onClick={handleSignUp} color="primary" type="submit" >Submit</Button>
          </Col>
        </Form>
      </Container>
    );
  }

  export default SignUp;