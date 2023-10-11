import Advertisement from "../png/광고 이미지.jpeg"
import styled from "styled-components"
import React from "react";


function Ad(){
    return(
        <div>
            <Advertis src={Advertisement} alt="Advertisement" />
        </div>
    )
}

const Advertis = styled.img`
    width: 500px;
`;


export default Ad