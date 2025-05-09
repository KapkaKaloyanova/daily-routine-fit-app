import { useEffect, useRef } from "react";
import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users';

    // useLogin hook with abort controller
export const useLogin = () => {
    // const abortRef = useRef(new AbortController());

    const login = async (email, password) =>{
        
        // try {
            const result = await request.post(
                `${baseUrl}/login`,
                { email, password },
                // { signal: abortRef.current.signal }
                );
                return result;
        // }catch (error){
            // if(error.name === 'AbortError'){
                // console.log('Login request aborted');
            // } else {
                // console.log('Login failed:', error);
            // }
        // }
    };
        
        // useEffect(() => {
        //     return () => abortRef.current.abort();

        // }, []);
            
    return {
        login,
    }
};

// useRegister hook
export const useRegister = () => {
    const register = (email, password) =>
    request.post(`${baseUrl}/register`, { email, password });
    
    return {
        register,
    }
};

// useLogout hook
export const useLogout = () => {
    const {accessToken, userLogoutHandler} = useContext(UserContext);

    useEffect(() => {
        if (!accessToken){
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
            .finally(userLogoutHandler);
    }, [accessToken, userLogoutHandler ] );

    return {
        isLoggedOut: !!accessToken,
    };
};

