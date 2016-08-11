## File Structure of App

```
ionic-quiz-app/
├── .github/                           * GitHub files
│   ├── CONTRIBUTING.md                * Documentation on contributing to this repo
│   └── ISSUE_TEMPLATE.md              * Template used to populate issues in this repo
|
├── app/                               * Working directory
│   ├── pages/                         * Contains all of our pages
│   │   ├── about/                     * About tab page
│   │   │    ├── about.html            * AboutPage template
│   │   │    └── about.ts              * AboutPage code
│   │   │    └── about.scss            * AboutPage stylesheet
│   │   │
│   │   ├── account/                   * Account page
│   │   │    ├── account.html          * AccountPage template
│   │   │    └── account.ts            * AccountPage code
│   │   │    └── account.scss          * AccountPage stylesheet
│   │   │
│   │   │── login/                     * Login page
│   │   │    ├── login.html            * LoginPage template
│   │   │    └── login.ts              * LoginPage code
│   │   │    └── login.scss            * LoginPage stylesheet
│   │   │
│   │   │── map/                       * Map tab page
│   │   │    ├── map.html              * MapPage template
│   │   │    └── map.ts                * MapPage code
│   │   │    └── map.scss              * MapPage stylesheet
│   │   │
│   │   │── schedule/                  * Schedule tab page
│   │   │    ├── schedule.html         * SchedulePage template
│   │   │    └── schedule.ts           * SchedulePage code
│   │   │    └── schedule.scss         * SchedulePage stylesheet
│   │   │
│   │   │── schedule-filter/           * Schedule Filter page
│   │   │    ├── schedule-filter.html  * ScheduleFilterPage template
│   │   │    └── schedule-filter.ts    * ScheduleFilterPage code
│   │   │    └── schedule-filter.scss  * ScheduleFilterPage stylesheet
│   │   │
│   │   │── session-detail/            * Session Detail page
│   │   │    ├── session-detail.html   * SessionDetailPage template
│   │   │    └── session-detail.ts     * SessionDetailPage code
│   │   │
│   │   │── signup/                    * Signup page
│   │   │    ├── signup.html           * SignupPage template
│   │   │    └── signup.ts             * SignupPage code
│   │   │
│   │   │── speaker-detail/            * Speaker Detail page
│   │   │    ├── speaker-detail.html   * SpeakerDetailPage template
│   │   │    └── speaker-detail.ts     * SpeakerDetailPage code
│   │   │    └── speaker-detail.scss   * SpeakerDetailPage stylesheet
│   │   │
│   │   │── speaker-list/              * Speakers tab page
│   │   │    ├── speaker-list.html     * SpeakerListPage template
│   │   │    └── speaker-list.ts       * SpeakerListPage code
│   │   │    └── speaker-list.scss     * SpeakerListPage stylesheet
│   │   │
│   │   │── tabs/                      * Tabs page
│   │   │    ├── tabs.html             * TabsPage template
│   │   │    └── tabs.ts               * TabsPage code
│   │   │
│   │   └── tutorial/                  * Tutorial Intro page
│   │        ├── tutorial.html         * TutorialPage template
│   │        └── tutorial.ts           * TutorialPage code
│   │        └── tutorial.scss         * TutorialPage stylesheet
│   │
│   ├── providers/                     * Contains all Injectables
│   │   ├── conference-data.ts         * ConferenceData code
│   │   └── user-data.ts               * UserData code
│   │
│   ├── theme/                         * App theme files
│   │   ├── app.core.scss              * App Shared Sass Imports
│   │   ├── app.ios.scss               * iOS Sass Imports & Variables
│   │   ├── app.md.scss                * Material Design Sass Imports & Variables
│   │   ├── app.variables.scss         * App Shared Sass Variables
│   │   └── app.wp.scss                * Windows Sass Imports & Variables
│   │
│   ├── app.html                       * Application template
│   └── app.ts                         * Main Application configuration
│
├── node_modules/                      * Node dependencies
|
├── platforms/                         * Cordova generated native platform code
|
├── plugins/                           * Cordova native plugins
|
├── resources/                         * Images for splash screens and icons and screenshots of this app
|
├── typings/                           * Contains type definitions
|
├── www/                               * Folder that is copied over to the platform's www directory
│   │   
│   ├── build/                         * Contains auto-generated compiled content
│   │     ├── css/                     * Compiled CSS
│   │     ├── fonts/                   * Copied Fonts
│   │     ├── js/                      * ES5 compiled JavaScript
│   │     ├── pages/                   * Copied html pages
│   │     └── app.html                 * Copied app entry point
│   │
│   ├── data/                          * Contains data used for the app
│   │     └── data.json                * App data
│   │
│   ├── img/                           * App images
│   │
│   └── index.html                     * Main entry point
|
├── .editorconfig                      * Defines coding styles between editors
├── .gitignore                         * Example git ignore file
├── LICENSE                            * Apache License
├── README.md                          * This file
├── config.xml                         * Cordova configuration file
├── gulpfile.js                        * Contains the build tasks for our app
├── ionic.config.json                  * Ionic configuration file
├── package.json                       * Defines our JavaScript dependencies
├── tsconfig.json                      * Defines the root files and the compiler options
├── tslint.json                        * Defines the rules for the TypeScript linter
└── typings.json                       * Defines the external type definitions
```
