import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  //   상태, 리듀서 , 액션 셍성자 정의
  name: 'user', // slice의 이름
  initialState: {
    // 초기화
    id: '',
    password: '',
  },
  reducers: {
    loginUser: (state, action) => {
      // name, id에 API 값 받아오기
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload.id;
      // eslint-disable-next-line no-param-reassign
      state.password = action.payload.password;

      // state 변화를 알림
      return state;
    },
  },
});

export const { loginUser } = userSlice.actions; // loginUser 액션 생성자를 내보냄 -> 나중에 컴포넌트에서 dispatch 할 때 사용
export default userSlice.reducer; // 기본 리듀서 내보내기 -> 스토어와 연결
