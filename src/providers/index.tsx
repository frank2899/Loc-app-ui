// import store from '../states'
import { ReactNode } from 'react'
// import { Provider } from 'react-redux'
import ThemeProviderWrapper from './Themeprovider'

const Providers = ({ children }: { children?: ReactNode }) => {
    return (
        // <Provider store={store}>
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        // </Provider>
    )
}

export default Providers
