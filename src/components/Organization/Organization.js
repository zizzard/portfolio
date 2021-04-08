import "./Organization.css";

import React from "react";
import OrganizationItem from "../OrganizationItem/OrganizationItem";

function Organization() {
  return (
    <>
      <OrganizationItem
        org={"Dean's List Recipient"}
        position={""}
        timeframe1={"2017"}
        timeframe2={"2021"}
      />
      <OrganizationItem
        org={"Curated in USC Roski Gallery"}
        position={"Repeat, Repeat, Repeat"}
        timeframe1={"2020"}
        timeframe2={"2020"}
      />
      <OrganizationItem
        org={"AAAI @ USC"}
        position={"Treasurer, Social Media Manager (E-Board)"}
        timeframe1={"2019"}
        timeframe2={"2020"}
      />
      <OrganizationItem
        org={"Hack SC Jr."}
        position={"E-Board"}
        timeframe1={"2017"}
        timeframe2={"2019"}
      />
      <OrganizationItem
        org={"Corpus Callosum"}
        position={"Developer"}
        timeframe1={"2019"}
        timeframe2={"2019"}
      />
      <OrganizationItem
        org={"Joint Education Project"}
        position={"Student Teacher"}
        timeframe1={"2018"}
        timeframe2={"2019"}
      />
      <OrganizationItem
        org={"Perigo"}
        position={"Front-End Developer"}
        timeframe1={"2018"}
        timeframe2={"2019"}
      />
      <OrganizationItem
        org={"New York Alumni Association Scholarship"}
        position={""}
        timeframe1={"2018"}
        timeframe2={"2018"}
      />
      <OrganizationItem
        org={"Science Outreach"}
        position={"Student Teacher"}
        timeframe1={"2017"}
        timeframe2={"2018"}
      />
    </>
  );
}

export default Organization;
