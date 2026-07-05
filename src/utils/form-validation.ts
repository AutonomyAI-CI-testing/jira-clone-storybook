/**
 * Validates email format using a basic regex pattern
 * @param email - Email address to validate
 * @returns true if email is valid, false otherwise
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates password strength
 * @param password - Password to validate
 * @returns true if password meets minimum requirements, false otherwise
 */
export const validatePassword = (password: string): boolean => {
  // Minimum 8 characters
  return password.length >= 8;
};

/**
 * Gets error message for email validation
 * @param email - Email address to validate
 * @returns Error message or empty string if valid
 */
export const getEmailError = (email: string): string => {
  if (!email) {
    return "Email is required";
  }
  if (!validateEmail(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

/**
 * Gets error message for password validation
 * @param password - Password to validate
 * @returns Error message or empty string if valid
 */
export const getPasswordError = (password: string): string => {
  if (!password) {
    return "Password is required";
  }
  if (!validatePassword(password)) {
    return "Password must be at least 8 characters";
  }
  return "";
};
