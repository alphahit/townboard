import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

export const _signinWithGoogle = async() => {

    try {

        GoogleSignin.configure({
            offlineAccess: false,
            webClientId:'445348869802-adqmucjiefddtdruc7f88fqc9q6m684b.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        })
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const userInfo = await GoogleSignin.signIn();
        const {idToken} = await GoogleSignin.signIn();
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredentials);
        return userInfo;

    }catch(e) {
        console.log("Google SignIn Error ==========>",e)
        return null
    }

}