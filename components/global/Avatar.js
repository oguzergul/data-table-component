import styled from "styled-components";

const Avatar = ({src, alt}) => {
    const Avatar = styled.img`
      height: 40px;
      width: 40px;
      border-radius: 50%;
    `
    return (
        <Avatar src={src} alt={alt}/>
    )
}

export default Avatar;