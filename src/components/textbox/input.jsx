import {Input} from "@heroui/react";

const InputBox= ({
label,type,name, placeHolder,onChange, id, value, classname,required, size, variant, error, isClearable
})=>{
    return(
        <Input 
        label={label}
        type={type} 
        name={name}
        placeholder={placeHolder}
        errorMessage={error}
        id={id} 
        value={value} 
        size={size} //sm md lg
        className={classname}
        required={required}
        variant={variant}
        radius="md"
        onChange={onChange}
        isClearable = {isClearable}
        />
    )
}

export default InputBox

