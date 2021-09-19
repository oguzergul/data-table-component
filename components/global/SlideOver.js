import styled from "styled-components";
import Button from "../Form/Button";

const SlideOvers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  background: #FFFFFF;
  width: 40vw;
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  & .slide-header {
    padding: 16px;
    background: #F3F4F6;
    border-bottom:1px solid #E5E7EB ;
  }

  & .slide-footer {
    padding: 12px 16px;
    background: #F9FAFB;

    & button {
      max-width: 80px;
      margin-left: auto;
    }

  }

  & .slide-content {
    padding: 20px;
  }

  & .header-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    h2 {
      font-size: 28px;
    }
    
    span {
      color:#4F46E5FF;
      font-weight: bolder;
      cursor: pointer;
    }
  }
`;

const SlideOver = (props) => {

    return (
        <SlideOvers>
            <div className='slide-header'>
                <div className='header-inner'>
                    <h2>Add New Row</h2>
                    <span onClick={props.handleClose}>Kapat</span>
                </div>
            </div>

            <div className='slide-content'>
                {props.children}
            </div>

            <div className='slide-footer'>
                <Button text="Save" handleClick={props.handleSubmit}/>
            </div>

        </SlideOvers>
    )
}
export default SlideOver