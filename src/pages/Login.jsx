import React from 'react'
import { Link } from 'react-router-dom';

import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:
    url("https://images.unsplash.com/photo-1587606607030-5e0716be2b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNzA4Mjc2fHxlbnwwfHx8fHw%3D&w=1000&q=80"),
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  opacity:0.9

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function Homepage() {
  return (
    <Container>
     <Wrapper>
        <Title>
           SIGN UP
        </Title>
        <Form>
          <Input placeholder="email" name="email" />
          <Input placeholder="password" name="password" />
          <Button >LOGIN</Button>
          <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1>
          <Link to="/register" style={{color:"black"}}>
          <Link1>CREATE A NEW ACCOUNT</Link1>
            </Link>
        </Form>
     </Wrapper>
    </Container>
  )
}
