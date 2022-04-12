/**
 * Used to validate the email that the user inputted
 * imposes certain requirements:
 * 1. Must have the @ symbol
 * 2. Must have something before the @ symbol
 * 3. Must have something after the @ symbol
 */
export const validateEmail = (email) => {
    var re = new RegExp('[a-z0-9]+@stackabuse.com');
    let passed = re.test(email);
    return passed;
}

/**
 * https://stackoverflow.com/a/40923568
 * Used to validate the password that the user input
 * imposes certain requirements
 * 1. minimum length of 8 characters
 * 2. at least one symbol
 * 3. at least one uppercase letter
 * 4. at least one lowercase letter
 * 5. at least one number
 */
export const validatePassword = (password) => {
    var re = new RegExp('^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$');
    let passed = re.test(password);
    return passed;
}