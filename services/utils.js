const CONFIG = {
  DEBUG: true,
  MODE: "development",
};

function debug(data) {
  CONFIG.DEBUG && console.log(data);
}

function error(err) {
  if (CONFIG.MODE === "development") throw new Error(err);
}

export default {
  debug,
  error,
};
