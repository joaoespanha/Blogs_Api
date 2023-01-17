const loginValidations = (req, res, next) => {
    const { email, password } = req.body;

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;  
    const isEmailValid = emailRegex.test(email);  

    if (!isEmailValid || !password) { 
        return res.status(400).json({ message: 'Some required fields are missing' }); 
    }
    next();
};

module.exports = { loginValidations };