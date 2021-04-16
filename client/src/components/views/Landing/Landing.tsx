import * as React from 'react';
import axios from 'axios';

function Landing() {
    // 랜딩페이지 들어오자마자 실행(axios testing)
    React.useEffect(() => {
        axios.get('http://localhost:5000/api/hello').then(response => console.log(response.data))
    }, [])

    return (
        <div>
            Landing
        </div>
    )
}

export default Landing;