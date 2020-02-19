import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  headerDetails = {
    name: 'Ravinandan Tulluri',
    email: 'tulluri.ravinandan@gmail.com',
    likidlnUrl: 'linkedin.com/in/ravinandan-tulluri',
    phoneNumber: '+1(216)-482-7446'
  };

  technicalCompetencies = [{
    techName: 'Web Technologies',
    technologies: `HTML/HTML5, CSS/CSS3, JavaScript, TypeScript, XML, JSON, Ajax, SASS, LESS, Bootstrap, SCSS`
  },
  {
    techName: `Frameworks and Libraries`,
    technologies: `jQuery, AngularJS, Node.js, Angular 2,4,5&6, React.js, D3.js, Lodash, Express.js, Jasmine, Protractor`
  },
  {
    techName: `IDE & Editors`,
    technologies: `Sublime Text, WebStorm, Atom, Notepad++, Eclipse, Microsoft VS code`
  },
  {
    techName: `Debugging Tools`,
    technologies: `Chrome Developer Tools, Firebug, W3C Validator`
  },
  {
    techName: `Database & Query engines`,
    technologies: `MongoDB, PostgreSQL, Casandra, Presto, Hive, SQL`
  },
  {
    techName: `Operating Systems`,
    technologies: `Windows 98/2000/XP/Vista/7/8, MAC OS X/Linux (Redhat/Ubuntu)`
  },
  {
    techName: `Other Tools`,
    technologies: `Git/Stash/SVN, Gulp/Grunt/WebPack, JIRA, MapQuest/Google-Maps, Angular material, Docker,
    Google Analytics, Looker, Jenkins, Appium, Autoit, XML/JSON`
  }
  ];

  professionalSummary = [
    `5 Years of experience in designing User Interface (UI) applications and professional web applications using HTML5, CSS3,
    JavaScript, jQuery, Angular.js, Angular 2/4/6 and React.js, D3.js.`,
    `Experience in developing and implementing Responsive Web Design (RWD) with cross browser compatibility support in
    browsers, following W3C standards.`
  ];

  education = {
    collegeName: `Master of Science - Electrical and Electronics Engineering, Cleveland State University`,
    year: `Aug 2014 – May 2016`
  };

  workExperience = [{
    company: `Web/UI Developer - Traffic-Parking – Verizon (Express Global Solutions) | San Diego, CA`,
    experience: `Jun 2017-Present`,
    summary: [
      `Designed and developed the UI layout and front-end programming for web application that matches 
      the wireframes using the latest HTML5, CSS3, D3.js and Angular 2,6.`,
      `Migrated an application developed in Angularjs, Angular 2.0 to Angular 6.0.`,
      `Extensively used all the new HTML5/CSS3/SASS/SCSS features like local storage, session storage, new input attributes,
      Canvas and SVG, audio and video, gradients, flexbox, web fonts, transform and transpose.`,
      `Created Typescript reusable components/modules/services using form validators, pipes, directives, @Viewchild, @Input,
      @Output, ng-template, ngModel, Local reference variables, Lifecycle Hooks, Host listeners/Binding/events based
      architecture provided by Angular 2&6.`,
      `Extensively used built-in directives like ngIf, ngFor, ngStyle, ngClass, ngSwitch for having the better template driven
      reusable code.`,
      `Designed and developed bar-charts, line-charts, pie-charts, heat-maps, mapquest maps, google maps for displaying
      analytical data using the d3.js library.`,
      `Developed Rest API using Node.js, Express server, Cassandra database (Hive, presto) using SOA architecture(POC).`,
      `Developed a single page, mobile-first, cross-device/cross-browser web application for real-time location sharing utilizing
      Angular2,6 JavaScript API.`,
      `Handling cross browser/platform compatibility issues (IE, Firefox, and Safari) on both Windows and Mac and debugged
      using tools like Firebug.`,
      `Performed unit testing using the open source Jasmine/protractor framework.`,
      `Used JIRA as a tool for project tracking and management where we update the daily tasks performed.`
    ],
    environment: `JavaScript, Angular.js/Angular 2+ Typescript, Node, Express, Gulp, Webpack, jQuery, D3.js, HTML/HTML5, CSS/CSS3,
    SASS/SCSS, Stash, Junit, Sublime Text, IntelliJ, Atom, Notepad++, Eclipse, Microsoft Visual Studio, MapQuest, Typescript, Casandra,
    Hive, Presto.`
  },
  {
    company: `Web/UI Developer - Traffic - Verizon (Express Global Solutions) | Irving, TX`,
    experience: `Aug 2016 – May 2017`,
    summary: [
      `Developed multiple POCs to create a user interface in AngularJS.`,
      `Experience in working with Angular modules, components, services, templates, directives and dependency injection to
      create a SPA.`,
      `Involved in designing the user experience interface UI/UX strategy, UI requirements, converting findings into UI designs.`,
      `Leveraged MVC design pattern to organize AngularJS controllers, Custom directives, factories and views.`,
      `Worked on the REST/Web API to create the services and tested on postman and used in AngularJS $http, $q service calls
      and bind the data in the table using ng-repeat attributes.`,
      `Implemented Factory, Service and Provider to organize code and allow for easier future maintenance.`,
      `Developed Search Engine, line-chart, bar-chart, pie-chart directives, Checkbox directives, and other functionalities using
      AngularJS/D3.js (extensive usage of $scope, ng-controller, ng-model).`,
      `Used $http with Angular.JS interceptors to make sure the requests were valid and used ng-router to handle nested views
      and avoid page redirection.`,
      `Experience with JavaScript libraries like jQuery, D3.js, lodash.js for DOM manipulation.`,
      `Design and develop sophisticated visibility solutions using D3.js charting library.`,
      `Used JIRA to keep track of bugs to reduce downtime, increase productivity, and Communication.`,
      `Utilize Jasmine, Karma, Gulp, Grunt and NPM to build and test applications.`,
      `Experience with various IDE’s such as Visual Studio Code, Web Strom, Sublime, Atom and Notepad++.`
    ],
    environment: `HTML/HTML5, Typescript, CSS/CSS3, SASS/SCSS, JavaScript, jQuery, Angular2, Node JS, Java, Bootstrap, Micro
    services, Elastic Search, Usability Testing, Agile methodology, Web Storm IDE, Gulp, GIT, Karma, ECMAScript 5, Jasmine.`
  },
  {
    company: `Web/UI Developer – Image Detection - Cleveland State University | Cleveland, OH`,
    experience: `Jan 2016 – June 2016`,
    summary: [
      `Developed front-end screens with HTML, CSS, JavaScript.`,
      `Worked on developing a suitable GUI using the Unity 3D for enhancing the features for the Microsoft Kinect.`,
      `Developed the User Interface using HTML5, CSS3, JavaScript, JQuery and AJAX Designed flash plugins for including different
      functionalities and content.`,
      `Designed the avatar for recognizing the motion of the sensor as per the body.`,
      `Added the features like designing the floor module, boundaries and the required platform for displaying the avatar
      structure on the design.`,
      `Involved with bug fixing on functionality, performance and designing issues with JavaScript and JQuery Created web pages
      using HTML, CSS, JQuery and JavaScript.`
    ],
    environment: `HTML, CSS, JavaScript, jQuery, Unity3D, Microsoft Kinect, DOM, Eclipse, SQL.`
  },
  {
    company: `Java Developer - Ideabytes Software India Pvt Ltd | Hyderabad, India`,
    experience: `Dec 2013—June 2014`,
    summary: [
      `Actively interacted with IT and Business team members to understand the technical functionality of the application.`,
      `Involved in the development of various use cases, generated sequence diagrams using UML.`,
      `Developed CRM application using JSP and Servlet’s.`,
      `Utilized SQL and PL/SQL for managing data.`,
      `Used Appium for generating the automation test scripts on the android devices.`,
      `Developed the framework to run the scripts on the windows laptop to generate the usage reports.`,
      `Implemented Maven script during the development and build process.`,
      `Implemented log4j for logging purposes and debug the application.`
    ],
    environment: `J2EE, Servlets, JSP, JDBC, XML, HTML, Apache Tomcat, Eclipse, SQL, Maven, log4j, AutoIt, Appium.`
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
