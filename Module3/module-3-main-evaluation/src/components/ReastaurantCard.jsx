import { data } from "react-router-dom"

const RestauranrCard = ({ data, isAdmin, onDelete, onUpdate }) => (
    <div>
        <img src={data.image} width="200" />
        <h3>{data.RestaurantName}</h3>
        <p>{data.address}</p>
        <p>{data.type}</p>
        <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>
    

    {isAdmin && (
        <>
        <button onClick={() => onUpdate(data)}>Update</button>
        <button onClick={() => onDelete(data.RestaurantId)}>Delete</button>
        </>
    )}
    </div>
);