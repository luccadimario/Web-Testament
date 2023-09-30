import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated, user } = useAuth0();

    const login = async() => {
        loginWithRedirect();
        console.log("hello world");
        await fetch("/addUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify ({
                name: user.name,
                authID: user.sub
            })
        })
    }
    
    return(
        !isAuthenticated && (
            <button onClick={() => login()}>
                Sign In
            </button>
        )
        
    )
}

export default LoginButton