// import { useState } from "react";

import {
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

//  interface myButtonProps{
//     title:string;
//     disabled:boolean
//  }
// function Form({title,disabled}: myButtonProps){
//     const [value, setValue]= useState(" ");
//     // const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event)=>{
//     //     setValue(event.currentTarget.value);
//     // },[setValue])
//     function handleChange(event:React.ChangeEvent<HTMLInputElement>){

//         setValue(event.currentTarget.value);
//     }

//     return(
//         <>
//     <button disabled={disabled}>

//         {title}</button>
//         <br />
//         <input value={value} onChange={handleChange}/>
//         <p>Value: {value}</p>
//         </>

//     );
// }
// export default Form;

function FormData() {
  const [input, setInput] = useState("");
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.currentTarget.value);
  }
  const isError = input === "";
  return (
    <>
      <Center px={30} w={600}>
        <FormControl isInvalid={isError} isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            value={input}
            onChange={handleInputChange}
            placeholder="Email address"
          />
          {isError ? (
            <FormHelperText>Enter your email id</FormHelperText>
          ) : (
            <FormHelperText>Email is required</FormHelperText>
          )}
        </FormControl>
      </Center>
    </>
  );
}
export default FormData;
