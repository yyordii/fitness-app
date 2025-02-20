import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function WorkoutList() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios.get('/api/workouts')
            .then(response => setWorkouts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Workouts</h1>
            <Link to="/workouts/new">Add New Workout</Link>
            <ul>
                {workouts.map(workout => (
                    <li key={workout._id}>
                        <Link to={`/workouts/${workout._id}`}>{workout.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkoutList;