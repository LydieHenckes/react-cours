import {useContext} from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const LoginPage = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const login = (e) => {
		e.preventDefault();
		setIsAuth(true); // учебный пример, заменить на реальный потом
		localStorage.setItem('auth', true);
	}
	return (
		<div>
			<h1>Page de login</h1>
			<form onSubmit={login}>
				<MyInput type = "text" placeholder = "Entrez vorte nom" />
				<MyInput type = "password" placeholder = "Entrez vorte mot de passe" />
				<MyButton >Se connecter</MyButton>
			</form>
		</div>
	)
}


export default LoginPage;