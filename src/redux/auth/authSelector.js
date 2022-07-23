export const getUserEmail = (state) => state.auth.user.email;
export const getUserName = (state) => state.auth.user.name;
export const getIsErrorAuth = (state) => state.auth.error;
export const getIsLoading = (state) => state.auth.isLoading;
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getIsAdmin = (state) => state.auth.isAdmin;
export const getRefreshToken = (state) => state.auth.refreshToken;
export const getToken = (state) => state.auth.token;
