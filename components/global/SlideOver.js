import styled from "styled-components";

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
    padding: 12px 16px;
    background: #F3F4F6;
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
  }
`;

const SlideOver = (props, {clickMe}) => {

    return (
        <SlideOvers>
            <div className='slide-header'>
                <div className='header-inner'>
                    <h3>Add New Row</h3>
                    <span onClick={clickMe}>Kapat</span>
                </div>
            </div>

            <div className='slide-content'>
                {props.children}
            </div>

            <div className='slide-footer'>
                <button>Save</button>
            </div>

        </SlideOvers>
    )
}
export default SlideOver