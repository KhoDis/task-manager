import React, { useState } from 'react';
import { useSignupMutation } from '../services/api';
import { useRouter } from 'next/router';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signup] = useSignupMutation();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup({ username, password });
    await router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;