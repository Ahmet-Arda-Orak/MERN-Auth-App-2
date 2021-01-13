import { useContext, useState } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import AuthApi from '../utils/AuthApi';
import { signin } from './auth-api';


const SignIn = () => {
  const [email,setEmail]= useState();
  const [password,setPassword] = useState();
  const authApi = useContext(AuthApi)

    const handleOnChange = (e) =>{
      if(e.target.name === "email"){
        setEmail(e.target.value)
      }else{
        setPassword(e.target.value)
      }
    }

    const handleSignIn= async(e) =>{
      e.preventDefault();
      const result = await signin({email,password});
      if(result.data.auth){
        authApi.setAuth(true);
        console.log("Hi")
      }else{
        window.alert("İnvalid email or password")
      }
    }



    return (
      <Container className="App">
        <Form className="form">
          <Col xs={4} style={{margin:"auto"}} >
          <h2>Sign In</h2>
            <FormGroup>
              <Label>Email</Label>
              <Input
                name="email"
                id="exampleEmail"
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
                id="examplePassword"
                placeholder="********"
                onChange={handleOnChange}
              />
            </FormGroup>
            <Button onClick={handleSignIn} color="primary" >Submit</Button>
          </Col>
        </Form>
      </Container>
    );
  }

export default SignIn;