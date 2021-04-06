import "./OrganizationItem.css";

import React from "react";

function OrganizationItem({ org, position, timeframe1, timeframe2 }) {
  if (position !== "") {
    return (
      <>
        <div className="organization-item-container">
          <div className="organization-left">
            {org} - <i>{position}</i>
          </div>
          <div className="organization-right">
            <div className="organization-timeframe-1">{timeframe1}</div>
            <div>-</div>
            <div className="organization-timeframe-2">{timeframe2}</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="organization-item-container">
          <div className="organization-left">{org}</div>
          <div className="organization-right">
            <div className="organization-timeframe-1">{timeframe1}</div>
            <div>-</div>
            <div className="organization-timeframe-2">{timeframe2}</div>
          </div>
        </div>
      </>
    );
  }
}

export default OrganizationItem;
