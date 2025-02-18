import { Box, Button, Fieldset, Input, Textarea } from "@chakra-ui/react";
import {Field} from "../components/ui/field";
import {NativeSelectRoot, NativeSelectField} from "../components/ui/native-select";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProjectContext } from "../store/TaskStore";
import { toast } from "react-toastify";

function CreateTaskPage(){

  const {register, handleSubmit} = useForm();

  const {onTaskRequester} = useContext(ProjectContext);

  async function onFormSubmit(data){
     const isMade = await onTaskRequester(data);
     if(isMade === 0){
      toast.success("Task Created Successfully", {autoClose: 2000});
     }
     else{
      toast.error("Some Error Occured", {autoClose: 2000});
     }
     
  }

    return (
      <Box
        borderRadius="10px"
        padding="20px"
        width="70%"
        height="65%"
        border="1px solid white"
      >
        <form
          onSubmit={handleSubmit(onFormSubmit)}

          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Fieldset.Root>
            <Field label="Task Name">
              <Input
                type="text"
                {...register("taskName", { required: "Task Name is required" })}
              />
            </Field>

            <Field label="Task Description">
              <Textarea
                type="text"
                {...register("taskDesc", {
                  required: "Task Description is required",
                })}
              />
            </Field>

            <Field>
              <NativeSelectRoot>
                <Field label="Status">
                  <NativeSelectField
                    name="Status"
                    items={["In-Progress", "Todo"]}
                    {...register("taskStatus", {
                      required: "Task Status is required",
                    })}
                  />
                </Field>
              </NativeSelectRoot>
            </Field>

            <NativeSelectRoot>
              <Field label="Priority">
                <NativeSelectField
                  name="Priority"
                  items={["low", "medium", "high", "urgent"]}
                  {...register("taskPriority", {
                    required: "Task Priority is required",
                  })}
                />
              </Field>
            </NativeSelectRoot>

            <Field label="Due Date">
              <Input
                type="date"
                {...register("taskDueDate", {
                  required: "Task Due Date is required",
                })}
              />
            </Field>
          </Fieldset.Root>

          <Button
            _hover={{
              border: "1px solid white",
              backgroundColor: "purple.500",
            }}
            transition="all 0.5s"
            backgroundColor="purple.600"
            type="submit"
          >
            Submit Task
          </Button>
        </form>
      </Box>
    );
}

export default CreateTaskPage;