import React from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import {Link} from 'react-router-dom'
import '../styles/login.css'

const Register = () => {
  return <section>
  <Container>
    <Row>
      <Col lg='8' className="m-auto">
        <div className="login__container d-flex justify-content-between">
          <div className="login__img">
            <img src={registerImg} alt=''/>
          </div>

          <div className="login__form">
            <div className="user">
              <img src={userIcon} alt="" />
            </div>
            <h2>Register</h2>

            <Form>
            <FormGroup>
                <input type="text" placeholder="username" required id="username"
                />
              </FormGroup>
              <FormGroup>
                <input type="email" placeholder="Email" required id="email"
                />
              </FormGroup>
              <FormGroup>
                <input type="password" placeholder="Password" required id="password"
                />
              </FormGroup>
              <Button className="btn secondary__btn auth__btn" type="submit">Create Account</Button>
            </Form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
}

export default Register