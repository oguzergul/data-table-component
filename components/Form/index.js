import styled from "styled-components";
import CustomInput from "./Input";

const Form = () => {
    const Form = styled.form`


    `;

    return (
        <Form>
            <CustomInput type={'file'} label={'Profile Image'}/>
            <CustomInput type={'text'} label={'Full Name'}/>
            <CustomInput type={'email'} label={'Email'}/>
            <CustomInput type={'text'} label={'Title'}/>
            <CustomInput type={'text'} label={'Position'}/>
            <CustomInput type={'text'} label={'Role'}/>
        </Form>
    )
}

export default Form