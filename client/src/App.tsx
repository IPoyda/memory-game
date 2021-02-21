import React, {FC, useEffect} from 'react';

export const App: FC = () => {
    useEffect(() => {
        fetch("/api/scores")
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log((res as any)?.data);
                console.log(process.env.PORT);
            });
    }, []);

    const handleClick = () => {
        fetch("/api/scores/add", {
            method: "POST",
            body: JSON.stringify({title: "test", value: 66}),
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log((res as any)?.data);
            });
    }

    return (
        <div>
            <div>{"body"}</div>
            <button onClick={handleClick}>{"click me"}</button>
        </div>
    );
}
