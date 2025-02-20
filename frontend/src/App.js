import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkoutList from './components/WorkoutList';
import WorkoutForm from './components/WorkoutForm';
import WorkoutDetail from './components/WorkoutDetail';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<WorkoutList />} />
                    <Route path="/workouts/new" element={<WorkoutForm />} />
                    <Route path="/workouts/:id" element={<WorkoutDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;