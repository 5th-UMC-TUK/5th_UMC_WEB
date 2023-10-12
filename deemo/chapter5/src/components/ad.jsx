import Advertisement from "../png/logoimg.svg"
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
    width: 100%;
`;


export default Ad