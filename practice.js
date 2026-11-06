function App() {

    let count = 0;

    function increase() {
        count++;
        console.log(count);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
        </>
    );
}


sai prasanth meowwwwwwwwwwwww