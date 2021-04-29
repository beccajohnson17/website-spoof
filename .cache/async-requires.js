// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-help-js": () => import("./../../../src/pages/help.js" /* webpackChunkName: "component---src-pages-help-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-logout-js": () => import("./../../../src/pages/logout.js" /* webpackChunkName: "component---src-pages-logout-js" */),
  "component---src-pages-skills-js": () => import("./../../../src/pages/skills.js" /* webpackChunkName: "component---src-pages-skills-js" */)
}

