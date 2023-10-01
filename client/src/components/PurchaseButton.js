import { useAuth0 } from "@auth0/auth0-react";


const PurchaseButton = () => {
    const {loginWithRedirect, isAuthenticated, user } = useAuth0();
    const addUser = async() => {
        try {
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
        catch(error) {
            console.log(error);
        }
        
    }
    return(
        <a>
        <button onClick={!isAuthenticated ? (() => loginWithRedirect()) : (() => addUser())}>
            Purchase Gold
        </button>
        </a>
        
    )
}

export default PurchaseButton