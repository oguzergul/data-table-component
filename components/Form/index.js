import styled from "styled-components";
import CustomInput from "./Input";

const Form = () => {
    const Form = styled.form``;

    const getInputValue = (event) => {
        console.log(event.target.value)
    }

    return (
        <Form>
            <CustomInput type={'file'} label={'Profile Image'}/>

        </Form>
    )
}

export default Form