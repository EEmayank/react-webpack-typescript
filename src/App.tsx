import { Counter } from './Counter'
import './style.css'
import IMAGE from './download.jpg'

export const App = () => {
    
    return (
        <>
        <h1>nice website bro! [{process.env.NODE_ENV}]</h1>
        <img src={IMAGE} alt='doge slav'/>
        <Counter />
        </>
    )
}