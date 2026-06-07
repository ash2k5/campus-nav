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
      const features = [];
      for (const d of snapshot.docs) {
        const data = d.data();
        try {
          features.push({
            type: 'Feature',
            id: d.id,
            geometry: JSON.parse(data.geometry),
            properties: { ...data.properties, _id: d.id },
          });
        } catch {
          console.error('Skipping shortcut with invalid geometry:', d.id);
        }
      }
      setShortcuts({ type: 'FeatureCollection', features });
    }, (error) => console.error('Firestore error:', error));
    return () => unsub();
  }, [user]);

  return shortcuts;
}
