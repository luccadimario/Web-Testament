import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated, user } = useAuth0();
    
    return(
        !isAuthenticated && (
            <button className="text-sm font-semibold leading-6 text-gray-300" onClick={() => loginWithRedirect()}>
                Log In  <span aria-hidden="true">&rarr;</span>
            </button>
        )
        
    )
}

export default LoginButton