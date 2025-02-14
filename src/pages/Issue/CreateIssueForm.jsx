import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createIssue } from "@/redux/Issue/issue.action";

const CreateIssueForm = ({ projectId , status }) => {
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      issueName: "",
      description: "",
      
    },
  });

  const onSubmit = (data) => {
    if (!projectId) {
      console.error("Project ID is missing");
      return;
    }

    // Convert projectId to number

    dispatch(
      createIssue({
        title: data.issueName,
        description: data.description,
        projectID: projectId,
        status,
      })
    );

    console.log("Form Data:", { ...data });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="issueName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="What needs to be done?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Describe your task..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose>
          <Button type="submit">Create Issue</Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default CreateIssueForm;
