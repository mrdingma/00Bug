import React, { useEffect, useState } from "react";
import { Collection, CollectionItem } from "react-materialize";
import date from "date-and-time";
import moment from "moment";

const RecentUpdatesList = ({ currentTab, currentProject, updatesList }) => {
  const dateParse = d => date.format(new Date(d), "ddd MMM. DD, YYYY");

  if (currentTab !== "dashboard") {
    updatesList = updatesList.filter(
      update => update.project === currentProject
    );
  }

  return (
    <>
      <table className="responsive-table collapsible">
        <thead>
          {updatesList.reverse().map(update => (
            <>
              <tr style={{ backgroundColor: "#F5F5F5" }}>
                <th>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>{update.userId}</div>
                    <div>{dateParse(update.created_date)}</div>
                  </div>
                </th>
              </tr>
              <tr>
                <Collection>
                  <CollectionItem className="avatar">
                    <span
                      className="title"
                      style={{ borderBottom: "1px solid black" }}
                    >
                      {update.type}
                    </span>
                    <span style={{ marginLeft: "16.5em" }}>
                      {moment(
                        new Date(update.created_date),
                        "ddd MMM DD YYYY HH:mm:ss GMT Z"
                      ).fromNow()}
                    </span>
                    <div>
                      {update.text}
                      <br />
                      {update.attachment.length !== "" ? (
                        <img
                          style={{ width: "25%" }}
                          src={update.attachment}
                          alt=""
                        />
                      ) : null}
                    </div>
                  </CollectionItem>
                </Collection>
              </tr>
            </>
          ))}
        </thead>
      </table>
    </>
  );
};

export default RecentUpdatesList;
