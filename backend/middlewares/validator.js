const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("email", "this is not an email format").isEmail(),
  check("password", "password should be at least 6 charcters").isLength({
    min: 5,
  }),
  check("fullName", "Name is required").notEmpty(),

  check('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
}),
];

exports.loginRules = () => [
  check("email", "this field should be a valid email").isEmail(),
  check("password", "password should have at least 6 char").isLength({
    min: 5,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};