import { useState } from "react";
import styled from "styled-components";
import CollectionsIcon from '@mui/icons-material/Collections';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1587606607030-5e0716be2b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNzA4Mjc2fHxlbnwwfHx8fHw%3D&w=1000&q=80"),
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
 
`;
const Label = styled.label`
display:flex,

`
const Text=styled.h5`
margin-top:13px
`

const Register = () => {
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:"",
        files:""
    })
    const hadleChange=(e)=>{

   setUser((prev)=>({
       ...prev,
       [e.target.name]:e.target.value
   }))
    }
    console.log(user)
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" name="name" onChange={hadleChange}/>
                    <Input placeholder="email" name="email" onChange={hadleChange}/>
                    <Input placeholder="password" type="password" name="password"onChange={hadleChange} />
                    <Input placeholder="confirm password" type="password" name="reEnterPassword" onChange={hadleChange}/>
                    <Input accept="image/*"
                        style={{ display: "none"}}
                        id="raised-button-file"
                        name='files'
                        type="file" 
                        onChange={hadleChange}/>
                    <Label htmlFor="raised-button-file">
                        <CollectionsIcon htmlColor="red"  style={{ marginTop: "10px"}}/>
                         <Text> CHOOSE YOUR AVATAR </Text>
                    </Label>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;