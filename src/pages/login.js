import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import colors from "../helpers/colors";

import LogoKoperasi from '../assets/logo.png';
import LogoContainer from '../pages/components/logoContainer';

import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        width: '80%',
        marginTop: '.6em',
        marginBottom: '.6em',
        "&:focus": {
          borderColor: colors.accent1
        }
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderRadius: '40px'
      }
    },
    MuiInputLabel: {
      outlined: {
        textAlign: "center"
      }
    },
    MuiInputBase: {
      input: {
        textAlign: 'center',
        fontSize: "1.4rem"
      }
    },
    MuiButton: {
      root: {
        marginTop: 18,
        backgroundColor: colors.button,
        width: '75%',
        borderRadius: '20px',
        fontSize: "1.8rem",
        fontWeight: "bold",
        "&:focus": {
          borderColor: "none"
        },
        "&:hover": {
          backgroundColor: '#d1d9f0'
        }
      }

    },
    MuiFormControlLabel: {
      root: {
        display: 'flex',
        alignItems: 'center'
      },
      label: {
        fontSize: 20,
      }
    }
  }
})

const TheCheckBox = withStyles({
  root: {
    color: colors.accent1,
    '&$checked': {
      color: colors.accent1,
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const Login = (props) => {
  const [rememberMe, setRemember] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [valid, validate] = useState({
    usernameHelperText: "",
    passwordHelperText: "",
    username: false,
    password: false
  })


  const handleCheckBox = () => {
    setRemember(!rememberMe)
  }
  const handleChange = (e, state) => {
    const input = e.target.value;

    setUser({ ...user, [state]: input === "" ? "" : input })
  }

  const loggingIn = () => {
    console.log(user)
    console.log(rememberMe)
    validate({
      ...valid,
      usernameHelperText: "",
      passwordHelperText: "",
    })

  }

  useEffect(() => {
    document.title = 'Gapura Login'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <BackGround>
        <Form noValidate autoComplete="off">
          <LogoContainer image={LogoKoperasi} scale={'10rem'} space={'2rem'} />
          <TextField
            error={valid.username}
            onChange={e => handleChange(e, 'username')}
            helperText={valid.usernameHelperText}
            id="username-basic" type='text' placeholder="Username" variant="outlined" />
          <TextField
            error={valid.password}
            onChange={e => handleChange(e, 'password')}
            helperText={valid.passwordHelperText}
            id="password-basic" type='password' placeholder="Password" variant="outlined" />
          <FormControlLabel
            control={
              <TheCheckBox
                checked={rememberMe}
                onChange={handleCheckBox}
              />
            }
            label="Remember Me"
          />
          <Button>LOGIN</Button>
        </Form>
        <CopyRight>&copy; 2021</CopyRight>
      </BackGround>
    </ThemeProvider>
  );
}

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bg1};
`

const Form = styled.form`
  display: flex;
  height: 80vh;
  width: 50vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 4px 4px 8px #e5e5e5;
  border-radius: .8em;
`

const CopyRight = styled.div`
  margin-top: 18px;

`


export default Login;
