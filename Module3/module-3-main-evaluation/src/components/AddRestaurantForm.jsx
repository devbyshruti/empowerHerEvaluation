import { useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/LocalStorage";

const AddRestaurantForm = ({ refresh }) => {
    const [form, setForm] = useState({
        restaurantName: "1135 AD",
        address: "Jaipur, Amber Fort, Rajasthan",
        type: "Rajasthani",
        parkingLot: "true",
        Image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
    });

    const handleAdd = () => {
        if (!form.restaurantName || !form.address) {
            alert("All fields required");
            return;
        }

        const data = getRestaurants();
        const newRestaurant = {
            ...form,
            restaurantID: Date.now(),
            parkingLot: form.parkingLot === "true",
        };

        saveRestaurants([...data, newRestaurant]);
        alert("Restaurant added successfully");
        refresh();

        setForm({ ...form, restaurantName: "", address: ""});
    };

    return (
        <div>
            <input 
            placeholder="Name"
            value={form.restaurantName}
            onChange={(e) => 
                setForm({ ...form, restaurantName: e.target.value })
            }
            />
            <input 
            placeholder="Address"
            value={form.address}
            onChange={(e) => 
                setForm({ ...form, address: e.target.value })
            }
            />

            <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value})}
            >
                {[
                    "Rajasthani",
                     "Gujarati",
                    "Mughlai",
                    "Jain",
                    "Thai",
                    "North Indian",
                    "South Indian",
                ].map((t) => (
                    <option key={t}>{t}</option>
                ))} 
                </select>

                <select
                value={form.parkingLot}
                onChange={(e) => setForm({ ...form, parkingLot: e.target.value })}
                >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    </select>

                    <button onClick={handleAdd}>Add</button>
        </div>
    );
};
export default AddRestaurantForm;