module.exports = Franz => class AnyDo extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '');
  }
};
