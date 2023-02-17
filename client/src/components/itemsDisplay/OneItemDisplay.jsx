import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function OneItemDisplay() {
  const { itemsId } = useParams();
  const [item, setItem] = useState(null);
  const [comment, setComment] = useState('');
  const [revRating, setRating] = useState(0);
  const [comments, setCommentss] = useState([]);
  const [reviews, setReviewss] = useState([]);

  useEffect(() => {
    getComments();
    getReviews();
  }, []);
  const getComments = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/reviews/comment/${itemsId}`);
      setCommentss(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  const getReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/reviews/rating/${itemsId}`);
      setReviewss(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handlePostComment = () => {
    axios.post(`http://localhost:3000/api/reviews/review/${itemsId}`, {
      comment: comment,
      revRating: revRating
    })
    .then(response => {
      console.log(response.data);
      setComment('');
      setRating(0);
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetch(`/items/${itemsId}`)
      .then(response => response.json())
      .then(data => setItem(data));
  }, [itemsId]);

  if (!item) {
    return <div>...loading</div>
  }

  return (
    <>
      <h1>{item.title}</h1>
      <h2>{item.quantity}</h2>
      <h2>{item.description}</h2>
        <input placeholder="add comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          />
        <input placeholder="add rating"
          type="number"
          value={revRating}
          onChange={(e) => setRating(e.target.value)}
          />
        <button onClick={() => handlePostComment(comment, revRating)}>comment</button>
          <h2>Comments:</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.comment}</li>
            ))}
      </ul>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.revRating}</li>
        ))}
      </ul>
    </>
  );
}




export default OneItemDisplay;