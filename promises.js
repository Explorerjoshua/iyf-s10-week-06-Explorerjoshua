function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Done"), 1000);
    });
}

getData().then(console.log);
