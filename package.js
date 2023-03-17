Package.describe({
  git: 'https://github.com/zimme/meteor-collection-softremovable.git',
  name: 'zimme:collection-softremovable',
  summary: 'Add soft remove to collections',
  version: '1.0.6-beta.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'check',
    'coffeescript',
    'underscore'
  ]);

  api.use([
    'matb33:collection-hooks',
    'zimme:collection-behaviours'
  ]);

  api.use([
    'aldeed:autoform@4.0.0 || 5.0.0',
    'aldeed:collection2@2.0.0',
    'aldeed:simple-schema'
  ], ['client', 'server'], {weak: true});

  api.imply('zimme:collection-behaviours');

  api.addFiles('softremovable.coffee');
});
