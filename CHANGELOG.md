# changelog

## 2026-06-14

- moved the whole app to typescript and rebuilt the ui on the shared
  `@ash2k5/cinematic-ds` design system, with light + dark themes and a no-flash theme
  toggle. the map keeps glass panels over the live map; the login screen is the editorial
  surface.
- the routing, map, and data modules carry real types now (`NodeId`, `RoutingGraph`,
  `RoutePlan`), so the boundary casts in `page` are gone.

## 2026-06-12

- pinned `@grpc/grpc-js` to clear a transitive cve from firebase.
- validate the shortcut document shape in `firestore.rules` on create, and added baseline
  security headers in `next.config.mjs`.
- signup shows a generic error instead of raw firebase codes.
- added ci (lint, test, build on node 20 and 22), firestore rules tests and playwright e2e
  against the emulator, component tests, and a `Cache-Control` cache on the overpass proxy.
- accessible names for the search, start-location, and login inputs, and a live region for
  toasts.
- extracted routing (`useRouting` + a pure `planRoute`) and the map lifecycle
  (`useCampusMap`) out of the page so the logic is unit-testable.
- skip shortcuts with invalid or degenerate geometry and malformed osm ways; break a* ties
  by node id so routes render deterministically.
