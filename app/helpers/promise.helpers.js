const handlePromise = (promise) => {
    return promise
        .then((data) => [null, data])
        .catch((Error) => [Error, undefined]);
};

module.exports = handlePromise;