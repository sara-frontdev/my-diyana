const getClient = (): Window | undefined => {
  return typeof window !== "undefined" ? window : undefined;
};

//setCookie
const setCookie = (name: string, value: string): void => {
  const client = getClient();

  if (client) {
    const expires = new Date();
    expires.setTime(expires.getTime() + 60 * 24 * 60 * 60 * 1000);
    client.document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
};

//setGenericCookie
const setGenericCookie = (name: string, value: any): void => {
  const client = getClient();

  if (client) {
    const expires = new Date();
    expires.setTime(expires.getTime() + 60 * 24 * 60 * 60 * 1000);

    client.document.cookie = `${name}=${JSON.stringify(
      value
    )};expires=${expires.toUTCString()};path=/`;
  }
};

//getCookie
const getCookie = (name: string): any => {
  const client = getClient();

  if (client) {
    const cookies = client.document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }
};

//getGenericCookie
const getGenericCookie = (name: string): any => {
  const client = getClient();

  if (client) {
    const cookies = client.document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (cookieName === name) {
        return JSON.parse(cookieValue);
      }
    }
    return null;
  }
};

//removeCookie
const removeCookie = (name: string): void => {
  const client = getClient();
  if (client) {
    client.document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  }
};

//clearAllCookies
const clearAllCookies = (): void => {
  const client = getClient();

  if (client) {
    const cookies = client.document.cookie.split(";");

    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      client.document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }
};

export {
  setCookie,
  setGenericCookie,
  getCookie,
  getGenericCookie,
  removeCookie,
  clearAllCookies,
};
