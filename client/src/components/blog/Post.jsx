import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
const Post = ({ post }) => {
  const imageUrl = `http://localhost:8000/images/post-images/${post.coverImage}`;
  return (
    <div>
      <div className="card mb-4">
        <img className="card-img-top" src={imageUrl} alt="placehold" />
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p className="card-text">{post.body.substring(0, 150)}</p>
          <Link to={`/blog/${post.slug}`} className="btn btn-primary">
            Read More →
          </Link>
        </div>
        <div className="card-footer text-muted">
          <Moment fromNow>{post.created}</Moment> by{" "}
          <a href="/#">{post.author.name}</a>
        </div>
      </div>
    </div>
  );
};

export default Post;
