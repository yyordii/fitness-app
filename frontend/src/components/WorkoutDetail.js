import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function WorkoutDetail() {
    const { id } = useParams();
    const [workout, setWorkout] = useState(null);

    useEffect(() => {
        axios.get(`/api/workouts/${id}`)
            .then(response => setWorkout(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!workout) return <div>Loading...</div>;

    return (
        <div>
            <h1>{workout.title}</h1>
            <p>{workout.description}</p>
            {workout.videoUrl && <video src={workout.videoUrl} controls />}
            {workout.imageUrl && <img src={workout.imageUrl} alt={workout.title} />}
            <p>{workout.isPrivate ? 'Private' : 'Public'}</p>
        </div>
    );
}

export default WorkoutDetail;