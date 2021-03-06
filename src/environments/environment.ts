// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr       : false,
    url: "http://localhost:3000/api/",
    github: {
      domain: "https://github.com/login/oauth/authorize?client_id=",
      clientId: "deafb08eb71ea00e531c",
      clientSecret: "10fe3d839e76615964b8d52ebfe7219169825f57",
      state: "github",
      callbackURL: "http://localhost:4200/inicio"
    },
    gitlab: {
      domain: "https://gitlab.com/oauth/authorize?client_id=",
      clientId:
        "5fd3c547dbc17e2d3f77a0c81a4fae588d3f31007f626a64489814d3900a315d",
      clientSecret:
        "f08b68a537601fa7e0aab9d013c4f312d64adfc8d2967a1445cac741229c0a2f",
      state: "gitlab",
      callbackURL: "http://localhost:4200/inicio"
    },
    gitlabGeo: {
      domain: "https://gitlab.geo.gob.bo/oauth/authorize?client_id=",
      clientId:
        "800b8fdad978c3f6bdd3e6e4ad535748cb38d24863e65218b2b2256e40ef9139",
      clientSecret:
        "272f3ddd82f15bb561c9cc34e44bfda2183100d4eb127a63dcc3529c181c1ac9",
      state: "gitlab",
      callbackURL: "http://localhost:4200/inicio"
    },
    bitbucket: {
      domain: "https://bitbucket.org/site/oauth2/authorize?client_id=",
      clientId: "UEp5BUWsGZH9jAE962",
      clientSecret: "EPQf3yDRYtY5dGFS3BRndWHwTG6M9uMx",
      state: "bitbucket",
      callbackURL: "http://localhost:4200/inicio"
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
