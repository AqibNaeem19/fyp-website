import { GoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../Secrets';

const Login = () => {

  const onSuccess = (res) => {
    console.log("Login Successfull as : ", res.profileObj);
  }

  const onFailure = ( res) => {
    console.log("Login Failed as : ", res);
  }

  return (

    <GoogleLogin
      client_id={CLIENT_ID}
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign IN</button>
      )}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Login;