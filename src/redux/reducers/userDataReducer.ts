/* eslint-disable import/no-anonymous-default-export */
import { LOGIN, REGISTER, FORGOT_PASSWORD } from "../constants/action-types";
import { UserData } from "../Actions";
import { ActionTypes } from "../action/userActions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setToken } from "../../util/utils";

const initialState = {
  loading: false,
  isLoggedin: false,
  isRegisterd: false,
  isForgotpasswordSuccess: false,
  user: {}
};

const reducer = persistReducer(
  { storage, key: "basecode-demo", whitelist: ["authToken"] }, (state: UserData = initialState, action: ActionTypes) => {
    console.log("LOGIN RED", { action });
    switch (action.type) {
      case LOGIN.LOGIN_INITLIZATION:
        return {
          ...state,
          ...action.payload,
          loading: true
        };
      case LOGIN.LOGIN_SUCCESS:
        // eslint-disable-next-line no-case-declarations
        const user: any = { email: "", password: "", caT: "AV" };
        user.email = "abc@gmail.com";
        user.password = "anc";
        setToken("Auth-Token-zhxzzxxxx");
        return {
          ...state,
          user: user,
          ...action.payload,
          isLoggedin: true,
          loading: false
        };

      case LOGIN.LOGIN_ERORR:
        return {
          ...state,
          ...action.payload,
          isLoggedin: false,
          loading: false
        };
      case REGISTER.REGISTER_INITLIZATION:
        return {
          ...state,
          ...action.payload,
          loading: true
        };
      case REGISTER.REGISTER_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isRegisterd: true,
          loading: false
        };
      case REGISTER.REGISTER_ERORR:
        return {
          ...state,
          ...action.payload,
          isRegisterd: false,
          loading: false
        };
      case FORGOT_PASSWORD.FORGOT_PASSWORD_INITLIZATION:
        return {
          ...state,
          ...action.payload,
          loading: true
        };
      case FORGOT_PASSWORD.FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isForgotpasswordSuccess: true,
          loading: false
        };
      case FORGOT_PASSWORD.FORGOT_PASSWORD_ERORR:
        return {
          ...state,
          ...action.payload,
          isForgotpasswordSuccess: false,
          loading: false
        };
      default:
        return state;
    }
  }
);

export default reducer;
