import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock, Table} from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            memoModel: {
                name: "Faiz",
                memo: "Faiz Hensem"

            },
            memoModels: [],
            verified: false,
            value: "",
            semak: "Login"
        }
    }

    componentDidMount() {

    }

    getData = () => {
        // axios.get('http://192.168.33.10/statsdigital-yii2-adv/web/rest').then((res) => {
        //     this.setState({
        //         memoModels: res.data
        //     });
        // });

        axios.get('http://11.11.11.11/statsdigital-yii2-adv/web/rest').then((res) => {
            this.setState({
                memoModels: res.data
            });
        });
    };

    checkUsername = () => {
        this.setState({
            semak: "sedang meloginkan anda..."
        });
        axios.post('http://11.11.11.11/statsdigital-yii2-adv/web/rest/auth', {
            username: this.state.value
        }).then((res) => {
            if (res.data.status === 1) {
                this.getData();
            } else {
                alert("Salah username")
            }
        }).finally(() => {
            this.setState({
                semak: "Login"
            });
        });

    };

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
                    {(() => {
                        if (this.state.verified) {
                            return (
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
                            );
                        } else {
                            return (
                                <div>
                                    <h2>Forbidden Access</h2>
                                    <hr/>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="Semak Username"
                                        placeholder="Masukkan username"
                                        value={this.state.value}
                                        onChange={(e) => {
                                            this.setState({
                                                value: e.target.value
                                            })
                                        }}
                                    />
                                    <Button onClick={this.checkUsername}>{this.state.semak}</Button>
                                </div>
                            );
                        }
                    })()}

                </div>
            </div>
        );
    }
}

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default App;
