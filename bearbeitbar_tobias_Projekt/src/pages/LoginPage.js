import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import TextHeading from '../components/TextHeading';
import InputField from '../components/InputField';

class LoginPage extends React.Component {
  
    constructor(props) {      //Konstruktor nicht löschen, enthält wichtige Dinge für die Refs
        super(props)
        this.inputEmail = React.createRef();
        this.inputPasswort = React.createRef(); 
                            
                            this.state = { ////////SQL Beispielcode///////
                                todos: [], ////////SQL Beispielcode///////
                                input: "", ////////SQL Beispielcode///////

                                usernameInput: '', ////////LOGIN Beispielcode///////
                                passwordInput: '', ////////LOGIN Beispielcode///////
                                refresh_token: '', ////////LOGIN Beispielcode///////
                                access_token: '', ////////LOGIN Beispielcode///////
                                username: '', ////////LOGIN Beispielcode///////

                            } ////////SQL Beispielcode///////
                            this.updateInput = this.updateInput.bind(this) ////////SQL Beispielcode///////
                            this.addToDo = this.addToDo.bind(this) ////////SQL Beispielcode///////

                          this.updateUsernameField = this.updateUsernameField.bind(this) ////////LOGIN Beispielcode///////
                          this.updatePasswordField = this.updatePasswordField.bind(this) ////////LOGIN Beispielcode///////
                          this.handleSubmit = this.handleSubmit.bind(this) ////////LOGIN Beispielcode///////
                            
    }

    onLoginButtonClick = () => {  //Nicht löschen, hat auch mit den Refs zutun.
      //TODO: Daten an Datenbank weitergeben
      console.log(`${this.inputEmail.current.state?.value}`);
      console.log(`${this.inputPasswort.current.state?.value}`);

      alert('Sie haben Sich eingeloggt.')
    }


                            componentDidMount() { ////////SQL Beispielcode///////
                                fetch('http://localhost:8080/api/todos')
                                .then(response => response.json())
                                .then(data => {
                                    this.setState({
                                        todos: data
                                    })
                                })
                            } ////////SQL Beispielcode///////

                            updateInput(e) { ////////SQL Beispielcode///////
                                const value = e.target.value
                                this.setState({ input: value })
                            } ////////SQL Beispielcode///////

                            addToDo() { ////////SQL Beispielcode///////
                                fetch('http://localhost:8080/api/todos', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"descr" : this.state.input}) })  ////////SQL Beispielcode///////
                                    .then(res => res.json())
                                    .then((result) => {
                                        this.setState((currentState) => {
                                            return {
                                                todos: currentState.todos.concat(result),
                                                input: ""
                                            }
                                        })
                                    })
                            } ////////SQL Beispielcode///////

                            deleteToDo(id){ ////////SQL Beispielcode///////
                                fetch('http://localhost:8080/api/todos/' + id, { method: 'DELETE' })
                                    .then(res => res.json())
                                    .then((result) => {
                                        this.setState((state) => {
                                            return {
                                                todos: state.todos.filter((val) => val.id !== result[0].id)
                                            }
                                        })
                                    })
                            } ////////SQL Beispielcode///////


                            ////////LOGIN Beispielcode///////
                              updateUsernameField(event) {
                                  this.setState({
                                      usernameInput: event.target.value
                                  })
                              }
                          
                              updatePasswordField(event) {
                                  this.setState({
                                      passwordInput: event.target.value
                                  })
                              }
                          
                              handleSubmit(event) {
                                  event.preventDefault();
                                  let formData = new FormData()
                                  formData.append("grant_type", "password")
                                  formData.append("client_id", "reactapp")
                                  formData.append("client_secret", "abc123")
                                  formData.append("username", this.state.usernameInput)
                                  formData.append("password", this.state.passwordInput)
                                  formData.append("scope", 'admin')
                          
                                  const requestOptions = {
                                      method: 'POST',
                                      body: formData
                                  }
                                  fetch('http://localhost:8080/api/auth', requestOptions)
                                      .then(response => response.json())
                                      .then(data => {
                                          if (data.access_token) {
                                              this.setState(currentState => ({
                                                  access_token: data.access_token,
                                                  refresh_token: data.refresh_token,
                                                  username: currentState.usernameInput
                                              }))
                                          }
                                          else {
                                              alert("Wrong credentials");
                                          }
                                          this.setState({
                                              passwordInput: '',
                                              usernameInput: ''
                                          })
                                      })
                              }
                          
                          
    render() {
        if (this.state.refresh_token === '') {  ////////LOGIN Beispielcode///////
            return (
              <div className="loginPage">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Username:
                                </td>
                                    <td>
                                        <input type="text" name="username" onChange={this.updateUsernameField} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Password:
                                </td>
                                    <td>
                                        <input type="password" name="password" onChange={this.updatePasswordField} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" value="Login"  ////////LOGIN Beispielcode///////
                         />
                    </form>

        
                            <h3 ////////SQL Beispielcode/////// 
                            >BeispielSQL Abfrage (Error, weil andere Datenbank)</h3>
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
                            ////////SQL Beispielcode///////
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
                    ref={this.inputEmail}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                <InputField
                    id="EingabePassword"
                    type="password"
                    placeholder="Password"
                    ref={this.inputPasswort}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <Button 
                    className="orangeBackground" 
                    id="button-login"
                    href="/map" //Muss dann über SQL erfolgen?
                    value="Einloggen"
                    onClick={this.onLoginButtonClick.bind(this)}>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        </div>
            )   ////////LOGIN Beispielcode///////

        }   ////////LOGIN Beispielcode///////
        else {   ////////LOGIN Beispielcode///////
            return (   ////////LOGIN Beispielcode///////
                <h1>You are logged in as {this.state.username}</h1>   ////////LOGIN Beispielcode///////
            )   ////////LOGIN Beispielcode///////
        }   ////////LOGIN Beispielcode///////
    }
}


export default LoginPage;
