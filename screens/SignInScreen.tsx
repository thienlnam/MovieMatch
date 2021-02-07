import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { Button, Platform } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

const useProxy = Platform.select({ web: false, default: true });

const SignInScreen = () => {
    const discovery = useAutoDiscovery('https://dev-44241670.okta.com/oauth2/default');
    // Request
    const [request, response, promptAsync] = useAuthRequest(
      {
        clientId: '0oa5d7nb2fpNN2oDI5d6',
        scopes: ['openid', 'profile'],
        // For usage in managed apps using the proxy
        redirectUri: makeRedirectUri({
          // For usage in bare and standalone
          native: 'com.okta.dev-44241670:/callback',
          useProxy,
        }),
      },
      discovery
    );

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
        }
    }, [response]);

    return (
        <Button
            disabled={!request}
            title="Login"
            onPress={() => {
            promptAsync({ useProxy });
            }}
        />
    );

};

export default SignInScreen;