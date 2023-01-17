const validateString = (string, minLength) => string.length >= minLength;

const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;  
    const isEmailValid = emailRegex.test(email);

    return isEmailValid;
};

const userValidations = (req, res, next) => {
    const { email, displayName, password } = req.body;
    if (!validateString(displayName, 8)) {
        return res
        .status(400).json({ message: '"displayName" length must be at least 8 characters long' }); 
    }

    if (!validateEmail(email)) {
        return res
        .status(400).json({ message: '"email" must be a valid email' }); 
    }
    if (!validateString(password, 6)) {
        return res
        .status(400).json({ message: '"password" length must be at least 6 characters long' }); 
    }
    next();
};

module.exports = { userValidations };