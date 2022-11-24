import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import InputField from '../../components/InputField';

const LoginJiHyun = () => {
  const [loginInfo, setLoginInfo] = useState({ userId: '', userPw: '' });
  const [errMessage, setErrMessage] = useState('');

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();

    if (loginInfo.userId === '' && loginInfo.userPw === '') {
      return;
    }

    if (loginInfo.userId.length < 6) {
      setErrMessage('아이디 6자리 이상 입력하세요!');
      return;
    }

    if (loginInfo.userPw.length < 6) {
      setErrMessage('비밀번호 6자리 이상 입력하세요!');
      return;
    }

    if (loginInfo.userId.length >= 6 && loginInfo.userPw.length >= 6) {
      navigate('/main');
    }
  };

  return (
    <div id="loginWrapper">
      <div id="loginContainer">
        <p className="logo">Instagram</p>

        <form id="loginForm" onSubmit={onSubmit}>
          <InputField
            context="이메일"
            label="userId"
            name="userId"
            type="email"
            loginInfo={loginInfo}
            setLoginInfo={setLoginInfo}
          />

          <InputField
            context="비밀번호"
            label="userPw"
            name="userPw"
            type="password"
            loginInfo={loginInfo}
            setLoginInfo={setLoginInfo}
          />
          <button
            type="submit"
            disabled={
              loginInfo.userId !== '' && loginInfo.userPw !== '' ? false : true
            }
            className={
              loginInfo.userId !== '' && loginInfo.userPw !== ''
                ? 'fullBtn'
                : 'emptyBtn'
            }
          >
            로그인
          </button>
        </form>
        <p className="error">{errMessage}</p>
        <p className="forgot">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default LoginJiHyun;
