import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Table} from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            memoModel: {
                name: "Faiz",
                memo: "Faiz Hensem"

            }
        }
    }

    componentDidMount(){
        let self=this;
        // Make a request for a user with a given ID
        axios.get('http://192.168.33.10/statsdigital-yii2-adv/web/rest/view?id=14')
            .then(function (response) {
                self.setState({
                    memoModel:response.data
                })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React {this.state.memoModel.name}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div className="container">
                    <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
                </div>
            </div>
        );
    }
}

export default App;
