/* eslint-disable no-nested-ternary */
import React from 'react';
import ReactCodeInput from 'react-code-input';
import PropTypes from 'prop-types';
import { useMediaQuery, useTheme } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useStyles } from './styles';
import CircularProgress from '@mui/material/CircularProgress';

const propTypes = {
  onSubmit: PropTypes.func,
  errorCode: PropTypes.string,
  codeValidated: PropTypes.boolean,
};

const PinForm = ({ onSubmit, codeValidated, errorCode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const {
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
    control,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      phone: '',
      pin: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.card}>
        <Controller
          name="code"
          control={control}
          render={({ field: { onChange, ref } }) => (
            <>
              <ReactCodeInput
                inputMode="numeric"
                type="number"
                fields={6}
                inputStyle={{
                  width: isMobile ? 25 : 35,
                  height: isMobile ? 25 : 35,
                  borderRadius: 8,
                  border: `solid 1px ${codeValidated ? '#84dfb6' : 'grey'}`,
                  margin: 5,
                  fontSize: isMobile ? 20 : 18,
                  fontWeight: 'normal',
                  textAlign: 'center',
                  outline: 'none',
                }}
                name="pin"
                // onBlur={onBlur}
                onChange={onChange}
                ref={ref}
                // onChange={(e) => console.log('event onchange')}
                // onBlur={(e) => console.log('event onBlur')}
              />
              {errorCode ? (
                <span style={{ color: 'tomato', fontSize: 12 }}>
                  Invalid or expired code
                </span>
              ) : null}
            </>
          )}
          rules={{ required: true }}
        />

        {isSubmitting ? (
          <CircularProgress />
        ) : codeValidated ? (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <small style={{ color: '#84dfb6', textAlign: 'center' }}>
              Code has been validated
            </small>
          </div>
        ) : (
          <>
            <button
              id="confirmCodePin"
              color="primary"
              className={
                !isDirty || !isValid ? classes.disabledButton : classes.button
              }
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Confirm
            </button>
          </>
        )}
      </div>
    </form>
  );
};

PinForm.propTypes = propTypes;

export default PinForm;
