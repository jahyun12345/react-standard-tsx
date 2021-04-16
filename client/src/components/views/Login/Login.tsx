import * as React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from  '../../../_actions/user_action';
import { RouteComponentProps } from 'react-router-dom';

const Login:React.FC<RouteComponentProps> = ({history}) => {
    const dispatch = useDispatch();

    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onMailHandler = (event:any) => {
        setMail(event.currentTarget.value);
    }

    const onPasswordHandler = (event:any) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event:any) => {
        event.preventDefault();

        let body = {
            mail: mail,
            password: password
        }

        dispatch(loginUser(body));
        history.push('/');

        // .then() got error
        // dispatch(loginUser(body))
        // .then(response => {
        //     if (response.payload.loginSuccess) {
        //         history.push('/');
        //     } else {
        //         alert('Error');
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
                <label>Password</label>
                <input type='password' value={password} onChange={onPasswordHandler} />

                <br />
                
                <button>
                    Sign-In
                </button>
            </form>
        </div>
    )
}

export default Login;