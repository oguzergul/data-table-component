import {useState} from "react";

// Table Mock Data
import BODY_DATA from '../static/body.json';
import HEAD_DATA from '../static/head.json';

// Custom Components
import SlideOver from "../components/global/SlideOver";
import Container from "../components/global/Container";
import SubHeader from "../components/global/SubHeader";
import CustomInput from "../components/Form/Input";
import Table from "../components/table/index";


function Home() {
    const [tableHeader, setTableHeader] = useState(HEAD_DATA);
    const [tableBody, setTableBody] = useState(BODY_DATA);
    const [isSlideActive, setSlide] = useState(false);
    const [addTableData, setAddTableData] = useState({
        status: "",
        name: "",
        title: "",
        department: "",
        role: "",
        email: "",
        image: "",
    });


    const handleAddTableData = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        let newFormData = {...addTableData};
        newFormData[fieldName] = fieldValue;
        setAddTableData(newFormData)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = BODY_DATA.map(e => e.image)
        const newRow = {
            id: Math.floor(Math.random() * 200),
            status: addTableData.status,
            name: addTableData.name,
            title: addTableData.title,
            department: addTableData.department,
            role: addTableData.role,
            email: addTableData.email,
            image: data[Math.floor(Math.random() * 6)]
        }
        const newTableData = [...tableBody, newRow];
        setTableBody(newTableData);
        toggleSlide();
    }
    const toggleSlide = () => {
        setSlide(!isSlideActive);
    }

    return (
        <>
            <Container>
                <SubHeader handleButton={toggleSlide} title="Data List Component" buttonText="ADD NEW"/>
                <Table head={tableHeader} body={tableBody}/>


                {isSlideActive ?
                    <SlideOver handleClose={toggleSlide} handleSubmit={handleFormSubmit}>
                        <form>
                            <CustomInput name="name" onChange={handleAddTableData} type="text" label="Full Name"/>
                            <CustomInput name="email" onChange={handleAddTableData} type="email" label="Email"/>
                            <CustomInput name="title" onChange={handleAddTableData} type="text" label="Title"/>
                            <CustomInput name="position" onChange={handleAddTableData} type="text" label="Position"/>
                            <CustomInput name="role" onChange={handleAddTableData} type="text" label="Role"/>
                        </form>
                    </SlideOver>
                    : ''}
            </Container>
        </>
    )
}

export default Home