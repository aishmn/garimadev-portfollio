import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getAllJobs } from "../../redux/action/resume.actions";
import Moment from "react-moment";

const Resume = ({ resume: { jobs, loading }, getAllJobs }) => {
  useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);

  return (
    <div id="main">
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
          </div>
          <div className="row">
            {jobs
              ? jobs.map((job) => (
                  <div className="col-lg-6">
                    <div className="resume-item pb-0">
                      <h4>
                        {job.post} at{" "}
                        <strong className="text-danger">{job.company}</strong>
                      </h4>
                      <p>
                        <em>{job.description}</em>
                      </p>

                      <ul>
                        <li>
                          Started on
                          <Moment parse="YYYY/MM/DD" format="MMM YYYY">
                            {" "}
                            {job.start_date}
                          </Moment>
                        </li>
                        <li>
                          {job.end_date ? (
                            <Fragment>
                              <span>Quited on</span>
                              <Moment parse="YYYY/MM/DD" format="MMM YYYY">
                                {job.end_date}
                              </Moment>
                            </Fragment>
                          ) : (
                            "Currently Working Here"
                          )}
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  resume: state.resume,
});

export default connect(mapStateToProps, { getAllJobs })(Resume);
