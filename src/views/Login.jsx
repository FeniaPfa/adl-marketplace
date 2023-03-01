import { useState } from 'react';
import { login } from '../config/firebase';
import { useUserContext } from '../context/userContext';

export const Login = () => {
  const { user } = useUserContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login({ email, password });
        } catch (err) {
            console.log(err, err.message, err.code);
        }
    };
    return (
        <>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {user ? user.email : 'none'}
        </>
    );
};
