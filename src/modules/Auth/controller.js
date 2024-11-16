import dotenv from 'dotenv';
import loginService from './methods/login';
import registerService from './methods/register';

dotenv.config();

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await registerService({ email, password });
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService({ email, password });
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
