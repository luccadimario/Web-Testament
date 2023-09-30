import { useAuth0 } from "@auth0/auth0-react";


const PurchaseButton = () => {
    const {loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        <a
        href = "/purchase">
        <button onClick={!isAuthenticated ? (() => loginWithRedirect()) : null}>
            Purchase Gold
        </button>
        </a>
        
    )
}

export default PurchaseButton