import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBlogBySlug } from "../../redux/action/blog.actions";
import Spinner from "../../components/layout/Spinner";
import Moment from "react-moment";
import PropTypes from "prop-types";
const BlogDetail = ({ getBlogBySlug, match, blog: { loading, blog } }) => {
  useEffect(() => {
    getBlogBySlug(match.params.slug);
  }, [getBlogBySlug, match.params.slug]);

  if (blog === null) return <Spinner />;

  if (loading && blog === null) {
    return <Spinner />;
  }
  const imageUrl = `http://localhost:8000/images/post-images/${blog.coverImage}`;
  return (
    <div className="">
      <div className="card ">
        <div className="text-center card-body">
          <div className="card mb-3">
            <img src={imageUrl} className="card-img-top" alt={blog.title} />
            <div className="card-body">
              <h5 className="card-title">{blog.tilte}</h5>
              <p className="card-text lead">{blog.body}</p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  <Moment fromNow>{blog.created}</Moment>
                </small>{" "}
                <small className="text-muted">
                  by -{" "}
                  <strong className="text-primary">{blog.author.name}</strong>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
BlogDetail.propTypes = {
  blog: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  blog: state.blog,
});
export default connect(mapStateToProps, { getBlogBySlug })(BlogDetail);
