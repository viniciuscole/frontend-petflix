import Cookies from 'js-cookie';

const tokenName = "petflix_token"

export const setToken = (value) => {
    Cookies.set(tokenName, value);
};

export const getToken = () => {
    return Cookies.get(tokenName);
};

export const destroyToken = () => {
    Cookies.remove(tokenName);
};
