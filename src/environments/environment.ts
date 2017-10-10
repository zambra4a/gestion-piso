// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAH9aljZ9Lr4ag_PxR7eGxZ-yfjAS66o9o',
    authDomain: 'gestion-piso.firebaseapp.com',
    databaseURL: 'https://gestion-piso.firebaseio.com',
    projectId: 'gestion-piso',
    storageBucket: 'gestion-piso.appspot.com',
    messagingSenderId: '84107716898'
  }
};
