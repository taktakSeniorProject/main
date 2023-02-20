import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

function OneItemDisplay() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [comment, setComment] = useState('');
  const [revRating, setRating] = useState(0);
  const [comments, setCommentss] = useState([]);
  const [reviews, setReviewss] = useState([]);
  const [commentsView,setCommentView]=useState(false)
  const [view,setView]=useState(false)
const [index,setIndex]=useState(0)  
const [refresh,setRefresh]=useState(false)
 
  useEffect(() => {
    getComments();
    getReviews();
  }, [refresh]);

  const getComments = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/reviews/comment/${location.state.user_id}`);
      setCommentss(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleAddWhishlist= ()=>{
try{
  axios.post(`http://localhost:3000/api/item/whishlist/${location.state.user_id}/${location.state.id}`).then((result)=>{console.log(result)})
}
catch(error){
console.log(error);
}
  }
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
      const response = await axios.get(`http://localhost:3000/api/reviews/rating/${location.state.user_id}`);
      setReviewss(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlePostComment = () => {
    axios.post(`http://localhost:3000/api/reviews/review/${location.state.user_id}`, {
      comment: comment,
      revRating: revRating
    })
    .then(response => {
      console.log(response.data);
      getReviews();
      setRefresh(!refresh) // update the reviews array after a new review is posted
    })
    .catch(error => {
      console.log(error);
    });
  }

  const handleCommentView=()=>{
    setCommentView(!commentsView)
  }
  if (!location.state) {
    return <div>...loading</div>;
  }

  // Calculate the average rating
  const averageRating =
    reviews.reduce((total, review) => total + review.revRating, 0) /
    reviews.length;
  return (
    <>
     <div className="product-box">
    <h1 className='item-card__title'>{location.state.title}</h1>
    <img className='item-card__image' src= {location.state.img[index]}/>
    {console.log(index)}
    </div>
    <button onClick={()=>setIndex(index+1)}>next</button>
    <button onClick={()=>setIndex(index-1)}>previous</button>
    <h2 className='item-card__price'>
      <span className="item-card__price--old">${location.state.price}</span>
      <span className="item-card__price--new">${(location.state.price * 0.8).toFixed(2)}</span>
    </h2>
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
      <button onClick={() => {handlePostComment(comment, revRating)}}>comment</button>
      
      
      <button onClick={()=>handleCommentView()}>show comments</button>
      {commentsView===true && 
      <div>
       <h2>Comments:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.comments}</li>
        ))}
      </ul>
      </div>
      }
      <h2>Reviews:</h2>
      
    {view ===true &&  <div>
        {reviews.map((review, index) => (
                    <div>{starRating(review.revRating)}</div>

        ))}
      </div>
}
        <div>Average rating: {starRating(averageRating)}</div>
       <h2>Share:</h2>
      
      <FacebookShareButton url={'https://twitter.com/home?lang=en'} className='share-button--facebook'>
      <BsFacebook/>
      </FacebookShareButton>
      <TwitterShareButton url={'https://twitter.com/home?lang=en'} className='share-button--twitter'>
      <AiOutlineTwitter/>
      </TwitterShareButton>

      <button onClick={()=>{
            navigate('/')}} >back to home page</button>
            <button onClick={()=>handleAddWhishlist()}> add to  wishlist</button>
    </>
  );
}

export default OneItemDisplay;
