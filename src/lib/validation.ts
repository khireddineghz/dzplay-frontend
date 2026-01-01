// Validation utilities for form inputs

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true };
};

/**
 * Validate password strength
 */
export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }

  if (password.length < 8) {
    return {
      isValid: false,
      error: 'Password must be at least 8 characters long',
    };
  }

  // Check for at least one letter and one number
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (!hasLetter || !hasNumber) {
    return {
      isValid: false,
      error: 'Password must contain at least one letter and one number',
    };
  }

  return { isValid: true };
};

/**
 * Validate Algerian phone number
 */
export const validatePhoneNumber = (phone: string): ValidationResult => {
  if (!phone) {
    return { isValid: false, error: 'Phone number is required' };
  }

  // Remove spaces and any non-digit characters except +
  const cleanPhone = phone.replace(/[\s-]/g, '');

  // Algerian phone numbers: +213 followed by 9 digits
  // Can also accept 0 followed by 9 digits (local format)
  const phoneRegex = /^(\+213|0)[5-7][0-9]{8}$/;

  if (!phoneRegex.test(cleanPhone)) {
    return {
      isValid: false,
      error: 'Please enter a valid Algerian phone number',
    };
  }

  return { isValid: true };
};

/**
 * Validate full name
 */
export const validateFullName = (name: string): ValidationResult => {
  if (!name) {
    return { isValid: false, error: 'Full name is required' };
  }

  if (name.trim().length < 2) {
    return {
      isValid: false,
      error: 'Full name must be at least 2 characters long',
    };
  }

  // Check if name contains at least two words (first name and last name)
  const words = name.trim().split(/\s+/);
  if (words.length < 2) {
    return {
      isValid: false,
      error: 'Please enter your full name (first and last name)',
    };
  }

  return { isValid: true };
};

/**
 * Validate identifier (email or phone)
 */
export const validateIdentifier = (identifier: string): ValidationResult => {
  if (!identifier) {
    return { isValid: false, error: 'Email or phone number is required' };
  }

  // Check if it's an email
  if (identifier.includes('@')) {
    return validateEmail(identifier);
  }

  // Otherwise, treat it as a phone number
  return validatePhoneNumber(identifier);
};

/**
 * Format phone number for display (add spaces)
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // If it starts with +213
  if (cleaned.startsWith('+213')) {
    const number = cleaned.substring(4);
    if (number.length === 9) {
      return `+213 ${number.substring(0, 1)} ${number.substring(1, 3)} ${number.substring(3, 5)} ${number.substring(5, 7)} ${number.substring(7, 9)}`;
    }
  }
  
  // If it starts with 0
  if (cleaned.startsWith('0')) {
    const number = cleaned.substring(1);
    if (number.length === 9) {
      return `0${number.substring(0, 1)} ${number.substring(1, 3)} ${number.substring(3, 5)} ${number.substring(5, 7)} ${number.substring(7, 9)}`;
    }
  }
  
  return phone;
};

/**
 * Normalize phone number to +213 format
 */
export const normalizePhoneNumber = (phone: string): string => {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // If already starts with +213, return as is
  if (cleaned.startsWith('+213')) {
    return cleaned;
  }
  
  // If starts with 0, replace with +213
  if (cleaned.startsWith('0')) {
    return '+213' + cleaned.substring(1);
  }
  
  // If it's just 9 digits, add +213
  if (cleaned.length === 9) {
    return '+213' + cleaned;
  }
  
  return cleaned;
};
