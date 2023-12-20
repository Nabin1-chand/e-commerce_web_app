import { useState } from "react";

 interface myButtonProps{
    title:string;
    disabled:boolean
 }
function Form({title,disabled}: myButtonProps){
    const [value, setValue]= useState(" ");
    // const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event)=>{
    //     setValue(event.currentTarget.value);
    // },[setValue])
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setValue(event.currentTarget.value);
    }
   
    return(
        <>
    <button disabled={disabled}>
        
        {title}</button>
        <br />
        <input value={value} onChange={handleChange}/>
        <p>Value: {value}</p>
        </>
     
    
    );
}
export default Form;