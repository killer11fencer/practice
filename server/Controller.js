module.exports = {
    getPostById: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.getPost(id).then(result=>res.status(200).send(result))

    },
    addPost:(req,res)=> {
        const db = req.app.get('db')
        const {username,} = req.body
    }
}