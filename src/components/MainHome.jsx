import React from 'react';
import NavMain from './NavMain';

const MainHome = () => {
  return (
    <div>
      {/* Navbar */}
      <NavMain />

      {/* Hero Section */}
      <section className="hero bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Cognitive Mental Wellness</h1>
          <p className="lead">
            Your journey to better mental health starts here. Discover mood analysis, personalized resources, and track your progress.
          </p>
          <a href="#moodAnalysis" className="btn btn-primary btn-lg">Start Now</a>
        </div>
      </section>

      {/* Mood Analysis Section */}
      <section id="moodAnalysis" className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Mood Analysis</h2>
          <p className="lead">Understand your mood and get personalized recommendations to improve your mental wellness.</p>
          {/* Mood Input/Form */}
          <div className="input-group">
            <textarea
              className="form-control"
              placeholder="Tell us how you're feeling today..."
              rows="4"
            ></textarea>
            <button className="btn btn-success">Analyze Mood</button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Mental Wellness Resources</h2>
          <div className="row">
            {/* Example Resource Card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="Resource 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Meditation Exercises</h5>
                  <p className="card-text">Learn the best meditation techniques to reduce stress and anxiety.</p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            {/* More resources can be added here */}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Track Your Progress</h2>
          <p className="lead">Stay on track with your mental wellness journey. View your mood trends and progress over time.</p>
          {/* Progress Tracking (could be a chart, table, or timeline) */}
          <div className="progress" style={{ height: '30px' }}>
            <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75% Progress</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">What Users Say</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial">
                <p className="lead">"This app has helped me so much in understanding my emotions and finding ways to improve my mental health."</p>
                <p className="fw-bold">- User A</p>
              </div>
            </div>
            {/* More testimonials can go here */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2025 Cognitive Mental Wellness. All Rights Reserved.</p>
          <a href="#privacy" className="text-white">Privacy Policy</a> | <a href="#terms" className="text-white">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default MainHome;
