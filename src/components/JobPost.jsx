import { CiLocationOn } from "react-icons/ci";
import { FaCoins, FaAtlassian } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { TbUserCheck } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

import Avatar from '../assets/Avatar.png'

const JobDetails = () => {
  return (
    <main classname="job_details">
      <section className="options">
        <p>Job Preview </p>
        <p>Applicants</p>
        <p>Match</p>
        <p>Messages</p>
      </section>
      <div className="wrapper_container">
        <section>
          <div className="job_designation">
            <p className="job_role">Senior Product Designer</p>
            <p className="job_date_posted">Posted 2 days ago</p>
            <button className="job_status">&#x2022; Open</button>
          </div>
          <section className="job_location_and_salary">
            <div className="job_location">
              <CiLocationOn className="icon" />
              <p>Delaware, USA</p>
            </div>
            <div className="job_salary">
              <FaCoins className="icon" />
              <p>$300k-$400k</p>
            </div>
          </section>
          <section className="job_overview">
            <p>About the job</p>
            <ol>
              <li>Handle the UI/UX research design</li>
              <li>
                Work on researching on latest web applications designs & trends
              </li>
              <li>Work on conceptualizing and visualizing</li>
              <li>
                Work on creating graphics content and other graphic related
                works
              </li>
            </ol>
            <p>Benefits</p>
            <ul>
              <li>Health Insurance</li>
              <li>Provident Fund</li>
            </ul>
            <p>Schedule</p>
            <ul>
              <li>Day Shift</li>
            </ul>
            <p>Supplemental Pay Types</p>
            <ul>
              <li>Performance Bonus...</li>
            </ul>
          </section>
          <section className="flex_container">
            <div className="company_details">
              <FaAtlassian className="company_icon" />
              <p className="company_name">Atlassian</p>
              <button className="btn_follow">Follow</button>
            </div>
            <div className="flex_wrapper">
              <div className="wrapper_one">
                <li>
                  <ul>
                    <li>Company size</li>
                    <li>1k - 2k Employees</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>Sector</li>
                    <li>Information Technology</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>Founded in</li>
                    <li>2019</li>
                  </ul>
                </li>
              </div>
              <div className="wrapper_two">
                <li>
                  <ul>
                    <li>Type</li>
                    <li>Private</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>Funding</li>
                    <li>Bootstrapped</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>Founded By</li>
                    <li>Scott Farquhar, Mike Cannon-Brookes</li>
                  </ul>
                </li>
              </div>
            </div>
          </section>
        </section>
        <aside>
          <div className="btns_wrapper">
            <button className="btn_delete">
              <RiDeleteBin6Line /> Delete job
            </button>
            <button className="btn_edit">
              <MdOutlineEdit /> Edit Job
            </button>
          </div>
          <ul className="job_post_details">
            <li>
              <p>
                <GoPeople className="icon" />
                Applicants
              </p>
              <p>400</p>
            </li>
            <hr />
            <li>
              <p>
                <TbUserCheck className="icon"/>
                Matches
              </p>
              <p>100</p>
            </li>
            <hr />
            <li>
              <p>
                <FiMessageSquare className="icon" />
                Messages
              </p>
              <p>147</p>
            </li>
            <hr />
            <li>
                <p>
                  <IoEyeOutline className="icon" />
                  Views
                </p>
                <p>800</p>
            </li>
          </ul>
          <div className="job_post_company_quote">
            <p>“A quote from a Atlassian.”</p>
            <div className="job_poster">
                <img src={Avatar} alt="avatar-image" />
                <ul>
                    <li className="job_poster_name">Name</li>
                    <li className="job_poster_description">Description</li>
                </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default JobDetails;
