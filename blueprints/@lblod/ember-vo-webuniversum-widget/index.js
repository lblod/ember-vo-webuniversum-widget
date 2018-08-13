module.exports = {
  description: '',
  normalizeEntityName: function() {},
  afterInstall(options) {
    return this.addPackageToProject('postscribe', '^2.0.8');
  }
};
