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

            },
            memoModels: []
        }
    }

    componentDidMount() {

        axios.get('http://192.168.33.10/statsdigital-yii2-adv/web/rest').then((res) => {
            this.setState({
                memoModels: res.data
            });
        });

        // axios.get('http://11.11.11.11/statsdigital-yii2-adv/web/rest').then((res) => {
        //     this.setState({
        //         memoModels: res.data
        //     });
        // });
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
                            <th>Name</th>
                            <th>Memo</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.memoModels.map((obj, index) => {
                            return (
                                <tr key={index}>
                                    <td>{obj.id}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.memo}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default App;
