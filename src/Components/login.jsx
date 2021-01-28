import "../css/login.css";
import { Button } from "@material-ui/core";
import {auth, provider} from "../firebase"
import {actionTypes} from '../Components/reducer';
import {UseStateValue} from '../Components/stateProvider'
const Login = () => {
	const [state, dispatch] = UseStateValue();
    const SignIn = () =>{
		auth.signInWithPopup(provider)
		.then(result =>{
			dispatch({
				type: actionTypes.SET_USER,
				user: result.user
			})
		})
		.catch(error => alert(error.message));
    }
	return (
		<div className="Login">
			<div className="login__logo">
				<img
					src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
					alt="Facebook logo"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
					alt="Facebook text Logo"
				/>
			</div>
            <Button 
            type="submit"
            onClick={SignIn}
            color="primary"
            >Sign In</Button>
		</div>
	);
};
export default Login;
