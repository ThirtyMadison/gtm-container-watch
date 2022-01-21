module.exports = {
  TARGETS: (process.env.TARGETS || "").split(","),
  TAG_MANAGER_BASEURL:
    process.env.TAG_MANAGER_BASEURL ||
    "https://www.googletagmanager.com/gtm.js?id=",
  GITHUB_REPO: process.env.GITHUB_REPO,
  GITHUB_OWNER: process.env.GITHUB_OWNER,
  GITHUB_TRACKING_BRANCH: process.env.GITHUB_TRACKING_BRANCH,
  GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
};
