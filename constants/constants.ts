import { reduxStoreLocalKeyType } from "../types";

export const COPYRIGHTS = {
  vendor: "Ashoppa",
  vendorsUrl: "https://www.github.com/ugoabuchi",
  vendorsContactEmail: "mathewfortune54@gmail.com",
  offer: "Just for a Job test",
  type: "MOBILE",
  platform: "CROSS-PLATFORM",
  appSecureInstallationKey: "CHrS3%hk@roLOppGgRRRw",
  renderedTo: "DIGITATE SOLUTIONS",
  project: {
    title: "Ashoppa",
    category: "E-Commerce",
    description: "Delivery and Pickup from Stores Near You",
    goal: "BETTER EXPERIENCE MODEL USING Ashaoppa AS A MEANS TO SECURELY BUY PRODUCTS RELATED TO ASHOPPA AND BOOST THE INTEREST OF USERS TOWARDS EFFICIENCY INLINED WITH ITS SCOPE",
    duration: "3 DAYS",
    firstReleaseDate: "1st, May, 2022",
    founder: "ASHOPPA"
  }
}


export const REDUX_SESSION_LOCAL_STORE_KEYS = {
  login_session: <reduxStoreLocalKeyType>("login_local_session"),
  profile_session: <reduxStoreLocalKeyType>("profile_local_session"),
  general_session: <reduxStoreLocalKeyType>("general_local_session")
}

export const SPLASH_SCREEN_TIMEOUT = 3;  // in seconds

export const STATUSBAR = true;
