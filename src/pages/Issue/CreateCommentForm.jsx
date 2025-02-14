import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "@/redux/Comment/Action";
import { store } from "@/redux/Store";

const CreateCommentForm = ({ issueId }) => {
  const dispatch = useDispatch();

  const {user} = useSelector(store => store);

  const form = useForm({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(createComment({ content: data.content, issueId }));
    form.reset();
    console.log("Form submitted with data:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-2">
                <div>
                  <Avatar>
                    <AvatarFallback>{auth.user.fullName[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
                <FormControl>
                  <Input
                    className="w-[20rem]"
                    placeholder="Add a comment..."
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};

export default CreateCommentForm;
