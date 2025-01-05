// custom-pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const MealFinder = () => {
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios.get('/meals?search=').then(response => {
            console.log(response.data.data);
            setMeals(response.data.data);
        });
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const searchMeal = () => {
        axios.get('/meals?search='+search).then(response => {
            console.log(response.data.data);
            setMeals(response.data.data);
        });
    }

    return (
        <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content">
            Welcome to Meal Finder!
            <br />
            <input type="text" value={search} onChange={handleSearch}/><br />
            <button onClick={searchMeal}>Search</button>
            <br />

            {meals.map(meal => (
                <div>
                    <h1>{meal.name}</h1>
                </div>
            ))}
        </div>
        </div>
    );
};

export default MealFinder;
