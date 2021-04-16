import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

const Landing:React.FC<RouteComponentProps> = ({history}) => {
    // 랜딩페이지 들어오자마자 실행(axios testing)
    React.useEffect(() => {
        axios.get('/api/hello').then(response => console.log(response.data))
    }, [])

    const onClickHandler = () => {
        axios.get('/api/users/logout').then(response => {
            console.log(response.data);
            if (response.data.success) {
                history.push('/login');
            } else {
                alert('Failed to Sign-Out');
            }
        })

    }

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <h2>시작 페이지</h2>
            <br/>
            <button onClick={onClickHandler}>Sign-Out</button>
        </div>
    )
}

export default Landing;