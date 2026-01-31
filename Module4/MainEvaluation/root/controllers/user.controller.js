import supabase from "../config/supabase";

export const signup = async (req, res) => {
    try{
        const { name, email, password, role } = req.body;
        if (!['customer','owner','driver'].includes(roles)) {
            return res.status(400).json({ message: "Invalid role" })
        }
        const { error } = await supabase
        .from('users')
        .insert([{ name, email, password, role }])  

        if (error) throw error
        res.status(201).json({ message: "User created successfully" })
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }
