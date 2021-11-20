import React, {createContext, useContext, useState, useEffect} from 'react';
import firebase from '../services/firebaseConnections';
import AsyncStorage from '@react-native-community/async-storage';

import {useNavigation} from '@react-navigation/core';
import {Alert} from 'react-native';

const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    const loadStorage = async () => {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    };

    loadStorage();
  }, []);

  const signUp = async (email, password, name) => {
    setLoadingAuth(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async value => {
        await firebase
          .database()
          .ref('users')
          .child(value.user.uid)
          .set({
            balance: 0,
            name,
          })
          .then(() => {
            Alert.alert('', 'Usuário cadastrado com sucesso.', [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('SignIn'),
              },
            ]);
          });
        setLoadingAuth(false);
      })
      .catch(error => {
        alert(error.code);
        setLoadingAuth(false);
      });
  };

  const signIn = async (email, password) => {
    setLoadingAuth(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async value => {
        await firebase
          .database()
          .ref('users')
          .child(value.user.uid)
          .on('value', snapshot => {
            let data = {
              name: snapshot.val().name,
              key: value.user.uid,
              balance: snapshot.val().balance,
            };
            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
          });
      })
      .catch(error => {
        alert(error.code);
        setLoadingAuth(false);
      });
  };

  const storageUser = async data => {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  };

  const signOut = async () => {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signIn,
        signUp,
        signOut,
        loadingAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  const {user, signed, signUp, signIn, loading, signOut, loadingAuth} = context;
  return {user, signed, signUp, signIn, loading, signOut, loadingAuth};
};
