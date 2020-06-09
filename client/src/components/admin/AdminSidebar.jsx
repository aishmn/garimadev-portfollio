import React from "react";
import { Link } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div className="card p-2 rounded-0 bg-dark text-light">
      <h3 className="lead">ADMIN PAGE</h3>

      <ul className="list-group ">
        <span className="lead pt-2 pb-1">General</span>
        <li className="list-group-item">
          <Link to="/admin/edit-info">Edit Info</Link>
        </li>
      </ul>
      <ul className="list-group ">
        <span className="lead pt-2 pb-1">Blogs</span>
        <li className="list-group-item">
          <Link to="/admin/all-blog">All Blogs</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/create-blog">Create Blog</Link>
        </li>
      </ul>
      <ul className="list-group ">
        <span className="lead pt-2 pb-1">Category</span>
        <li className="list-group-item">
          <Link to="/admin/all-category">All Categories</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/create-category">Create Category</Link>
        </li>
      </ul>
      <ul className="list-group ">
        <span className="lead pt-2 pb-1">Resume</span>

        <li className="list-group-item">
          <Link to="/admin/all-resume">All Resumes</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/create-resume">Create Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
