import { Button } from "reactstrap"
import { useContext } from "react"
import AuthApi from "../utils/AuthApi"
import { signout } from "./auth-api"

export default function DashBoard() {
    const authApi = useContext(AuthApi)
    const handleSignOut = async()=>{
        const res =await signout();
        authApi.setAuth(res.data.auth);
    }
    return (
        <div>
            <h1>Hello</h1>
            <Button color="danger" onClick={handleSignOut}  >Logout</Button>
        </div>
    )
}

