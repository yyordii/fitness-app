// Function to retrieve a cookie by name
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  const userId = getCookie("userId"); // Retrieve the userId from the cookie
  const userIdSpan = document.getElementById("userId");
  const workoutForm = document.getElementById("workoutForm");
  const workoutsDiv = document.getElementById("workouts");

  // Display the userId on the page
  if (userId) {
    userIdSpan.textContent = `Your User ID: ${userId}`;
  } else {
    console.error("No userId found in cookies");
    window.location.href = "index.html";
    return;
  }

  // Fetch and display workouts
  async function fetchWorkouts() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/workouts/${userId}`,
        {
          method: "GET",
          credentials: "include", // Include cookies in the request
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch workouts");
      }

      const workouts = await response.json();
      workoutsDiv.innerHTML = "<h2>Your Workouts</h2>"; // Clear existing workouts
      workouts.forEach((workout) => {
        const workoutDiv = document.createElement("div");
        workoutDiv.className = "workout";
        workoutDiv.innerHTML = `
          <h4>${workout.name}</h4>
          <p>Muscle Group: ${workout.muscleGroup}</p>
          <p>Sets: ${workout.sets}, Reps: ${workout.reps}</p>
          <p>Weight: ${workout.weight} ${workout.unit}</p>
          <p>Notes: ${workout.notes}</p>
          <p>Date: ${new Date(workout.date).toLocaleDateString()}</p>
        `;
        workoutsDiv.appendChild(workoutDiv);
      });
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  }

  // Handle workout form submission
  workoutForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const workout = {
      name: document.getElementById("workoutName").value, // Name of the workout
      muscleGroup: document.getElementById("muscleGroup").value, // Muscle group
      sets: parseInt(document.getElementById("sets").value), // Number of sets
      reps: parseInt(document.getElementById("reps").value), // Number of reps
      weight: parseFloat(document.getElementById("weight").value), // Weight used
      unit: document.getElementById("unit").value, // Unit of weight (kg/lbs)
      date: new Date().toISOString(), // Current date in ISO format
      notes: document.getElementById("notes").value, // Notes for the workout
      isPrivate: true, // Default value for isPrivate
      user: userId, // Include the userId in the request
    };

    try {
      const response = await fetch("http://localhost:5000/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workout),
        credentials: "include", // Include cookies in the request
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add workout");
      }

      alert("Workout added successfully");
      fetchWorkouts(); // Refresh the workouts list
    } catch (error) {
      console.error("Error adding workout:", error);
      alert(error.message);
    }
  });

  // Fetch workouts on page load
  fetchWorkouts();
});