import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllJobs } from "../../redux/action/resume.actions";
import PropTypes from "prop-types";
import Spinner from "../../components/layout/Spinner";
import Moment from "react-moment";

const AllResume = ({ getAllJobs, resume: { jobs } }) => {
  useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Post</th>
          <th scope="col">Company</th>
          <th scope="col">Description</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs === null ? (
          <Spinner />
        ) : (
          jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.post}</td>
              <td>{job.company}</td>
              <td>{job.description.substring(0, 60)}</td>

              <td>
                <Moment format="YYYY/MM/DD">{job.start_date}</Moment>{" "}
              </td>
              <td>
                {job.end_date ? (
                  <Moment format="YYYY/MM/DD">{job.end_date}</Moment>
                ) : (
                  "Current Job"
                )}
              </td>
              <td className="btn">
                <i
                  className="fa fa-times-circle text-danger fa-lg"
                  aria-hidden="true"
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
AllResume.propTypes = {
  getAllJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  resume: state.resume,
});
export default connect(mapStateToProps, { getAllJobs })(AllResume);
