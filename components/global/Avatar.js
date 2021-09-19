import styled from "styled-components";

const Avatars = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`

const Avatar = ({src, alt}) => {
    return (
        <Avatars src={src} alt={alt}/>
    )
}

export default Avatar;