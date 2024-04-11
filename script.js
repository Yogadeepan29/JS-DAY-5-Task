const resume = {"Basic-Info 👤":[
  " Name - Yogadeepan.R",
  " email - yogudeepan.r@gmail.com",
  " phone - (+91)9360571699",
  " github - https://github.com/Yogadeepan29",
  " linkedin - www.linkedin.com/in/yogadeepan02",
  " Address - Thrivottiyur,Chennai,Tamil Nadu,600019",],
    
  
"Education 🎓":[
  
    "=> UG - Bachelor of Science in Computer Science",
    "       * Institute - Sir Theagaraya College, University of Madras",
    "       * Year - May 2020",
    "       * CGPA - 6.34",
    "=> PG - Master of Science in Computer Science",
    "       * Institute - Sir Theagaraya College, University of Madras",
    "       * Year - Sep 2023",
    "       * CGPA - 8.10"
],
"Skills 🤹": [
  " * Leadership",
  " * Teamwork",
  " * Hardware Troubleshooting",
  " * software Troubleshooting",
  " * Git & Github",
  " * Operating System",
  " * Desktop Building",
],
"Projects 🧑‍💻": [
  
    "=> Project name - Custom Android ROM Enhancement Project - (AOSP)",
    "   * Description - Enhanced Camera Image Quality by 40% and Optimizing it with the same Hardware by Modifying Camera library using AOSP GCAM Ports (Manual configs)",
  "",
  "=> Project name - Integrated Network Infrastructure Project",
  "   * Description - Building NAS, Configuring Routers, Switches, and IP Settings",
  
],
"Certifications 🗃️": [
  
    "=> certification name - fundamentals of Ethical Hacking",
    "   provided by - Zero2Infynite Security & Research",
    "   Dated on - October 2022"
  ,
],
"Languages 🗣️": [
  
    "* Tamil - Native",
  
    "* English - Proficient",

]
};
//------------------------------------------------------------------------------------------------------------

//! for loop
console.log(`                               ${"<--Using for Loop-->"}`);
console.log("");
console.log("     Tech-Savvy Graduate with Strong Planning Skills and a Hunger for Knowledge",);
console.log("");
for (const key in resume) {
if (Array.isArray(resume[key])) {
  console.log(`                                    ${key}`);
  console.log("");
  for (const item of resume[key]) {
    console.log("   " + item);
  }
} else {
  console.log(key + ": " + resume[key]);
}
console.log("");
}

//------------------------------------------------------------------------------------------------------
// //! for in loop
console.log(`                               ${"<--Using for in Loop-->"}`);
console.log("");
console.log("     Tech-Savvy Graduate with Strong Planning Skills and a Hunger for Knowledge",);
console.log("");
for (const key in resume) {
if (Array.isArray(resume[key])) {
console.log(`                                    ${key}`);
console.log("");
for (let i = 0; i < resume[key].length; i++) {
  console.log("   " + resume[key][i]);
}
} else {
console.log(key + ": " + resume[key]);
}
console.log("");
}

//-------------------------------------------------------------------------------------------------------  
//! for of loop
console.log(`                               ${"<--Using for of Loop-->"}`);
console.log("");
console.log("     Tech-Savvy Graduate with Strong Planning Skills and a Hunger for Knowledge",);
console.log("");
for (const [key, value] of Object.entries(resume)) {
if (Array.isArray(value)) {
console.log(`                                    ${key}`);
console.log("");
for (const item of value) {
  console.log("   " + item);
}
} else {
console.log(key + ": " + value);
}
console.log("");
}

//------------------------------------------------------------------------------------------------------ 

//! forEach
console.log(`                               ${"<--Using forEach Loop-->"}`);
console.log("");
console.log("     Tech-Savvy Graduate with Strong Planning Skills and a Hunger for Knowledge",);
console.log("");
Object.entries(resume).forEach(([key, value]) => {
if (Array.isArray(value)) {
console.log(`                                    ${key}`);
console.log("");
value.forEach(item => {
  console.log(item);
});
} else {
console.log(key + ": " + value);
}
console.log("");
});


