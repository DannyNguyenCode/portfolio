'use client'
import React from 'react'
import { Box,FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton,Button,CircularProgress,Alert,Typography } from '@mui/material'
import { Visibility,VisibilityOff } from '@mui/icons-material'

const Form = (
    {
        onSubmit,
        buttonText,
        loading,
        confirmPassword=false,
        updatePassword=false,
        deleteUser=false,
        formHelperText,
        responseMessage,
        isError,
        alertSeverity = 'success',
        alertVariant = 'standard',
        color
    }
    :
    {
        onSubmit:(e:any)=>void
        buttonText:string
        loading:boolean
        confirmPassword?:boolean
        updatePassword?:boolean
        deleteUser?:boolean
        formHelperText?:string,
        responseMessage:string
        isError:boolean
        alertSeverity:'error'| 'info'| 'success'| 'warning'
        alertVariant?:"standard" | "filled" | "outlined"
        color?:'error'| 'info'| 'success'| 'warning'
    }) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
      const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
  return (
    <Box component={'form'}  onSubmit={onSubmit}>
        <Alert sx={{margin:'0.5em', width:'fit-content'}} color={color} variant={alertVariant} severity={alertSeverity}>{formHelperText}</Alert> 
        <FormControl sx={{ m: 1, width: '16rem' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type={'text'}
                label="Email"
                name='email'
              />
        </FormControl>

        <FormControl sx={{ m: 1, width: '16rem' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name='password'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {
            confirmPassword && !deleteUser &&
            <FormControl sx={{ m: 1, width: '16rem' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-confirm-password">{updatePassword?'New Password':'Confirm Password'}</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name={updatePassword?'newPassword':'confirmPassword'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label={updatePassword?'New Password':'Confirm Password'}
                  />
            </FormControl>
        }
   
        <Box sx={{ m: 1, position: 'relative'}}>
            <Button
                variant="contained"
                type='submit'   
                disabled={loading}
            >
              {buttonText}
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
      </Box>
      <Typography color={isError?'error':'success'} sx={{padding:'0.5em'}}>{responseMessage}</Typography>
    </Box>
  )
}

export default Form