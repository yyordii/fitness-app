import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WorkoutForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isPrivate, setIsPrivate] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const workout = { title, description, videoUrl, imageUrl, isPrivate };
            await axios.post('/api/workouts', workout);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Workout</h1>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label>Video URL</label>
                <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
            </div>
            <div>
                <label>Image URL</label>
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <div>
                <label>Private</label>
                <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} />
            </div>
            <button type="submit">Add Workout</button>
        </form>
    );
}

export default WorkoutForm;