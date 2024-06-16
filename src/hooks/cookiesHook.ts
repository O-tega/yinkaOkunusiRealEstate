import Cookie from "js-cookie";

export const setCookie = (cookieName, mooyiCookie) => {
  Cookie.set(mooyiCookie, cookieName, {
    secure: true,
    // sameSite:"strict",
    // path:"/"
  });
};


export const getCookie=(cookieName)=>{
    return Cookie.get(cookieName)
}