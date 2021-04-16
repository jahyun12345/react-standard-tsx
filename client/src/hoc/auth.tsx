// 로그인 여부 확인
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from  '../_actions/user_action';

// option = null : 아무나 출입 가능 페이지
// option = true : 로그인 한 유저만 출입 가능 페이지
// option = false : 로그인 한 유저는 출입 불가능 페이지
export default function (SpecificComponent:any, option:any, adminRoute = null) {
    function AuthenticationCheck(props:any) {
        const dispatch = useDispatch();

        React.useEffect(() => {
            // dispatch(auth());
            dispatch(auth()).then((response:any) => {
                console.log(response);
                // 로그인 하지 않은 상태
                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login');
                    }
                // 로그인 한 상태
                } else {
                    //  adminRoute가 true이지만 isAdmin이 false인 경우
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/');
                    // 로그인 한 상태일 때
                    } else {
                        if (option === false) props.history.push('/');
                    }
                }
            })
        })

        return (
            <SpecificComponent />
        );
    }

    return AuthenticationCheck;
}