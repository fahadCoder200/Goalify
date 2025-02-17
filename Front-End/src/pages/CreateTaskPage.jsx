import { Box, Fieldset, Input, Textarea } from "@chakra-ui/react";
import {Field} from "../components/ui/field";
import {NativeSelectRoot, NativeSelectField} from "../components/ui/native-select";

function CreateTaskPage(){
    return (
      <Box
        borderRadius="10px"
        padding="20px"
        width="70%"
        height="70%"
        border="1px solid white"
      >
        <form>
          <Fieldset.Root>
            <Fieldset.Legend>Task Details</Fieldset.Legend>

            <Field label="Task Name">
              <Input />
            </Field>

            <Field label="Task Description">
              <Textarea />
            </Field>

            <Field>
              <NativeSelectRoot>
                <Field label="Status">
                  <NativeSelectField
                    name="Status"
                    items={["In-Progress", "Todo"]}
                  />
                </Field>
              </NativeSelectRoot>
            </Field>

            <NativeSelectRoot>
              <Field label="Priority">
                <NativeSelectField
                  name="Priority"
                  items={["low", "medium", "high", "urgent"]}
                />
              </Field>
            </NativeSelectRoot>

            <Field label="Due Date">
              <Input type="date" />
            </Field>
          </Fieldset.Root>
        </form>
      </Box>
    );
}

export default CreateTaskPage;