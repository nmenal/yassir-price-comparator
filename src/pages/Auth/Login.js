import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types';
// import Layout from '../../components/Layout/Layout';
import { useStyles } from './styles';
import PhoneForm from './PhoneForm';
import PinForm from './PinForm';
import { useAuthData } from '../../contexts/authContext';
import { useSubmit } from '../../hooks/useSubmit';
import LogoYassir from '../../assests/images/Logo.svg';

const propTypes = {
  completed: PropTypes.boolean,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
};
const Auth = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { isTokenValid, setIsTokenValid } = useAuthData();

  const [codeSent, setCodeSent] = useState(false);
  const [codeValidated, setCodeValidated] = useState(false);
  const [validatePhone, setValidatePhone] = useState(false);
  const [countDownApi, setCountDownApi] = useState();
  const [blockedPhoneMessage, setBlockedPhoneMessage] = useState('');
  const [errorCode, setErrorCode] = useState(false);
  const [autoStart, setAutoStart] = useState(true);

  const [phone, setPhone] = useState('');

  const {
    // isLoading: loadingRequestPin,
    isSuccess: successRequestPin,
    isError: errorRequestPin,
    data: codePinData,
    error: codePinError,
    mutate: mutateRequestPin,
  } = useSubmit({
    path: `/auth/request`,
    method: 'post',
  });

  const {
    // isLoading: loadingLogin,
    isSuccess: successLogin,
    isError: errorLogin,
    mutate: mutateLogin,
    data: authData,
    // error: errorLoginData,
  } = useSubmit({
    path: `/auth/check`,
    method: 'post',
  });

  const setRef = (countdown) => {
    if (countdown) {
      setCountDownApi(countdown.getApi());
    }
  };

  const handleRequestPin = (submitedData) => {
    const phoneField = `${submitedData?.phone.replace(/\s/g, '')}`;
    setPhone(phoneField);
    mutateRequestPin({ phone: `+213${phoneField}` });
  };

  const handleResendRequestPin = () => {
    setAutoStart(false);
    mutateRequestPin(`+213${phone}`);
  };

  const handleConfirmPin = () => {
    const body = {
      phone,
      // pin: submitedData.pin,
      pin: '202211',
    };
    mutateLogin(body);
  };

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ errorRequestPin', errorRequestPin);
    if (successRequestPin) {
      setCodeSent(true);
      setTimeout(() => {
        setValidatePhone(true);
      }, 500);
    }
  }, [successRequestPin, errorRequestPin]);

  useEffect(() => {
    if (successLogin) {
      setErrorCode(false);
      setCodeValidated(true);
      setIsTokenValid(true);
      localStorage.setItem('token', authData?.data?.token);
      navigate('/');
    } else if (errorLogin) {
      setErrorCode(true);
      setIsTokenValid(false);
    }
  }, [authData, errorLogin, navigate, setIsTokenValid, successLogin]);

  useEffect(() => {
    setBlockedPhoneMessage('');
    if (successRequestPin) {
      setCodeSent(true);
      if (codePinData?.data?.errorMessageML) {
        setBlockedPhoneMessage(codePinData?.data?.errorMessageML['en']);
      }
    } else {
      setBlockedPhoneMessage(
        codePinError?.response?.data?.errorMessageML
          ? codePinError?.response?.data?.errorMessageML['en']
          : codePinError?.response?.data?.errorMessage,
      );
    }

    if (countDownApi !== undefined) {
      countDownApi.start();
    }
  }, [
    codePinData?.data?.errorMessageML,
    codePinError,
    countDownApi,
    successRequestPin,
  ]);

  useEffect(() => {
    console.log({ isTokenValid });
  }, [isTokenValid]);

  const handleLogout = ()=> {
    localStorage.removeItem('token');
    navigate('/login');
    console.log('logged out');
  };

  return (
    <>
      <div className={classes.bgHeader}>
        <div className={classes.container}>
          <div
            style={{ padding: 0, margin: 0, width: '100%' }}
            className={classes.item}
          >
            <img src={LogoYassir} alt="logo yassir" />
          </div>
          <div className={classes.item}>
            <div>
              <a
                href="/login"
                className={classes.link}
                onClick={() => handleLogout()}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 450, margin: '0 auto', marginTop: 30 }}>
        <div
          style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              marginBottom: 50,
              width: 300,
              textAlign: 'center',
            }}
          >
            <h2 style={{ textAlign: 'center', fontWeight: 'bolder' }}>
              {!validatePhone ? <>Login</> : <>Validate your number</>}
            </h2>
            <span style={{ color: 'grey', fontSize: 15 }}>
              {!validatePhone ? (
                <>Use your phone number to connect</>
              ) : (
                <>A 6-digit code has been sent to your number</>
              )}
            </span>
          </div>

          {/* {validatePhone ? renderValidation() : <PhoneForm />} */}
          {validatePhone ? (
            <PinForm
              onSubmit={handleConfirmPin}
              codeValidated={codeValidated}
              errorCode={errorCode}
            />
          ) : (
            <PhoneForm
              onSubmit={handleRequestPin}
              blockedPhoneMessage={blockedPhoneMessage}
              codeSent={codeSent}
            />
          )}
          {/* <PhoneForm /> */}

          <div
            style={{
              margin: '0 auto',
              marginTop: 30,
              width: 280,
              textAlign: 'center',
            }}
          >
            {!validatePhone ? (
              <span style={{ color: 'grey', fontSize: 13 }}>
                By connecting to YASSIR you accept
                <a
                  target="blank"
                  style={{
                    textDecoration: 'none',
                    color: '#1b1b1b',
                    fontWeight: '500',
                  }}
                  href="#"
                >
                  the terms of use.
                </a>
              </span>
            ) : (
              <>
                <Countdown
                  autoStart={autoStart}
                  ref={setRef}
                  date={Date.now() + 60000}
                  renderer={(props) => {
                    if (props.completed) {
                      return (
                        <span
                          aria-hidden="true"
                          onClick={() => {
                            handleResendRequestPin();
                          }}
                          onKeyDown={() => handleResendRequestPin()}
                          style={{
                            color: '#1b1b1b',
                            fontWeight: '500',
                            cursor: 'pointer',
                            fontSize: 13,
                          }}
                        >
                          Resend the code
                        </span>
                      );
                    }
                    return (
                      <span style={{ color: 'grey', fontSize: 13 }}>
                        Code expires in... {props.minutes}:{props.seconds}
                      </span>
                    );
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Auth.propTypes = propTypes;

export default Auth;
