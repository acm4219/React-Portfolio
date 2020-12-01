(this.webpackJsonptutorialreactapp=this.webpackJsonptutorialreactapp||[]).push([[0],{31:function(e,t,o){},39:function(e,t,o){"use strict";o.r(t);var s=o(1),a=o(0),i=o.n(a),n=o(21),c=o.n(n),r=(o(31),o(12)),l=o(5),h=o(25),b=o(22),d=o(24),u=o(13);var m=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"font-bold py-3",children:"Main Menu"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/React-Portfolio/",className:"text-blue-500 py-3 border-t border-b block",onClick:e.closeMenu,children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/contact",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu,children:"Contact"})})]})]})};var p=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),o=t[0],i=t[1],n=Object(u.b)(o,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),c=Object(u.b)(o,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}});return Object(s.jsxs)("nav",{children:[Object(s.jsx)("span",{className:"text-xl",children:Object(s.jsx)(b.a,{icon:d.a,onClick:function(){return i(!o)}})}),n.map((function(e){var t=e.item,o=e.key,a=e.props;return t&&Object(s.jsx)(u.a.div,{style:a,className:"fixed bg-black-t-50 top-0 left-0 w-full h-full z-50",onClick:function(){return i(!1)}},o)})),c.map((function(e){var t=e.item,o=e.key,a=e.props;return t&&Object(s.jsx)(u.a.div,{style:a,className:"fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3",children:Object(s.jsx)(m,{closeMenu:function(){return i(!1)}})},o)}))]})};var j=function(){return Object(s.jsxs)("header",{className:"border-b p-3 flex bg-blue-500 justify-between items-center",children:[Object(s.jsx)("span",{className:"font-bold",children:"Alexander McDonald"}),Object(s.jsx)("span",{className:"font-bold text-blue-900 hover:text-blue-300",children:Object(s.jsx)("a",{href:"https://github.com/acm4219",children:"Github"})}),Object(s.jsx)("span",{className:"font-bold text-blue-900 hover:text-blue-300",children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/alexander-mcdonald-80b52a166/",children:"LinkedIn"})}),Object(s.jsx)("span",{className:"font-bold text-blue-900 hover:text-blue-300",children:Object(s.jsx)("a",{href:"https://docs.google.com/document/d/1NAkbvXWE4RRzWK9Uq1Uqlz-iJCPX5mVleTTRK_GvrxY/edit?usp=sharing",children:"Resume"})}),Object(s.jsx)(p,{})]})};var x=function(){return Object(s.jsx)("footer",{className:"bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full",children:"\xa9 Copyright 2020"})},f=o(4);var g=function(e){return Object(s.jsxs)("div",{className:"container bg-gray-100 border mb-4 rounded overflow-hidden max-w-6xl ",children:[Object(s.jsx)("div",{children:Object(s.jsx)("h1",{className:"text-2xl font-bold",children:e.name})}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{alt:e.name,src:"/React-Portfolio"+e.images})}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"text-lg",children:["Description: ",e.description]})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"flex-wrap",children:[Object(s.jsx)("a",{href:e.link,className:"bg-blue-500 hover:bg-blue-300 text-white p-2 flex justify-center w-md ",children:"Deployed Application"}),Object(s.jsx)("a",{href:e.github,className:"bg-blue-500 hover:bg-blue-300 text-white p-2 flex justify-center w-md",children:"Github Repo"})]})]})};var y=function(){return Object(s.jsxs)("div",{className:"bg-blue-200",children:[Object(s.jsx)("h1",{className:"font-bold text-2xl mb-3",children:"Recent Projects"}),Object(s.jsxs)("div",{children:[Object(s.jsx)(g,{name:f[0].name,images:f[0].images[0],description:f[0].description,link:f[0].link,github:f[0].github}),Object(s.jsx)(g,{name:f[1].name,images:f[1].images,description:f[1].description,link:f[1].link,github:f[1].github}),Object(s.jsx)(g,{name:f[2].name,images:f[2].images[0],description:f[2].description,link:f[2].link,github:f[2].github}),Object(s.jsx)(g,{name:f[3].name,images:f[3].images[0],description:f[3].description,link:f[3].link,github:f[3].github}),Object(s.jsx)(g,{name:f[4].name,images:f[4].images,description:f[4].description,link:f[4].link,github:f[4].github}),Object(s.jsx)(g,{name:f[5].name,images:f[5].images,description:f[5].description,link:f[5].link,github:f[5].github})]})]})};var v=function(){return Object(s.jsxs)("div",{className:"bg-blue-200",children:[Object(s.jsx)("h1",{className:"font-bold text-2xl mb-3",children:"Contact Information"}),Object(s.jsxs)("div",{className:"container flex p-3 bg-gray-100 border mb-4 rounded overflow-hidden max-w-6xl",children:[Object(s.jsx)("img",{className:"w-72",alt:"professional-pic",src:"/React-Portfolio/assets/photoAssets/Professional pic.JPG"}),Object(s.jsxs)("p",{className:"text-2xl font-bold ml-4",children:["My Email: ",Object(s.jsx)("a",{className:"text-xl text-blue-500 hover:text-blue-300",href:"mailto: acm4219@gmail.com",children:"acm4219@gmail.com"})]}),Object(s.jsxs)("p",{className:"text-2xl font-bold mr-10",children:["Phone: ",Object(s.jsx)("p",{className:"text-xl text-blue-500",children:"763-614-8255"})]}),Object(s.jsxs)("p",{className:"text-2xl font-bold ml-2",children:["GitHub: ",Object(s.jsx)("a",{className:"text-xl text-blue-500 hover:text-blue-300",href:"https://github.com/acm4219",children:"acm4219"})]}),Object(s.jsxs)("p",{className:"text-2xl font-bold",children:["LinkedIn: ",Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"text-xl text-blue-500 hover:text-blue-300",href:"https://www.linkedin.com/in/alexander-mcdonald-80b52a166/",children:"Alexander McDonald Profile"})]})]})]})};var O=function(){return Object(s.jsx)("div",{className:"relative bg-blue-200 pb-10 min-h-screen",children:Object(s.jsxs)(r.a,{children:[Object(s.jsx)(j,{}),Object(s.jsx)("div",{className:"p-3 bg-blue-200",children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/React-Portfolio/",children:Object(s.jsx)(y,{})}),Object(s.jsx)(l.a,{path:"/contact",children:Object(s.jsx)(v,{})})]})}),Object(s.jsx)(x,{})]})})},k=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,40)).then((function(t){var o=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;o(e),s(e),a(e),i(e),n(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),k()},4:function(e){e.exports=JSON.parse('[{"id":1,"name":"Dad Jokes!","description":"Do you ever feel that there aren\'t enough dad jokes in the world? Do you want to do your part to get more out there for people to see? Then the Dad Jokes! site is perfect for you. Add, rate and view other people\'s jokes with our intuitive bar of jokes. When you\'re done you can simply log out and come back later to see if the ratings have changed on your joke. You can become the Dadliest Dad out there with Dad Jokes!","images":["/assets/photoAssets/dadJokes1.JPG","/assets/photoAssets/dadJokes2.JPG","/assets/photoAssets/dadJokes3.JPG"],"link":"https://vast-gorge-32848.herokuapp.com/","github":"https://github.com/acm4219/peony"},{"id":2,"name":"My Employee Tracker","description":"This application is a recording application to keep track of your employee records. With this application you\'ll be able to view your employees, view the departments they\'re in, add more employees, update their info and remove them if needed. The CLI is really streamlined with a simple to use interface that anyone can use.","images":"/assets/photoAssets/employeetracker.JPG","link":"https://acm4219.github.io/My-Employee-Tracker/MyEmployeeTrackerDemo.mp4","github":"https://github.com/acm4219/My-Employee-Tracker"},{"id":3,"name":"Take My Notes!","description":"This application can be utilized to take notes and keep them saved on yur desktop. When you enter the application you can get started with a click of a button and begin to write notes on the following page. After you write them out you can save it and start writing more notes. It\'s fun for everyone!","images":["/assets/photoAssets/NoteTakerApp1.JPG","/assets/photoAssets/dadJokes2.JPG"],"link":"https://whispering-gorge-41182.herokuapp.com/","github":"https://github.com/acm4219/TakeMyNotesApp"},{"id":4,"name":"Movie Hub","description":"Welcome to Movie Hub! Where you can expand your movie horizons at the click of a button. We have a diverse selection of films you can search through by title, but if you want something more specific we provide that. Once you select a film you are able to also look for specific actors, directors and genres to influence what we recommend for you at the bottom of the page. We provide up to 3 suggestions based off what you are looking for, and from there you will be able to select the new film of your choice and fall down the rabbit hole of cinema. Who knows you may find something new that you\'ve never heard of before.","images":["/assets/photoAssets/movie-hub-search.JPG","/assets/photoAssets/movie-hub-explore.JPG"],"link":"https://acm4219.github.io/SAFT/","github":"https://github.com/acm4219/SAFT"},{"id":5,"name":"Five Day Weather Forecast","description":"This application is used to look into the upcoming weather for your city up to five days. For every city that you look up you\'re able to go back to for the weather and cycle between the searches at a click. In the weather section you\'ll be able to see: the date, current weather condition, the icon, the temperature, humidity and windspeed.","images":"/assets/photoAssets/five-day-weather.JPG","link":"https://acm4219.github.io/Five-Day-Weather-Forecast-App/Assets/","github":"https://github.com/acm4219/Five-Day-Weather-Forecast-App"},{"id":6,"name":"Daily Planner","description":"This application is a daily planner where you can save your daily plans and clear out the old ones. You use the application by entering in your plans for the day in the allotted slot of time and hit the save button to save it. It remains on the page until you clear the local storage and refresh for new slots to fill for your day.","images":"/assets/photoAssets/Daily Planner.JPG","link":"https://acm4219.github.io/Bootcamp-Daily-Planner-Project/02-Homework/Develop/","github":"https://github.com/acm4219/Bootcamp-Daily-Planner-Project"}]')}},[[39,1,2]]]);
//# sourceMappingURL=main.182c6144.chunk.js.map