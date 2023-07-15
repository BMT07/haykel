const isAdmin = (req, res, next) =>{
    console.log(req.user)
    if(req.user.role=="admin") { next() }

    else {
res.status(401).send("You're not authorized")
    }

}

module.exports = isAdmin