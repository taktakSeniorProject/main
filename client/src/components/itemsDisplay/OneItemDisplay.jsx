import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
function OneItemDisplay() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { itemsId } = useParams();
  const [comment, setComment] = useState("");
  const [revRating, setRating] = useState(0);
  const [comments, setCommentss] = useState([]);
  const [reviews, setReviewss] = useState([]);
  const [view, setView] = useState(false);
  useEffect(() => {
    getComments();
    getReviews();
  }, []);
  const getComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/reviews/comment/${location.state.id}`
      );
      setCommentss(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const starRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="star">
            <AiFillStar />
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            <AiOutlineStar />
          </span>
        );
      }
    }
    return stars;
  };
  const getReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/reviews/rating/${location.state.id}`
      );
      setReviewss(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePostComment = () => {
    axios
      .post(`http://localhost:3000/api/reviews/review/${location.state.id}`, {
        comment: comment,
        revRating: revRating,
      })
      .then((response) => {
        console.log(response.data);
        getReviews(); // update the reviews array after a new review is posted
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (!location.state) {
    return <div>...loading</div>;
  }
  // Calculate the average rating
  const averageRating =
    reviews.reduce((total, review) => total + review.revRating, 0) /
    reviews.length;
  return (
    <>
      <h1>{location.state.title}</h1>
      {/* <img src= {location.state.img}/> */}
      <h2>{location.state.description}</h2>
      <img src={location.state.img} alt="" srcset="" />
      <input
        placeholder="add comment"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <select value={revRating} onChange={(e) => setRating(e.target.value)}>
        <option value="1">1 stars</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      <button onClick={() => handlePostComment(comment, revRating)}>
        comment
      </button>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.comments}</li>
        ))}
      </ul>
      <h2>Reviews:</h2>
      {view === true && (
        <div>
          {reviews.map((review, index) => (
            <div>{starRating(review.revRating)}</div>
          ))}
        </div>
      )}
      <div>Average rating: {starRating(averageRating)}</div>
      <h2>Share:</h2>
      <FacebookShareButton url={"https://twitter.com/home?lang=en"}>
        Share on Facebook
      </FacebookShareButton>
      <TwitterShareButton url={"https://twitter.com/home?lang=en"}>
        Share on Twitter
      </TwitterShareButton>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back to home page
      </button>
    </>
  );
}
export default OneItemDisplay;
