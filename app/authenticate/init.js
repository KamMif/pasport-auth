const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const user = {
	id: 1,
	username: 'test-user',
	password: 'my-password',
};

passport.use(new LocalStrategy(
	 (name, passport, done) => {
			findUser(username, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false)
			}
			if (password !== user.password) {
				return done(null, false)
			}
			return done(null, user)
		})
	}
));
