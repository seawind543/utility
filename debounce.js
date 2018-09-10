const debounce = (func, timeout) => {
    let timeoutId = null;
    let context, args;
    // let result; // TODO: Fix me

    const later = () => {
        func.apply(context, args);
    };

    return (...parameters) => {
        context = this;
        args = parameters;

        if (timeoutId !== null) {
            clearTimeout(timeoutId); // Clear previous
        }
        timeoutId = window.setTimeout(later, timeout);
    };
};

export default debounce;
