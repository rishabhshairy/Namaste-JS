// * Callback function in JS

setTimeout(() => {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
});

//* we should not block main thread, and should always do heavy ops in Async code such as callbacks

