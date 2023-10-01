import BTCPrice from '../components/BTCPrice';
import InputField from '../components/inputField';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import Profile from '../components/Profile';
import PurchaseButton from '../components/PurchaseButton';
import { useAuth0 } from "@auth0/auth0-react";

function Home(){ 
    const { isLoading, error } = useAuth0(); 
    return ( 
        <div className = "App">
            <header className = "App-header">
                <div> 
                    {error && <p>Authentication Error</p>}
                    {!error && isLoading && <p>Loading...</p>}
                    {!error && !isLoading && (
                        <>
                        <LoginButton />
                        <LogoutButton />
                        <PurchaseButton />
                        <Profile />
                        </>
                    )}
                    
                </div>
                The Web Testament
                <div>
                    <InputField
                    id ="page-selector-home" />
                </div>
            </header>
            
            
        </div>
    );
    
}

export default Home;