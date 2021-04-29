
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/rjohnson/dev/github.com/website-spoof/src/pages/404.js")),
  "component---src-pages-help-js": preferDefault(require("/Users/rjohnson/dev/github.com/website-spoof/src/pages/help.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/rjohnson/dev/github.com/website-spoof/src/pages/index.js")),
  "component---src-pages-logout-js": preferDefault(require("/Users/rjohnson/dev/github.com/website-spoof/src/pages/logout.js")),
  "component---src-pages-skills-js": preferDefault(require("/Users/rjohnson/dev/github.com/website-spoof/src/pages/skills.js"))
}

