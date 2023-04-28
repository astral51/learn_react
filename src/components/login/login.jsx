import {useForm} from "react-hook-form";
import isEmail from "validator/es/lib/isEmail";
import style from './login.module.css';
import cn from "classnames";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth_reducer";
import {Navigate} from "react-router-dom";
import {useState} from "react";

const LoginForm = (props) => {

	const { register, formState: { errors }, handleSubmit } = useForm({
		mode: "onBlur",
	});

	let [authAccept, setAuthAccept] = useState(true);

	async function onSubmit(data) {
		let resultSubmit = await props.onSubmit(data);
		setAuthAccept(resultSubmit);
	}

	return (
		<div className={style.container}>
			<h2>Log in</h2>
			{!authAccept
				&& <div className={style.error}>Incorrect login or password</div>
			}
			<form onSubmit={handleSubmit(onSubmit)}>

				<div>
					<div>Email:</div>
					<input className={cn(style.input, errors.email && style.wrong_input)}
					       {...register("email",
						       {
							       required: true,
							       validate: (input) => isEmail(input)
						       })}
					       placeholder="Email"
					       // aria-invalid={errors.email ? "true" : "false"}
					/>
					{errors.email?.type === "required" && <span>Email Address is required</span>}
					{errors.email?.type === "validate" && <span>Incorrect email format</span>}
				</div>

				<div>
					<div>Password:</div>
					<input className={cn(style.input, errors.password && style.wrong_input)}
					       {...register("password",
						       {
							       required: true,
							       // minLength: 6,
						       })}
					       type={"password"}
					       placeholder="Password"
						// aria-invalid={errors.password ? "true" : "false"}
					/>
					{errors.password?.type === "required" && <span>Password is required</span>}
					{/*{errors.password?.type === "minLength" && <span>Minimum password length is 6 characters</span>}*/}
				</div>

				<div>
					<input type={"checkbox"} {...register("rememberMe")}/>
					<span>Remember me</span>
				</div>

				<button type="submit">
					Submit
				</button>

			</form>
		</div>
	);


};


const Login = (props) => {

	async function onSubmit(data) {
		let authResult = await props.loginThunk(data.email, data.password, data.rememberMe);
		return authResult;
	}

	if (props.isAuth){
		return <Navigate to={'/profile'} />
	}

	return (
		<div className={style.login_page_container}>
			<LoginForm onSubmit={onSubmit}/>
			<div className={style.free_account}>
				<div>test account:</div>
				<div>login: lenkindev@gmail.com</div>
				<div>password: lenkindev671</div>
			</div>
		</div>
	);
};

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

let mapDispatchToProps = {
	loginThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);