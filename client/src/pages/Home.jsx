import { useState, useEffect } from 'react'
import "../App.css";

function Home() {
   
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    fetch("/api/get-all-food-trucks")
      .then((res) => res.json())
        .then((data) => setFoodTrucks(data));
  }, [])

  return (
    <div className="home">
      <h1>All Food Trucks 🚚</h1>
      <p className="truck-count">Total number of food trucks: {foodTrucks.length}</p>
      <div className="truck-grid">
        {foodTrucks.map((truck) => (
          <div className="truck-card" key={truck.id}>
            <h2>{truck.name}</h2>
            <p><span>Id:</span> {truck.id}</p>
            <p><span>Location:</span> {truck.current_location}</p>
            <p><span>Daily Special:</span> {truck.daily_special}</p>
            <p><span>Slogan:</span> {truck.slogan}</p>
            <p><span>Has Vegan Options:</span> {truck.has_vegan_options ? "Yes ✅" : "No ❌"}</p>
            <p><span>Price Level:</span> {truck.price_level}</p>
            <p><span>Rating:</span> {truck.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
