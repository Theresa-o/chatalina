// Fix
export default function authHeader() {
    const localstorageUser = localStorage.getItem("user");
  
    // Create an empty headers object
    const headers: Record<string, string> = {};
  
    if (localstorageUser) {
      const user = JSON.parse(localstorageUser);
      if (user && user.token) {
        // Add Authorization header only if the token is available
        headers.Authorization = `Token ${user.token}`;
      }
    }
  
    return headers;
  }
  
// resolve
// import { AxiosRequestHeaders } from "axios";
 
// export default function authHeader(): AxiosRequestHeaders {
//   const localstorageUser = localStorage.getItem("user");
//   if (!localstorageUser) {
//     return {};
//   }
//   const user = JSON.parse(localstorageUser);
//   if (user && user.token) {
//     return { Authorization: `Token ${user.token}` };
//   }
//   return {};
// }