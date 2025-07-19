export const validateForm = (formData, isSignUp) => {
  const errors = {};

  if (isSignUp && !formData.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!formData.password.trim()) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Minimum 6 characters';
  }

  return errors;
};
