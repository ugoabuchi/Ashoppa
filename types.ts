export type ActionT = {
  action: any;
  payload: any;
  type: any;
}

export type GeneralSessionType = {

  general_session: {

    initialAppLoad: boolean,
    prevLoginUser: string,
    FirstTimeAppLogin: boolean,
    Language: any,
    lastLogError: string,
    theme_mode: any,
    storeLocalData: boolean,
    bearer: string,
    settings: {
      statusBar: boolean,
      fingerprint: boolean
    },
    CartCount: number

  };

}

export type LoginSessionType = {

  login_session: boolean;

}

export type ProfileSessionType = {

  profile_session: any;

}

export type LoginSessionActionType = (value: any, storeData: storeLocalyType) => any;

export type ProfileSessionActionType = (value: any, storeData: storeLocalyType) => any;

export type GeneralSessionActionType = (value: any, storeData: storeLocalyType) => any;

export type NavPropsType = {

  navigation: any;
  route?: any;
  login_session?: LoginSessionType;
  profile_session?: ProfileSessionType;
  general_session?: GeneralSessionType;
  login_session_action?: LoginSessionActionType;
  profile_session_action?: ProfileSessionActionType;
  general_session_action?: GeneralSessionActionType;

}

export type StyleTransparentType = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 85 | 90 | 92 | 94 | 96 | 98;

export type StatusBarType = {
  hidden?: boolean;

}

export type LoginParamType = {

  username: string;
  password: string;

}
export type LoginParamStateType = {

  username: string;
  password: string;
  editable: boolean;

}

export type ModalPopUp = {
  theme: any;
  language: any;
  title: string;
  showModal: boolean; 
  isClosable?: boolean;
  content: JSX.Element;
  enableContentScrollView?: boolean;
  showConfirm?: boolean;
  confirmText?: string;
  confirmAction?: () => void;
  closeAction: () => void;
}

export type IsLoggedInType = {

  login_session: LoginSessionType;
  mandate: boolean;
  yourCallBack?: (() => void) | null

}

export type StartUpHeaderConfigType = {

  login_session: LoginSessionType;
  profile_session: ProfileSessionType;
  general_session: GeneralSessionType;
  login_session_action: LoginSessionActionType;
  profile_session_action: ProfileSessionActionType;
  general_session_action: GeneralSessionActionType;
  notifyBeforeBackHandler?: boolean;
  backScreenDispatch: () => void
  yourCallBack?: (() => void) | null;
  setTimer?: number;
  backHandlerRef : any;
  timerHandlerRef : any;

}

export type logOutType = {

  login_session: LoginSessionType;
  general_session: GeneralSessionType;
  login_session_action: LoginSessionActionType;

}

export type localDataSaveAsyncType = {

  key: string;
  valueinJson: any;
  yourCallBack?: (error: Error) => void

}

export type localDataRetrieveAsyncType = {

  key: string;
  yourCallBack: (error: Error, result: any) => void

}

export type localDataMergeAsyncType = {

  key: string;
  valueinJson: any;
  yourCallBack?: (error: Error) => void

}

export type localDataRemoveAsyncType = {

  key: string;
  yourCallBack?: (error: Error) => void

}

export type reduxStoreLocalKeyType = "login_local_session" | "profile_local_session" | "general_local_session";

export type storeLocalyType = {

  allow: boolean;
  key: reduxStoreLocalKeyType;

}


export type DropdownListParamType = {
  theme: any;
  items: any[];
  defaultIndex?: number;
  yourCallBack: (value: any) => void;
}

export type ModalStateType = {
  title: string;
  confirmText: string;
  confirmAction: () => void;
  closeAction: () => void;
  showModal: boolean;
  content: JSX.Element
}

export type ModalViewTPopUp = {
  theme: any;
  language: any;
  title: string, 
  content: JSX.Element;
  confirmText: string;
  confirmAction: ()=>void;
  closeAction: ()=>void;
}

export type MyModalType = {

  theme: any;
  showAlert: boolean;
  customView: JSX.Element;

}


export type MyModalViewType = {

  theme: any;
  language: any;
  title?: string;
  content: JSX.Element;
  showModal: boolean;
  confirmText?: string;
  confirmAction?: () => void
  closeAction: () => void;

}

export type IconComponentT = {
  theme: any;
  actionPressed?: () => void;
};


export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

export type ReduxSession = {
  session: any;
}




