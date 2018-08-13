module.exports = {
  description: '',
  normalizeEntityName: function() {},
  async afterInstall(options) {
    this.addPackageToProject('postscribe', '^2.0.8');
  }
};
