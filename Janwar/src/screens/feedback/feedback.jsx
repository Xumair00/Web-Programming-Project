import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFeedbackPage = styled.div`
  .feedback-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px; /* Add margin-top to center the form vertically */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box shadow for visual depth */
  }

  .form-input {
    margin-bottom: 15px;
  }

  .form-label {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .form-input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }

  .star-rating {
    font-size: 24px;
    cursor: pointer;
    color: #ccc;
    transition: color 0.2s ease-in-out;
  }

  .star-rating.active,
  .star-rating:hover {
    color: #f7d32e; /* Golden color */
  }

  .feedback-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const FeedbackPage = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hoveredRating, setHoveredRating] = useState(null);
  const [clickedStar, setClickedStar] = useState(null);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
    setClickedStar(index);
  };

  const handleMouseLeave = () => {
    if (rating === 0) {
      setClickedStar(null); // Reset clickedStar when no star is selected
    }
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`star-rating ${index < rating ? 'active' : ''}`}
      onMouseEnter={() => setRating(index + 1)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleStarClick(index)}
    >
      ★
    </span>
  ));

  return (
    <StyledFeedbackPage>
      <div className="feedback-form">
        <h2 className="text-2xl font-bold mb-4">Feedback</h2>
        <form>
          <div className="form-input">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input-field"
            />
          </div>
          <div className="form-input">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input-field"
            />
          </div>
          <div className="form-input">
            <label htmlFor="rating" className="form-label">Rating</label>
            <div className="flex">
              {stars}
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="feedback" className="form-label">Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="form-input-field"
            />
          </div>
          <button type="submit" className="feedback-button">Submit</button>
        </form>
      </div>
    </StyledFeedbackPage>
  );
};

export default FeedbackPage;
