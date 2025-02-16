import Login from "./Login"
import { profileProps } from "./Profile"


type privateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<profileProps>
}

function Private({ isLoggedIn, component: Component }: privateProps) {

    if (isLoggedIn) {
        return <Component name="joy"></Component>
    } else {
        return <Login></Login>
    }

}

export default Private