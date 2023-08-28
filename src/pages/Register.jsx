import styled from "styled-components";
// import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
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

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  /* display: block; */
  flex: 1;
`;

const NavLink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  display: block;
  flex: 1;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Container>
      {/* <Navbar></Navbar> */}
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="username"
            type="text"
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
          />
          <Input
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          ></Input>
          <Input
            placeholder="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Input>
          <Input
            placeholder="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <SmallWrapper>
            <Button>CREATE</Button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <NavLink style={{ textDecoration: "none" }}>
                ALREADY HAVE AN ACCOUNT!! LOGIN
              </NavLink>
            </Link>
          </SmallWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
