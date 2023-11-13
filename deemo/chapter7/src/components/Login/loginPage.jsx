import { useState } from "react"
import * as l from "../../style/Login/loginPage.style"

export function LoginPage(){
    const [formData, setFormData] =useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return(
        <l.Container>
            <l.Title>
                이메일과 비밀번호를 입력해주세요.
            </l.Title>
            <l.InputText>
                이메일 주소
            </l.InputText>
            <l.InputBox
                type="email"
                value={formData.email}
                onChange={handleChange}

            >
            </l.InputBox>
            <l.InputText>
                비밀번호
            </l.InputText>
            <l.InputBox
                type="password"
                value={formData.password}
                onChange={handleChange}

            >
            </l.InputBox>
        <l.SumitBtn>확인</l.SumitBtn>


        </l.Container>
    )
}