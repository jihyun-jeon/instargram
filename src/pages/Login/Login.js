import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const LoginJiHyun = () => {
  const [loginInfo, setLoginInfo] = useState({ name: '', password: '' });
  const [bolderValue, setBolderValue] = useState({
    idBolder: 'valid',
    pwBolder: 'valid',
  });
  const [placehoderValue, setPlacehoderValue] = useState({
    idPlaceHolder: '전화번호, 사용자 이름 또는 이메일',
    pwPlaceHolder: '비밀번호 6자리 이상',
  });

  const navigate = useNavigate();

  const onInput = e => {
    const { name, value } = e.target;

    setLoginInfo(prev => {
      return { ...prev, [name]: value };
    });

    if (loginInfo.name !== '') {
      setBolderValue(prev => ({ ...prev, idBolder: 'valid' }));
    }
    if (loginInfo.password !== '') {
      setBolderValue(prev => ({ ...prev, pwBolder: 'valid' }));
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    if (loginInfo.name === '' && loginInfo.password === '') {
      return;
    }

    if (loginInfo.name.length < 6 || !loginInfo.name.includes('@')) {
      setLoginInfo(prev => ({ ...prev, name: '' }));
      setBolderValue(prev => ({ ...prev, idBolder: 'unvalid' }));
      setPlacehoderValue(prev => ({
        ...prev,
        idPlaceHolder: '@를 포함한, 6자리 이상!',
      }));
    }

    if (loginInfo.password.length < 6) {
      setLoginInfo(prev => ({ ...prev, password: '' }));
      setBolderValue(prev => ({ ...prev, pwBolder: 'unvalid' }));
      setPlacehoderValue(prev => ({
        ...prev,
        pwPlaceHolder: '6자리 이상!',
      }));
    }

    if (
      loginInfo.name.length >= 6 &&
      loginInfo.name.includes('@') &&
      loginInfo.password.length >= 6
    ) {
      navigate('/main');
    }
  };

  return (
    <div id="loginWrapper">
      <div id="loginContainer">
        <p className="logo">westagram</p>

        <form id="loginForm" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder={placehoderValue.idPlaceHolder}
            className={bolderValue.idBolder}
            name="name"
            value={loginInfo.name}
            onInput={onInput}
          />
          <input
            type="password"
            placeholder={placehoderValue.pwPlaceHolder}
            className={bolderValue.pwBolder}
            name="password"
            value={loginInfo.password}
            onInput={onInput}
          />
          <button
            type="submit"
            disabled={
              loginInfo.name !== '' && loginInfo.password !== '' ? false : true
            }
            className={
              loginInfo.name !== '' && loginInfo.password !== ''
                ? 'fullBtn'
                : 'emptyBtn'
            }
          >
            로그인
          </button>
        </form>

        <p className="forgot">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default LoginJiHyun;
