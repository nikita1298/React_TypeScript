import { apiCall, METHOD } from "../../service/baseApiCall";
import { LOGIN, REGISTER, FORGOT_PASSWORD } from "../constants/action-types";
import { Store, UserData } from "../Actions";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export type ActionTypes =
  | { type: typeof LOGIN.LOGIN_INITLIZATION; payload: UserData[] }
  | { type: typeof LOGIN.LOGIN_SUCCESS; payload: UserData[] }
  | { type: typeof LOGIN.LOGIN_ERORR; payload: UserData[] }
  | { type: typeof REGISTER.REGISTER_INITLIZATION; payload: Object }
  | { type: typeof REGISTER.REGISTER_SUCCESS; payload: Object }
  | { type: typeof REGISTER.REGISTER_ERORR; payload: Object }
  | { type: typeof FORGOT_PASSWORD.FORGOT_PASSWORD_INITLIZATION; payload: Object }
  | { type: typeof FORGOT_PASSWORD.FORGOT_PASSWORD_SUCCESS; payload: Object }
  | { type: typeof FORGOT_PASSWORD.FORGOT_PASSWORD_ERORR; payload: Object }

export const login = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch(loginInit());
};

export const loginInit = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_INITLIZATION
  });
  apiCall(
    "/8fea97ad-7e15-40f9-8ad0-7d0db49bedb1",
    {},
    (res: Object) => dispatch(loginSuccess()),
    () => dispatch(loginError()),
    METHOD.POST,
    {}
  );
};

export const loginSuccess = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_SUCCESS
  });
};

export const loginError = (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_ERORR
  });
};

// export const register = () => (dispatch) => {
//   dispatch(registerInit());
// };
// const registerInit = () => (dispatch) => {
//   dispatch({
//     type: REGISTER.REGISTER_INITLIZATION,
//   });
//   apiCall(
//     "/8fea97ad-7e15-40f9-8ad0-7d0db49bedb1",
//     {},
//     (res) => dispatch(registerSuccess(res)),
//     (err) => dispatch(registerError(err)),
//     METHOD.POST,
//     {}
//   );
// };
// const registerSuccess = () => (dispatch) => {
//   dispatch({
//     type: REGISTER.REGISTER_SUCCESS,
//   });
// };
// const registerError = () => (dispatch) => {
//   dispatch({
//     type: REGISTER.REGISTER_ERORR,
//   });
// };

// export const forgotPassword = () => (dispatch) => {
//   dispatch(forgotPasswordInit());
// };
// const forgotPasswordInit = () => (dispatch) => {
//   dispatch({
//     type: FORGOT_PASSWORD.FORGOT_PASSWORD_INITLIZATION,
//   });
//   apiCall(
//     "/8fea97ad-7e15-40f9-8ad0-7d0db49bedb1",
//     {},
//     (res) => dispatch(forgotPasswordSuccess(res)),
//     (err) => dispatch(forgotPasswordError(err)),
//     METHOD.POST,
//     {}
//   );
// };
// const forgotPasswordSuccess = () => (dispatch) => {
//   dispatch({
//     type: FORGOT_PASSWORD.FORGOT_PASSWORD_SUCCESS,
//   });
// };
// const forgotPasswordError = () => (dispatch) => {
//   dispatch({
//     type: FORGOT_PASSWORD.FORGOT_PASSWORD_ERORR,
//   });
// };
