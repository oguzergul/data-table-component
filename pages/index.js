import Table from "../components/table/index";
import styled from 'styled-components';
import SlideOver from "../components/global/SlideOver";
import {useState} from "react";
import Form from "../components/Form";

export default function Home() {

    const [isSlideActive, setSlide] = useState(false);

    const MainContainer = styled.div`;
      width: 100%;
      height: 100%;
      max-width: 1080px !important;
      margin: 0 auto;
    `;

    const toggleSlide = () => {
        setSlide(!isSlideActive);
    }

    return (
        <>
            <MainContainer>
                <Table/>
                <button onClick={toggleSlide}>AÇ</button>
                {isSlideActive
                    ?
                    <SlideOver clickMe={toggleSlide}>
                        <Form/>
                    </SlideOver>
                    : ''}
            </MainContainer>
        </>
    )
}
