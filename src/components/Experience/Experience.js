import "./Experience.css";

import React from "react";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

function Experience() {
  return (
    <>
      <ExperienceItem
        employer={"USC VITERBI SCHOOL OF ENGINEERING"}
        location={"Los Angeles, CA"}
        title={"Head Course Producer (CSCI 102)"}
        dates={"Aug 2018 to May 2021"}
        body={
          "Head course producer for CSCI 102 - Fundamentals of Computation starting in the Fall 2018 semester. I hold office hours to assist students outside of lecture, lead lab sections to reinforce material and answer student questions, graded student’s assignments and exams, and coordinated scheduling CP Office Hours."
        }
      />
      <ExperienceItem
        employer={"COMCAST"}
        location={"Denver, CO"}
        title={"Software Engineering Intern (Data Experience Team)"}
        dates={"May 2019 to Aug 2019"}
        body={
          "Intern for Open Ingest team within the Data Experience (dx) Organization. Created a Docker container to host a Pentaho Data Integration instance which was used to run ETL operations on a remote Hadoop YARN Cluster. During a one week project, I built an API to used to serve internal machine learning pipelines."
        }
      />
      <ExperienceItem
        employer={"BITMARK, INC."}
        location={"Remote"}
        title={"Software Engineering Intern (Bitmark Node Team)"}
        dates={"May 2018 to Aug 2018"}
        body={
          "Developed a desktop application in the Electron Framework to allow users to seamlessly interact with the Bitmark Node Blockchain and Docker Container. Previously, all interaction with the software was tedious, as it occurred solely in a command line interface."
        }
      />
    </>
  );
}

export default Experience;
