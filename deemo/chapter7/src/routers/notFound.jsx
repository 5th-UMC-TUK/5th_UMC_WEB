import styled from "styled-components"
import { useNavigate } from "react-router-dom";


function NotFound(){
    const nav = useNavigate();
    return(
        <Container>
            <Header>해당 페이지를 찾지 못했습니다.</Header>
            <NotFoundText>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</NotFoundText>
            <MainLink onClick={() => nav('/')}>메인 페이지로 이동</MainLink>
        </Container>
    )
}

export default NotFound


const Container = styled.div`

    margin-top: 100px;
    margin-left: 400px;
    font-size:28px;

`;

const Header = styled.h1`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 44px;
`;
const NotFoundText = styled.p`
    margin-top:40px;
    margin-bottom: 12px;
`;

const MainLink = styled.a`
    color: red;
    text-decoration: none;
`;