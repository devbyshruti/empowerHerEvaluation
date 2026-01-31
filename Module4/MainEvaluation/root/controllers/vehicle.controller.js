import supabase from "../config/supabase.js";

export const addvehicle = async (req, res) => {
    try {
        const {
            owner_id,
            name,
            registration_number,
            allowed_passengers,
            rate_per_km
        } = req.body

        const { data: owner } = await supabase
        .from('users')
        .select('role')
        .eq('id', owner_id)
        .single()

        if (!owner || owner.role !== 'owner') {
            return res.status(403).json({ message: "Only owners can add vahicles" })
        }

        const { error } = await supabase.from('vehicles').insert([{
            name,
            registration_number,
            allowed_passengers,
            rate_per_km,
            owner_id
        }])

        if (error) throw error

        res.status(201).json({ message: "Vehicle added successfully" })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}