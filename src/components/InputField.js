import React from 'react';
import './InputField.scss';

const InputField = ({
  context,
  label,
  name,
  type,
  loginInfo,
  setLoginInfo,
}) => {
  const handleInput = e => {
    const { value, name } = e.target;
    setLoginInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filed">
      <label htmlFor={label}>
        <span
          className={
            loginInfo[name] !== ''
              ? 'placeHolderHasValue placeHolder'
              : 'placeHolder'
          }
        >
          {context}
        </span>
        <input
          id={label}
          type={type}
          name={name}
          onInput={handleInput}
          required
          autoComplete="off" // 자동완성 방지
          autoCapitalize="off" // 모바일에서, 첫글자 대문자 방지
          value={loginInfo.name}
          className={loginInfo[name] === '' ? '' : 'inputHasValue'}
        />
      </label>
    </div>
  );
};

export default InputField;
