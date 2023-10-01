import { useAuth0 } from "@auth0/auth0-react";


    const Login = () => {
        const {loginWithRedirect, isAuthenticated, user } = useAuth0();
        loginWithRedirect();
        fetch("/addUser", {
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
export default Login