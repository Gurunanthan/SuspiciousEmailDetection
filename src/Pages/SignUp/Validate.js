// validator.js
const validateSignUp = (data) => {
    const errors = {};

    if (!data.name.trim()) {
        errors.name = "Name is required";
    }

    if (!data.email.trim()) {
        errors.email = "Email is required";
    }

    if (!data.phoneNumber.trim()) {
        errors.phoneNumber = "Phone number is required";
    }

    if (!data.password.trim()) {
        errors.password = "Password is required";
    } else if (data.password.length < 8 || !/\d{4,}/.test(data.password)) {
        errors.password = "Password must be at least 8 characters with 4 numbers";
    }

    if (data.password !== data.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
};

export { validateSignUp };
