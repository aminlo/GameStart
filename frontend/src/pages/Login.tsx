import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login for MVP
        login('mock-token', { id: 1, username: 'TestUser', email });
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="card w-96 bg-base-200 shadow-xl border border-gray-700">
                <div className="card-body">
                    <h2 className="card-title justify-center mb-4 text-white">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input input-bordered bg-gray-800 text-white" required />
                        </div>
                        <div className="form-control mt-4">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="input input-bordered bg-gray-800 text-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
