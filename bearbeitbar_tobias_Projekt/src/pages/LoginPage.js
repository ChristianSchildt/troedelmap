import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import TextHeading from '../components/TextHeading';
import InputField from '../components/InputField';

class LoginPage extends React.Component {

  ////////SQL Beispielcode///////

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            input: ""
        }
        this.updateInput = this.updateInput.bind(this)
        this.addToDo = this.addToDo.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/todos') 
        .then(response => response.json())
        .then(data => {
            this.setState({
                todos: data
            })
        })
    }

    updateInput(e) {
        const value = e.target.value
        this.setState({ input: value })
    }

    addToDo() {
        fetch('http://localhost:8080/api/todos', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"descr" : this.state.input}) }) 
            .then(res => res.json())
            .then((result) => {
                this.setState((currentState) => {
                    return {
                        todos: currentState.todos.concat(result),
                        input: ""
                    }
                })
            })
    }

    deleteToDo(id){
        fetch('http://localhost:8080/api/todos/' + id, { method: 'DELETE' })
            .then(res => res.json())
            .then((result) => {
                this.setState((state) => {
                    return {
                        todos: state.todos.filter((val) => val.id !== result[0].id)
                    }

                })
            })
    }

    ////////SQL Beispielcode///////

    render() {
      return (
        <div className="loginPage">
          <h3>BeispielSQL Abfrage (Error, weil andere Datenbank)</h3>
          <ul>
              {this.state.todos.map((element) => (
                  <li key={element.id}>{element.descr}
                      <button onClick={() => this.deleteToDo(element.id)}>Delete</button>
                  </li>
              ))}
          </ul>
          <input
              type="text"
              value={this.state.input}
              onChange={this.updateInput}
          ></input><button onClick={this.addToDo}>Add</button>















        <Container fluid>
          <Row>
            <Col md={3}>
              <Picture id="logoicon" src="troedelmap.svg"></Picture>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Button 
                className="button-home" 
                href="/" 
                value="HOME">
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 4}} className="text-center">
              <Row>
                <Col md={12} className="text-center titel">
                  <TextHeading
                    id="Titel"
                    value="Log dich ein">
                  </TextHeading>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField
                    id="EingabeEmail"
                    type="email" 
                    placeholder="Email"
                    
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                <InputField
                    id="EingabePassword"
                    type="password"
                    placeholder="Password"
                    
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <Button 
                    className="orangeBackground" 
                    id="button-login"
                    href="/map" 
                    value="Einloggen">
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default LoginPage;
