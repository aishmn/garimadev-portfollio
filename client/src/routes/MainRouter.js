import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home/Home";
import Alert from "../components/alert/Alert";
import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import BlogHome from "../pages/blog/BlogHome";
import Resume from "../pages/resume/Resume";
import Contact from "../pages/contact/Contact";
import AdminRoute from "./AdminRoute";
import Admin from "../pages/admin/Admin";
import AllBlog from "../pages/admin/AllBlog";
import AllResume from "../pages/admin/AllResume";
import CreateBlog from "../pages/admin/CreateBlog";
import BlogDetail from "../pages/blog/BlogDetail";
import CreateCategory from "../pages/admin/CreateCategory";
import AllCategory from "../pages/admin/AllCategory";
import EditInfo from "../pages/admin/EditInfo";
import CreateJob from "../pages/admin/CreateJob";

const MainRouter = () => {
  return (
    <Fragment>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/blog" component={BlogHome} />
        <Route exact path="/blog/:slug" component={BlogDetail} />
        <Route exact path="/resume" component={Resume} />
        <AdminRoute exact path="/admin/create-resume" component={CreateJob} />
        <Route exact path="/contact" component={Contact} />
        <AdminRoute exact path="/admin" component={Admin} />
        <AdminRoute exact path="/admin/all-blog" component={AllBlog} />
        <AdminRoute exact path="/admin/create-blog" component={CreateBlog} />
        <AdminRoute exact path="/admin/all-resume" component={AllResume} />
        <AdminRoute
          exact
          path="/admin/create-category"
          component={CreateCategory}
        />
        <AdminRoute exact path="/admin/all-category" component={AllCategory} />
        <AdminRoute exact path="/admin/edit-info" component={EditInfo} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default MainRouter;
