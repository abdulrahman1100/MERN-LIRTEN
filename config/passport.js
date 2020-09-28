
 const JwtStrategy = require('../node_modules/passport-jwt/lib').Strategy
 const ExtractJwt = require('../node_modules/passport-jwt/lib').ExtractJwt
 const User = require('../models/User.js');
 const tokenKey = require('./keys').secretOrKey

 let opts = {};
 opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
 opts.secretOrKey = tokenKey

 module.exports = passport => {
     passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
        const currentUser = await User.findById(jwtPayload.id)
        if(currentUser) return done(null,currentUser)
        return done(null,false)
     }))
 }