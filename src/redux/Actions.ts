export interface UserData {

    loading: boolean,
    isLoggedin: boolean,
    isRegisterd: boolean,
    isForgotpasswordSuccess: boolean,
    user: Object
  }

export interface Store {
    userDataReducer:UserData
  }
