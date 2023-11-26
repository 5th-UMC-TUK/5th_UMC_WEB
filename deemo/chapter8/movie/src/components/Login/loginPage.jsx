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
    const onSubmit = () => {
        fetch('localhost:8000/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: formData.email,
                pw: formData.password,
            })
        })
        .then(response => response.json())
        .then(data => {
                if (data.id) {
                    localStorage.setItem('id', data.id);
                    console.log(data)
                    alert("로그인 완료되었습니다!");
                } else {
                    alert("로그인 실패. 다시 시도하세요.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
    return(
        <l.Container>
            <form onSubmit={onSubmit}>
            <l.Title>
                이메일과 비밀번호를 입력해주세요.
            </l.Title>
            <l.InputText>
                이메일 주소
            </l.InputText>
            <l.InputBox
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            >
            </l.InputBox>
            <l.InputText>
                비밀번호
            </l.InputText>
            <l.InputBox
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            >
            </l.InputBox>
        <l.SumitBtn>확인</l.SumitBtn>
        </form>
        </l.Container>
    )
}