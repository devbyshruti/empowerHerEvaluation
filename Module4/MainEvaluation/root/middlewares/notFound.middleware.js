const notFound = (req, res) => {
    res.status(404).send("This request is not found")
}

export default notFound;