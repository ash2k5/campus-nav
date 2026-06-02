'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, APP_ID } from '../lib/firebase';
import { EMPTY_GEOJSON } from '../lib/constants';

// Live FeatureCollection of saved shortcut paths
export function useShortcuts(user) {
  const [shortcuts, setShortcuts] = useState(EMPTY_GEOJSON);

  useEffect(() => {
    if (!db || !user) return;
    const ref = collection(db, 'artifacts', APP_ID, 'public', 'data', 'shortcuts');
    const unsub = onSnapshot(ref, (snapshot) => {
      const features = snapshot.docs.map(d => ({
        type: 'Feature',
        id: d.id,
        geometry: JSON.parse(d.data().geometry),
        properties: { ...d.data().properties, _id: d.id },
      }));
      setShortcuts({ type: 'FeatureCollection', features });
    }, (error) => console.error('Firestore error:', error));
    return () => unsub();
  }, [user]);

  return shortcuts;
}
