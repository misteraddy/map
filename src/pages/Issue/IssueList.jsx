/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import IssueCard from "./IssueCard";
import CreateIssueForm from "./CreateIssueForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssues } from "@/redux/Issue/issue.action";

function IssueList({ title, projectId,status}) {

  const dispatch = useDispatch();

  const {issue} = useSelector(store => store);

  useEffect(() => {
    dispatch(fetchIssues(projectId))
  },[projectId])

  return (
    <Dialog>
      <Card className="w-full md:w-[300px] lg:w-[310px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="px-2">
          <div className="space-y-2">
            {issue.issues.filter((issue => issue.status == status)).map((item) => <IssueCard item={item} projectId={projectId} key={item.id}/>)}
          </div>
        </CardContent>
        <CardFooter className="px-2">
          <DialogTrigger>
            <Button
              className="w-full border flex items-center gap-2"
              variant="outline"
            >
              <PlusIcon />
              Create Issue
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <DialogContent className="border-none w-[300px]">
        <DialogHeader>
          <DialogTitle>Create New Issue</DialogTitle>
        </DialogHeader>
        <CreateIssueForm status={status} projectId={projectId}/>
      </DialogContent>
    </Dialog>
  );
}

export default IssueList;
