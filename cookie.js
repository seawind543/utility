// http://stackoverflow.com/questions/10730362/get-cookie-by-name
const get = (cname) => {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + cname + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }

    return undefined; // return undefined
};

const set = (cname, cvalue, exdays) => {
    const d = new Date();
    if (exdays) {
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + '; ' + expires;
    }
    document.cookie = cname + '=' + cvalue + '; ';
};

const del = (cname) => {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
};

export default {
    get,
    set,
    del
};
