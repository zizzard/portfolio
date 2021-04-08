import "./Coursework.css";

import React from "react";
import CourseworkItem from "../CourseworkItem/CourseworkItem";

function Coursework() {
  return (
    <>
      <div className="coursework-semester">
        <CourseworkItem
          title={"CSCI 420: Computer Graphics"}
          semester={"Spring 2021"}
        />
        <CourseworkItem
          title={"DES 302: Design III"}
          semester={"Spring 2021"}
        />
        <CourseworkItem
          title={"DES 323: Design Theory"}
          semester={"Spring 2021"}
        />
      </div>

      <div className="coursework-semester">
        <CourseworkItem title={"DES 202: Design II"} semester={"Fall 2020"} />
        <CourseworkItem
          title={"DES 313: Graphic Design in Fashion"}
          semester={"Fall 2020"}
        />
        <CourseworkItem
          title={"DES 332B: Typography II"}
          semester={"Fall 2020"}
        />
        <CourseworkItem
          title={"CSCI 401: Design and Construction of Large Software Systems"}
          semester={"Fall 2020"}
        />
        <CourseworkItem
          title={"ITP 404: Advanced Front-End Web Development"}
          semester={"Fall 2020"}
        />
      </div>

      <div className="coursework-semester">
        <CourseworkItem
          title={"CSCI 350: Operating Systems"}
          semester={"Summer 2020"}
        />
      </div>

      <div className="coursework-semester">
        <CourseworkItem
          title={"DES 102: Design Fundamentals"}
          semester={"Spring 2020"}
        />
        <CourseworkItem
          title={"DES 332A: Typography I"}
          semester={"Spring 2020"}
        />
        <CourseworkItem
          title={"CSCI 310: Software Engineering"}
          semester={"Spring 2020"}
        />
        <CourseworkItem
          title={"EE 364: Introduction to Probability and Statistics"}
          semester={"Spring 2020"}
        />
      </div>

      <div className="coursework-semester">
        <CourseworkItem
          title={"DES 203: Digital Tools for Design"}
          semester={"Fall 2019"}
        />
        <CourseworkItem
          title={"CSCI 356: Introduction to Computer Systems"}
          semester={"Fall 2019"}
        />
        <CourseworkItem
          title={"CSCI 360: Introduction to Artificial Intelligence"}
          semester={"Fall 2019"}
        />
      </div>

      <div className="coursework-semester">
        <CourseworkItem
          title={"CSCI 430: Introduction to Computer and Network Security"}
          semester={"Spring 2019"}
        />
        <CourseworkItem
          title={"CSCI 499: Concepts of Programming Languages"}
          semester={"Spring 2019"}
        />
      </div>

      <div className="coursework-semester">
        <CourseworkItem
          title={"CSCI 201: Principles of Software Design"}
          semester={"Fall 2018"}
        />
        <CourseworkItem
          title={"CSCI 270: Introduction to Algorithms and Theory of Computing"}
          semester={"Fall 2018"}
        />
        <CourseworkItem
          title={"MATH 225: Linera Algebra and Linear Differential Equations"}
          semester={"Fall 2018"}
        />
      </div>

      <div className="coursework-semester">
        <CourseworkItem
          title={"CSCI 104: Data Structure and Object Oriented Design"}
          semester={"Spring 2018"}
        />
        <CourseworkItem
          title={"CSCI 170: Discrete Methods in Computer Science"}
          semester={"Spring 2018"}
        />
        <CourseworkItem
          title={"MATH 229: Calculus III for Engineers and Scientists"}
          semester={"Spring 2018"}
        />
      </div>
    </>
  );
}

export default Coursework;
