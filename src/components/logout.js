import { GoogleLogout } from 'react-google-login';
import { CLIENT_ID } from '../Secrets';

const Logout = () => {

  const onLogout = () => {
    console.log("Log out succesfully : ");
  }


  return (

    <GoogleLogout
      client_id={CLIENT_ID}
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
      )}
      buttonText="Logout"
      onLogoutSuccess={onLogout}
    >
    </GoogleLogout>
  )

}

export default Logout;