
import { store } from "./store";
import { Provider } from "react-redux";
import {PropTypes} from 'prop-types'

const StoreProvider = ({children}) => {
    return (
    <Provider store={store}>
        {children}
    </Provider>
    )
}

StoreProvider.propTypes={
    children: PropTypes.object
}

export default StoreProvider
