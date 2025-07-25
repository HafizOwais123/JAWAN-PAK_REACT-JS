

import React, { useState } from 'react';
import styles from './AuthForm.module.css';
import { validateForm } from './validate'; // ← new import

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [errors, setErrors] = useState({});

  const toggleMode = () => {
    setIsSignUp(prev => !prev);
    setFormData({ email: '', password: '', name: '' });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    const newErrors = validateForm(newFormData, isSignUp);
    setErrors(newErrors);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validateForm(formData, isSignUp);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert(`${isSignUp ? 'Signing up' : 'Signing in'} with ${formData.email}`);
    }
  };

  return (
    <div className={styles.authWrap}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
        {isSignUp && (
          <div className={styles.field}>
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
        )}
        <div className={styles.field}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        <button type="submit" className={styles.btn}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
        <p className={styles.toggle}>
          {isSignUp ? 'Already have an account?' : "Don't have one?"}{' '}
          <span onClick={toggleMode}>{isSignUp ? 'Sign In' : 'Sign Up'}</span>
        </p>
      </form>
    </div>
  );
}
