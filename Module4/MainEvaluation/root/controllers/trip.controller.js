import supabase from "../config/supabase.js";

export const endTrip = async (req, res) => {
    try{
        const { tripId } = req.params

        const { data: trip } = await supabase
        .from('trips')
        .select('distance_km, vehicle_id')
        .eq('id', tripId)
        .single()

        const { data: vehicle } = await supabase
        .from('vehicles')
        .select('rate_per_km')
        .eq('id', trip.vehicle_id)
        .single()

        const tripCost = trip.distance_km * vehicle.rate_per_km

        await supabase
        .from('trips')
        .update({ isCompleted: true, tripCost })
        .eq('id', tripId)

         await supabase
        .from('vehicles')
        .update({ isAvailable: true })
        .eq('id', trip.vehicle_id)
        
        res.json({ message: "Trip Completed", tripCost })

    } catch (err) {
        res.status(400).json({ error: err.message})
    }
}