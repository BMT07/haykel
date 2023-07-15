const isVolunteer = (req, res, next) =>{
    if(req.body.role=="admin") { return res.status(401).send("you couldn't be admin ") }

    else {
next()    }

}

module.exports = isVolunteer