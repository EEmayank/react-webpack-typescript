import React from "react";

export const Counter = () => {
    const [count, setCount] = React.useState<number>(0);
    const incrementCount = () => setCount(oldCount => oldCount + 1)
    return <button type="button" onClick={incrementCount}>{count}</button>
}