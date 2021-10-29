Package.describe({
	summary: 'Allows you to define and run scheduled jobs across multiple servers.',
	version: '1.5.2',
	name: 'littledata:synced-cron',
	git: 'https://github.com/percolatestudio/meteor-synced-cron.git',
});

Npm.depends({ later: '1.2.0' });

Package.onUse(function (api) {
	api.versionsFrom('METEOR@2.5');
	api.use(['ecmascript', 'underscore', 'check', 'mongo', 'logging'], 'server');
	api.mainModule('synced-cron-server.js', 'server');
	api.export('SyncedCron', 'server');
});

Package.onTest(function (api) {
	api.use(['check', 'mongo'], 'server');
	api.use(['tinytest', 'underscore', 'logging']);
	api.addFiles('synced-cron-tests.js', ['server']);
	api.addFiles('synced-cron-server.js', ['server']);
});
