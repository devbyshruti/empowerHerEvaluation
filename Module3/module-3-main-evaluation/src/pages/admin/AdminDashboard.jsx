import { useEffect, useState } from "react";
import AddRestaurantForm from "../../components/AddRestaurantForm";
import RestaurantCard from "../../components/ReastaurantCard"
import { getRestaurants, saveRestaurants } from "../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"


const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const navigate= useNavigate();

    
}