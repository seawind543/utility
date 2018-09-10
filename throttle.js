/*
// Run immediately, and do not accept new while limit ms time.
const throttle = (func, limit) => {
    let timeoutId = null;
    let context, args;

    return (parameters) => {
        // Get current time
        // https://stackoverflow.com/questions/27078285/simple-throttle-in-js#comment66098361_27078401
        const now = (Date.now || function() {
            return new Date().getTime();
        })();
        log.debug('orz called', now);

        context = this;
        args = parameters;

        if (timeoutId === null) {
            log.debug('orz run');
            func.apply(context, args);

            timeoutId = window.setTimeout(() => {
                log.debug('orz timeout');
                timeoutId = null;
            }, limit);
        } else {
            log.debug('orz occupied');
        }
    };
};
*/

const throttle = (func, threshhold) => {
    let timeoutId = null;
    let lastExecuteTime = 0;
    let context, args;

    return (parameters) => {
        // Get current time
        // https://stackoverflow.com/questions/27078285/simple-throttle-in-js#comment66098361_27078401
        const now = (Date.now || function() {
            return new Date().getTime();
        })();

        context = this;
        args = parameters;

        clearTimeout(timeoutId); // Clear previous queued
        const remainTime = threshhold - (now - lastExecuteTime);
        if (remainTime <= 0) {
            // No need to wait, execute last call directly
            func.apply(context, args);
            lastExecuteTime = now;
        } else {
            // Waiting for a time gap to see if there is more call
            timeoutId = window.setTimeout(() => {
                func.apply(context, args);
                lastExecuteTime = now + remainTime;
            }, remainTime);
        }
    };
};

export default throttle;
