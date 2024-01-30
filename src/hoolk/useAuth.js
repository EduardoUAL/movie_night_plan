//firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConection';

//Hook
import { useEffect, useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(undefined);
    const loadingUser = user === undefined;
    console.log('Usuario duseAuth', user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user.uid,
                    email: user.email
                };

                localStorage.setItem('@userDetail', JSON.stringify(userData));
                setUser(user);
            } else {
                // User is not authenticated, clear local storage or perform other actions
                localStorage.removeItem('@userDetail');
                setUser(null);
            }
        });

        // Cleanup
        return () => unsubscribe();
    }, []);

    return { user, loadingUser };
};

export default useAuth;