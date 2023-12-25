import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export const LoginPage = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState<string[]>([]);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  const handleAdd = () => {
    console.log("click");
    if (inputText.trim() !== "") {
      setList((oldData) => [...oldData, inputText]);

      setInputText("");
    }
  };

  const handleRemove = (index: number) => {
    setList((oldData) => {
      let newArray = oldData.filter((_, i) => i != index);
      return newArray;
    });
  };

  return (
    <>
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <Text fontSize="4xl"> In love with React & Next</Text>
        <Input
          variant="outline"
          width={60}
          placeholder=""
          value={inputText}
          onChange={handleChange}
        />

        <Button
          colorScheme="teal"
          width={40}
          variant="outline"
          size="md"
          onClick={handleAdd}
        >
          Submit
        </Button>
        <>
          {list.map((data, index) => (
            <Stack spacing={5} direction={"row"}>
              <Text fontSize="1xl" key={index}>
                {data}
              </Text>
              {list.length > 0 && (
                <>
                  <Stack alignItems={"center"} direction={"row"} gap={5}>
                    <EditIcon boxSize={3} color={"red"} />
                    <DeleteIcon
                      boxSize={3}
                      color={"red"}
                      onClick={() => handleRemove(index)}
                    />
                  </Stack>
                </>
              )}
            </Stack>
          ))}
        </>
      </Stack>
    </>
  );
};
