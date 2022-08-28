const dynamicChunks = {
 ['components/add-entry.js']: () => import('../add-entry.mjs').then(function (n) { return n.a; }),
 ['components/dasr-logo.js']: () => import('../dasr-logo.mjs').then(function (n) { return n.d; }),
 ['components/laundry-schedule.js']: () => import('../laundry-schedule.mjs').then(function (n) { return n.l; }),
 ['components/schedule.js']: () => import('../schedule.mjs').then(function (n) { return n.s; }),
 ['pages/club.js']: () => import('../club.mjs').then(function (n) { return n.c; }),
 ['pages/index.js']: () => import('../index.mjs').then(function (n) { return n.i; }),
 ['pages/instruments.js']: () => import('../instruments.mjs').then(function (n) { return n.i; }),
 ['pages/kds.js']: () => import('../kds.mjs').then(function (n) { return n.k; }),
 ['pages/laundry.js']: () => import('../laundry.mjs').then(function (n) { return n.l; }),
 ['pages/login.js']: () => import('../login.mjs').then(function (n) { return n.l; }),
 ['pages/meetingroom.js']: () => import('../meetingroom.mjs').then(function (n) { return n.m; }),
 ['pages/vacuumcleaner.js']: () => import('../vacuumcleaner.mjs').then(function (n) { return n.v; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
//# sourceMappingURL=_dynamic-require.mjs.map
