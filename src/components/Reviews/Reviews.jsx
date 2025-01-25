import React from "react";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    author: "Krystal Kotuiski",
    rating: 5,
    date: "4 months ago",
    content:
      "We worked with Oneupweb for a complete website redesign and they were fantastic! It was a pleasure to have meetings and brainstorm ideas with such an awesome team. They understood our vision and executed it perfectly! Would highly recommend working with OUW for any of your web design and marketing needs.",
    initials: "K",
  },
  {
    id: 2,
    author: "Diana Lovshe",
    rating: 5,
    date: "3 months ago",
    content:
      "Very knowledgeable and professional. They have helped us to identify optimization opportunities through several extensive audits. Highly recommend!",
    initials: "D",
  },
  {
    id: 3,
    author: "BJStreby",
    rating: 5,
    date: "6 months ago",
    content:
      "It has been a wonderful experience working with our team at Oneupweb. The entire process has been a pleasure.",
    initials: "B",
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <>
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="company-info">
            <h1>Student's Job</h1>
            <p className="address">Belarus, Minsk, 220010</p>
            <div className="rating-info">
              <div className="rating-score">5.0</div>
              <StarRating rating={5} />
              <span className="review-count">3 reviews</span>
            </div>
          </div>
          <div className="write-sort-review">
            <button className="write-review-btn">Write a review</button>
            <div className="sort-container">
              <label className="sort-label">
                Sort by:
                <select className="sort-select">
                  <option>Most helpful</option>
                  <option>Most recent</option>
                  <option>Highest rating</option>
                  <option>Lowest rating</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-avatar">
                <span>{review.initials}</span>
              </div>
              <div className="review-content">
                <div className="review-author">
                  <h3>{review.author}</h3>
                  <div className="review-meta">
                    <StarRating rating={review.rating} />
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <p className="review-text">{review.content}</p>
                <div className="review-actions">
                  <button className="action-button">Reply</button>
                  <button className="action-button">Helpful?</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
