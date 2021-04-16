import * as React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from  '../../../_actions/user_action';
import { RouteComponentProps } from 'react-router-dom';

const Register:React.FC<RouteComponentProps> = ({history}) => {
    const dispatch = useDispatch();

    const [mail, setMail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const onMailHandler = (event:any) => {
        setMail(event.currentTarget.value);
    }

    const onNameHandler = (event:any) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event:any) => {
        setPassword(event.currentTarget.value);
    }

    const onConfirmPasswordHandler = (event:any) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event:any) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return alert('비밀번호가 일치하지 않습니다.');
        }

        let body = {
            mail: mail,
            name: name,
            password: password
        }

        dispatch(registerUser(body));
        history.push('/login');

        // .then() got error
        // dispatch(registerUser(body))
        // .then(response => {
        //     if (response.payload.loginSuccess) {
        //         history.push('/login');
        //     } else {
        //         alert('Failed to Sign-Up');
        //     }
        // });
    }

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <form 
                style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Mail</label>
                <input type='email' value={mail} onChange={onMailHandler} />
                <label>Name</label>
                <input type='text' value={name} onChange={onNameHandler} />
                <label>Password</label>
                <input type='password' value={password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type='password' value={confirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                
                <button>
                    Sign-Up
                </button>
            </form>
        </div>
    )
}

export default Register;