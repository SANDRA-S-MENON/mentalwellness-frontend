import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold">🧠 Cognitive Wellness</h2>
      <p className="text-center text-muted">Choose your login type</p>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Login Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Admin</td>
            <td>
              <button className="btn btn-secondary" onClick={() => navigate('/admin-login')}>
                Admin Login
              </button>
            </td>
          </tr>
          <tr>
            <td>User</td>
            <td>
              <button className="btn btn-primary" onClick={() => navigate('/signin')}>
                User Login
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
