'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

// Auth state plus admin status from the admins/{uid} document
export function useAuth() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authStage, setAuthStage] = useState('loading'); // 'loading' | 'login' | 'app'

  useEffect(() => {
    if (!auth) return;
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setAuthStage('app');
        try {
          const adminSnap = await getDoc(doc(db, 'admins', currentUser.uid));
          setIsAdmin(adminSnap.exists());
        } catch {
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
        setAuthStage('login');
      }
    });
    return () => unsub();
  }, []);

  const logout = () => signOut(auth);

  return { user, isAdmin, authStage, logout };
}
