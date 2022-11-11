/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
import React from 'react';
import MaskedInput from 'react-maskedinput';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useStyles } from './styles';
import CircularProgress from '@mui/material/CircularProgress';
import AlgeriaFlag from '../../assests/images/algeria.svg';
const propTypes = {
  onSubmit: PropTypes.func,
  blockedPhoneMessage: PropTypes.string,
  codeSent: PropTypes.boolean,
};
const PhoneForm = ({ onSubmit, blockedPhoneMessage, codeSent }) => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    control,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      phone: '',
    },
  });

  console.log('🚀 Request PIN PhoneForm ----~ errors', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.card}>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, onBlur, ref } }) => (
            <>
              <div
                style={{
                  display: 'flex',
                  padding: 5,
                  marginBottom: 20,
                  borderRadius: 8,
                  border: `1px solid ${codeSent ? '#84dfb6' : 'grey'}`,
                  alignItems: 'center',
                }}
              >
                <img
                  src={AlgeriaFlag}
                  style={{ width: 30, marginRight: 7, marginLeft: 7 }}
                  alt=""
                />
                <p
                  style={{
                    background: '#ededed',
                    borderRadius: 20,
                    padding: 5,
                    fontSize: 14,
                    width: 35,
                    textAlign: 'center',
                    margin: 0,
                  }}
                >
                  +213
                </p>
                <MaskedInput
                  mask={'111 111 111'}
                  className="form-control"
                  type="tel"
                  placeholder=""
                  guide={false}
                  id="my-input-id"
                  name="phone"
                  style={{
                    border: 'none',
                    fontSize: '14px',
                    marginLeft: '10px',
                    outline: 'none',
                  }}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                />
              </div>
              {blockedPhoneMessage !== '' ? (
                <span style={{ color: 'tomato', fontSize: 12 }}>
                  {blockedPhoneMessage}
                </span>
              ) : null}
            </>
          )}
          rules={{ required: true }}
        />

        {errors.phone && (
          <span style={{ color: 'tomato', fontSize: 12 }}>
            Phone is required
          </span>
        )}

        {isSubmitting ? (
          <CircularProgress />
        ) : codeSent ? (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <small style={{ color: '#84dfb6', textAlign: 'center' }}>
              Code sent
            </small>
          </div>
        ) : (
          <>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Submit
            </Button>
          </>
        )}
      </div>
    </form>
  );
};

PhoneForm.propTypes = propTypes;

export default PhoneForm;
