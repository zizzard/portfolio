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
        dates={"2018 - 2021"}
        body={
          "Head course producer for CSCI 102, Fundamentals of Computation. Held weekly office hours to assist students with course material and homework, led lab sections to supplement lecture information, graded homework and exams, managed other instructors’ schedules, and maintained the course website."
        }
      />
      <ExperienceItem
        employer={"COMCAST"}
        location={"Denver, CO"}
        title={"Software Engineering Intern (Data Experience)"}
        dates={"2019 - 2019"}
        body={
          "Intern for Open Ingest team within the Data Experience Organization. Created a Docker container to host a Pentaho Data Integration instance which was used to run ETL operations on a remote Hadoop YARN Cluster through Spark Submit. During Lab Week, I built an API used to serve machine learning pipelines."
        }
      />
      <ExperienceItem
        employer={"BITMARK, INC."}
        location={"Remote"}
        title={"Software Engineering Intern (Bitmark Node)"}
        dates={"2018 - 2018"}
        body={
          "Created a desktop user interface for the Bitmark Node blockchain through ElectronJS to allow for seamless user interaction. At the time, all interaction with the blockchain occurred through the difficult to setup and tedious Docker command-line interface."
        }
      />
    </>
  );
}

export default Experience;
