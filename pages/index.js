import {useState} from "react";

// Table Mock Data
import BODY_DATA from '../public/static/body.json';
import HEAD_DATA from '../public/static/head.json';
import DEPARTMENT_DATA from '../public/static/department.json';
import ROLE_DATA from '../public/static/role.json';
import STATUS_DATA from '../public/static/status.json';

// Custom Components
import SlideOver from "../components/global/SlideOver";
import Container from "../components/global/Container";
import SubHeader from "../components/global/SubHeader";
import CustomInput from "../components/form/Input";
import Table from "../components/table/index";
import Select from "../components/form/Select";


function Home() {
    const [departmentData, setDepartmentData] = useState(DEPARTMENT_DATA);
    const [statusData, setStatusData] = useState(STATUS_DATA);
    const [tableHeader, setTableHeader] = useState(HEAD_DATA);
    const [tableBody, setTableBody] = useState(BODY_DATA);
    const [roleData, setRoleData] = useState(ROLE_DATA);

    const [rowWidth, setRowWidth] = useState('')

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
            ...addTableData,
            id: Math.floor(Math.random() * 200),
            image: data[Math.floor(Math.random() * 6)],
        }
        const newTableData = [...tableBody, newRow];
        setTableBody(newTableData);
        toggleSlide();
    }
    const toggleSlide = () => {
        setSlide(!isSlideActive);
    }
    const getWidthRange = (event) => {
        setRowWidth(`${event.target.value}px`);
    }
    return (
        <>
            <Container>
                <SubHeader handleButton={toggleSlide} title="Data List Component" buttonText="ADD NEW"/>
                <span>Change First Row Width - </span>

                <input min={140} max={400} type="range" onChange={getWidthRange}/>
                <Table width={rowWidth} head={tableHeader} body={tableBody}/>

                {
                    isSlideActive
                        ?
                        <SlideOver handleClose={toggleSlide} handleSubmit={handleFormSubmit}>
                            <form>
                                <CustomInput name="name" onChange={handleAddTableData} type="text" label="Full Name"/>
                                <CustomInput name="email" onChange={handleAddTableData} type="email" label="Email"/>
                                <CustomInput name="title" onChange={handleAddTableData} type="text" label="Title"/>

                                <Select label="Department" options={departmentData}
                                        selectName={"department"}
                                        onSelectChange={handleAddTableData}/>

                                <Select label="Role" options={roleData} selectName={"role"}
                                        onSelectChange={handleAddTableData}/>

                                <Select label="Status" options={statusData} selectName={"status"}
                                        onSelectChange={handleAddTableData}/>
                            </form>
                        </SlideOver>
                        : ''
                }
            </Container>
        </>
    )
}

export default Home