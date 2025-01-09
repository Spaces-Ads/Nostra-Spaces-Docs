"use strict";(self.webpackChunkspaces_docusaurus=self.webpackChunkspaces_docusaurus||[]).push([[8470],{7833:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=a(4848),i=a(8453);const t={sidebar_position:2},o="Spaces Life Cycle",c={id:"unity-webgl/v1.5.0/integration/spaces-life-cycle",title:"Spaces Life Cycle",description:"The Spaces Ad-Engine follows lifecycle states that must align with your game's lifecycle, including game-load, game-initialize, game-start, game-pause, game-resume, and game-end.",source:"@site/docs/unity-webgl/v1.5.0/integration/spaces-life-cycle.md",sourceDirName:"unity-webgl/v1.5.0/integration",slug:"/unity-webgl/v1.5.0/integration/spaces-life-cycle",permalink:"/home/docs/unity-webgl/v1.5.0/integration/spaces-life-cycle",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-webgl/v1.5.0/integration/spaces-life-cycle.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Import Spaces Package",permalink:"/home/docs/unity-webgl/v1.5.0/integration/import-package"},next:{title:"Spaces Assets",permalink:"/home/docs/unity-webgl/v1.5.0/integration/spaces-assets"}},r={},l=[{value:"LOAD",id:"load",level:2},{value:"If Your Game Already Has a Loading Scene",id:"if-your-game-already-has-a-loading-scene",level:3},{value:"If Your Game Does Not Have a Loading Scene",id:"if-your-game-does-not-have-a-loading-scene",level:3},{value:"UPDATE",id:"update",level:2},{value:"Next...",id:"next",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"spaces-life-cycle",children:"Spaces Life Cycle"}),"\n",(0,s.jsxs)(n.p,{children:["The Spaces Ad-Engine follows lifecycle states that must align with your game's lifecycle, including ",(0,s.jsx)(n.strong,{children:"game-load"}),", ",(0,s.jsx)(n.strong,{children:"game-initialize"}),", ",(0,s.jsx)(n.strong,{children:"game-start"}),", ",(0,s.jsx)(n.strong,{children:"game-pause"}),", ",(0,s.jsx)(n.strong,{children:"game-resume"}),", and ",(0,s.jsx)(n.strong,{children:"game-end"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"load",children:"LOAD"}),"\n",(0,s.jsx)(n.p,{children:"Let's start with the very first scene of your game, the Loading Scene or Splash Screen."}),"\n",(0,s.jsx)(n.h3,{id:"if-your-game-already-has-a-loading-scene",children:"If Your Game Already Has a Loading Scene"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Drag and Drop ",(0,s.jsx)(n.code,{children:"SpacesSplashScreen"})," prefab at the bottom of the hierarchy in your Loading Scene. You can find it at ",(0,s.jsx)(n.code,{children:"\\Spaces\\UI"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Drag and Drop ",(0,s.jsx)(n.code,{children:"SpacesLoader"})," prefab at the bottom of the hierarchy in your Loading Scene. You can find it at ",(0,s.jsx)(n.code,{children:"\\Spaces\\UI"}),"\n",(0,s.jsx)(n.img,{alt:"alt-textx",src:a(1298).A+"",width:"606",height:"221"}),"\n",(0,s.jsx)(n.img,{alt:"alt-textx",src:a(2265).A+"",width:"812",height:"470"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Drag and Drop  ",(0,s.jsx)(n.code,{children:"SpacesPersistent"})," prefab at the bottom of the hierarchy in your Loading Scene. You can find it at ",(0,s.jsx)(n.code,{children:"\\Spaces\\UI"}),"\n",(0,s.jsx)(n.img,{alt:"alt-textx",src:a(2182).A+"",width:"622",height:"202"}),"\n",(0,s.jsx)(n.img,{alt:"alt-textx",src:a(6157).A+"",width:"499",height:"234"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Call the ",(0,s.jsx)(n.code,{children:"SpacesController.Load()"})," function in your game-loading logic. You need to place it at the very beginning of your game, before your game loading logic starts. (Note that this should specifically be before any addressables Loading if you have any)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure that the game starts only after the execution of the ",(0,s.jsx)(n.code,{children:"SpacesController.Load()"})," function. Convert the parent function where you include ",(0,s.jsx)(n.code,{children:"SpacesController.Load()"})," into an ",(0,s.jsx)(n.code,{children:"async Task"})," function."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using System.Threading.Tasks; // Add this library to support async functions\n\npublic async Task YourLoadingFunction(){\n    // ---Place this code before at the beginnig before any game logic--- \n    await SpacesController.Load();\n    // --- Rest of you code-------------------\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["If in case, you cannot convert the parent function into ",(0,s.jsx)(n.code,{children:"async Task"})," (eg: your parent is a Coroutine). In that case just place the above code into a separate ",(0,s.jsx)(n.code,{children:"async"})," function and call the new function in the place where you trigger or load the next game scene."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using System.Threading.Tasks; // Add this library to support async functions\n\n//Create a function like below\npublic async Task TriggerSpacesLoad(){\n    await SpacesController.Load();\n}\n\npublic void YourLoadingFunction(){\n    //Instead of Triggering the next Scene here, call the function that you created. \n    TriggerSpacesLoad();\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"await SpacesController.Load;"})," will also trigger a Loading Screen from ",(0,s.jsx)(n.code,{children:"SpacesSplashScreen"}),". If you want to disable it, You can comment out ",(0,s.jsx)(n.code,{children:"SpacesController.SpacesSplashLoadingScreenOn();"})," and ",(0,s.jsx)(n.code,{children:"SpacesController.SpacesSplashLoadingScreenOff();"})," within the ",(0,s.jsx)(n.code,{children:"Load()"})," function in ",(0,s.jsx)(n.code,{children:"SpacesLoader.cs"}),"\n",(0,s.jsx)(n.img,{alt:"alt-textx",src:a(2260).A+"",width:"1318",height:"529"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"In SpacesLoader.cs"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'public class SpacesLoader : MonoBehaviour\n{\n    public async Task Load()\n    {\n        Debug.Log("Spaces: Load");\n        SpacesController.SpacesSplashLoadingScreenOn(); //Comment this line to disable the LoadingScreen from Spaces in your Loading Scene\n        //----rest of the code---//\n        SpacesController.SpacesSplashLoadingScreenOff(); //Comment this line to disable the LoadingScreen from Spaces in your Loading Scene\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"if-your-game-does-not-have-a-loading-scene",children:"If Your Game Does Not Have a Loading Scene"}),"\n",(0,s.jsxs)(n.p,{children:["A basic loading scene is provided. Add it to your buil settings hierarchy above your game scene. You can find it at ",(0,s.jsx)(n.code,{children:"./Assets/Spaces/UI/SpacesLoader.Unity"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"alt-textx",src:a(7792).A+"",width:"814",height:"196"}),"\n",(0,s.jsx)(n.img,{alt:"alt-textx",src:a(9119).A+"",width:"1275",height:"386"})]}),"\n",(0,s.jsx)(n.p,{children:"Feel free to modify the loading screen UI as needed. By default, the scene includes a background image with a loading icon."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Trigger the scene you want to load at the end of the ",(0,s.jsx)(n.code,{children:"Initialize()"})," function in ",(0,s.jsx)(n.code,{children:"SpacesLoaderInScene.cs"}),". You can find this script in ",(0,s.jsx)(n.code,{children:"./Assets/Spaces/Scripts/"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'private async Task Initialize(double lat, double lon, string deviceId, string defaultDeviceId)\n{\n    // ---Rest of the code---\n    await spacesEngine.Load(); \n    await SpacesController.StartGameSession();  \n    SceneManager.LoadScene("Main"); // Trigger your game scene here \n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"update",children:"UPDATE"}),"\n",(0,s.jsxs)(n.p,{children:['Typically, your game will show a "Game Over" screen at some point in the game cycle. Just before this screen appears, you must trigger ',(0,s.jsx)(n.code,{children:"SpacesController.UpdateGameSession();"})," This will display the Spaces UI if there is an active campaign."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Call the ",(0,s.jsx)(n.code,{children:"SpacesController.UpdateGameSession();"}),' function in the appropriate location, just before the "Game Over" screen is displayed.']}),"\n",(0,s.jsxs)(n.li,{children:["Convert the parent function where you include ",(0,s.jsx)(n.code,{children:"SpacesController.UpdateGameSession();"})," into an ",(0,s.jsx)(n.code,{children:"async Task"})," function."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using System.Threading.Tasks; // Add this library to support async functions\n\npublic async Task YourFunction(){\n    // ---Rest of your code--- \n    await SpacesController.UpdateGameSession();\n    // ---Rest of your code--- \n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"During an active campaign, the Spaces UI, called SpacesCheckout UI, will be displayed. This UI allows brands to distribute rewards for in-game task completion, showcase call-to-action buttons, display a brand banner or video, and more."}),"\n",(0,s.jsx)(n.p,{children:"This UI should be customized to align with your game's UI/UX. Details on customization will be covered in the upcoming steps."}),"\n",(0,s.jsx)(n.h3,{id:"next",children:"Next..."}),"\n",(0,s.jsx)(n.p,{children:"We will link the Spaces Engine with your assets. From this step onwards, in most cases, integration involves only drag-and-drop actions, making it straightforward."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1298:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/lifeCycle-Load1-645a12170de5890b7739129b74312d93.png"},2265:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/lifeCycle-Load2-3a6b288f20e36ee2127f20f6d0ab057c.png"},7792:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/lifeCycle-Load3-f51a67ed92818f73f7b6ae98a4f295f8.png"},9119:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/lifeCycle-Load4-3595135f3d1d38db054ac0d923b0a561.png"},2182:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/lifeCycle-Load5-bf6a8909f202a55eb041ccbba5216d41.png"},6157:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/lifeCycle-Load6-d01efbe7c9bdde8160852ad0136ebf71.png"},2260:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/lifeCycle-Load7-655c920165127e139ac095945a25d2a3.png"},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>c});var s=a(6540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);