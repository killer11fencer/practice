const bcryptjs = require('bcryptjs')
module.exports = {
    getPostById: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.getPost(id).then(result=>res.status(200).send(result))

    },
    register: async (req,res)=> {
        const db = req.app.get('db')
        const {username} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = hashSync(req.body.password,salt)
        const user_login = await db.register({
            username,
            hash
        })
        let user_id = user_login[0]
        res.sendStatus(200)
    },
    login: async (req,res)=> {
        const db = req.app.get('db')
        const {username} = req.body
        const {session} = req
        try {
            let user = await db.login({username})

            session.user = user[0]
            const authenticated = bcrypt.compareSync(req.body.password,user[0].password)
            session.user.authenticated = authenticated

            if(authenticated){console.log(session)
            res.status(200).send({authenticated,id:user[0].id,admin: user[0].admin})
            } else { throw new Error(404,'error')}
        } catch(err) {res.sendStatus(401)}

    }
}