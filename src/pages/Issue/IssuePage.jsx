import React from "react";
import IssueList from "./IssueList";

const IssuePage = () => {
  return (
    <div className="py-5 border-b text-lg tracking-wider">
      <IssueList title={"Todo List"} />

      <IssueList title={"In Progress"} />

      <IssueList title={"Done"} />
    </div>
  );
};

export default IssuePage;
