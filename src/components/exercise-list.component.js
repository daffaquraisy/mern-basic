import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component {

    constructor(props) {
        super(props)

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = { exercises: [] };
    }

    // lifesycle
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                this.setState({ exercises: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <p>List Component</p>
            </div>
        );
    }
}