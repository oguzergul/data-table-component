import {TABLE_HEAD_DATA} from "../static/tableData";
import BODY_DATA from '../static/body.json';

import Table from "../components/table/index";
import styled from 'styled-components';
import SlideOver from "../components/global/SlideOver";
import {useState} from "react";
import CustomInput from "../components/Form/Input";

export default function Home() {
    const [isSlideActive, setSlide] = useState(false);
    const [tableHeader, setTableHeader] = useState(TABLE_HEAD_DATA);

    const [tableBody, setTableBody] = useState(BODY_DATA);

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
        console.log('map', )
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

    const MainContainer = styled.div`;
      width: 100%;
      height: 100%;
      max-width: 1080px !important;
      margin: 0 auto;
      padding-top: 50px;
    `;
    const SubHeader = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `;

    const toggleSlide = () => {
        setSlide(!isSlideActive);
    }

    return (
        <>
            <MainContainer>
                <SubHeader>
                    <h1>Data List Component</h1>
                    <button onClick={toggleSlide}>ADD NEW</button>
                </SubHeader>

                <Table head={tableHeader} body={tableBody}/>

                {isSlideActive
                    ?
                    <SlideOver clickMe={toggleSlide}>
                        <form onSubmit={handleFormSubmit}>
                            <CustomInput name="name" onChange={handleAddTableData} type="text" label="Full Name"/>
                            <CustomInput name="email" onChange={handleAddTableData} type="email" label="Email"/>
                            <CustomInput name="title" onChange={handleAddTableData} type="text" label="Title"/>
                            <CustomInput name="position" onChange={handleAddTableData} type="text" label="Position"/>
                            <CustomInput name="role" onChange={handleAddTableData} type="text" label="Role"/>
                            <button type="submit">HADİ LA ÇALIŞ</button>
                        </form>
                    </SlideOver>
                    : ''}
            </MainContainer>
        </>
    )
}
