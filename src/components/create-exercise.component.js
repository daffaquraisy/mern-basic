import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateExercise extends Component {

    constructor(props) {
        // we need to always super when defining the constructor of a sub class
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // to create the properties that will response to the fields of the document of mongodb
            username: '',
            description: '',
            duration: '',
            date: new Date(),
            users: []
        }
    }

    // lifesycle
    componentDidMount() {
        // will automatically be called before anything displays on the page

        axios.get('http://localhost:5000/users/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        // send the data to backend
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <div className="container">
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Username</label>
                        <select className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>

                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>
                                        {user}
                                    </option>
                                })
                            }

                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
                    </div>

                    <div className="form-group">
                        <label>Duration (in minutes)</label>
                        <input type="text" className="form-control" value={this.state.duration} onChange={this.onChangeDuration} />
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate} className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit"
                            className="btn btn-primary" value="Create" />
                    </div>
                </form>
            </div>
        );
    }
}