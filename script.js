const resume = {
    "Basic-Info": {
      "name": "Yogadeepan.R",
      "title": "Tech-Savvy Graduate with Strong Planning Skills and a Hunger for Knowledge",
      "email": "yogudeepan.r@gmail.com",
      "phone": "(+91)9360571699",
      "github": "https://github.com/Yogadeepan29",
      "linkedin": "www.linkedin.com/in/yogadeepan02",
      "location": {
        "address": "Thrivottiyur",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "pincode": "600019"
    }
    },
    "education":[
      { 
        "UG-degree": "Bachelor of Science in Computer Science",
        "institution": "Sir Theagaraya College, University of Madras",
        "graduated": "May 2020",
        "cgpa": "6.34"
      },
      {
        "PG-degree": "Master of Science in Computer Science",
        "institution": "Sir Theagaraya College, University of Madras",
        "graduated": "Sep 2023",
        "cgpa": "8.10"
      }
    ],
    "skills": [
      "Leadership",
      "Teamwork",
      "Hardware Troubleshooting",
      "software Troubleshooting",
      "Git & Github",
      "Operating System",
      "Desktop Building",
],
    "projects": [
      {
        "name": "Custom Android ROM Enhancement Project - (AOSP)",
        "description": "Enhanced Camera Image Quality by 40% and Optimizing it with the same Hardware by Modifying Camera library using AOSP GCAM Ports (Manual configs)",
      },
      {
        "name": "Integrated Network Infrastructure Project",
        "description": "Building NAS, Configuring Routers, Switches, and IP Settings",
      }
    ],
    "certifications": [
      {
        "name": "fundamentals of Ethical Hacking",
        "authority": "Zero2Infynite Security & Research",
        "date": "October 2022"
      },
    ],
    "languages": [
      {
        "language": "Tamil",
        "fluency": "Native"
      },
      {
        "language": "English",
        "fluency": "Proficient"
      }
    ]
  };
//------------------------------------------------------------------------------------------------------------
  //! for loop
  console.log(`                               ${"<--Using for Loop-->"}`);
  console.log("");

  const keys = Object.keys(resume);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`                           ${key}`);
    const value = resume[key];
    if (typeof value === 'object') {
      const subKeys = Object.keys(value);
      for (let j = 0; j < subKeys.length; j++) {
        const subKey = subKeys[j];
        if (typeof value[subKey] === 'object') {
          console.log("\n");
          const subValue = value[subKey];
          const subSubKeys = Object.keys(subValue);
          for (let k = 0; k < subSubKeys.length; k++) {
            const subSubKey = subSubKeys[k];
          console.log(subSubKey + ": " + subValue[subSubKey]);
          }
        } else if (Array.isArray(value[subKey])) {
          console.log(subKey + ":");
          value[subKey].forEach(item => {
            console.log("- " + item);
          });
        } else {
          console.log(subKey + ": " + value[subKey]);
        }
      }
    }  
    console.log("\n");
  }
//------------------------------------------------------------------------------------------------------
//! for in loop
console.log(`                               ${"<--Using for in Loop-->"}`);
console.log("");

for (let key in resume) {
    console.log(`                           ${key}`);
    if (typeof resume[key] === 'object') {
      for (let subKey in resume[key]) {
        if (typeof resume[key][subKey] === 'object') {
          console.log("");
          for (let subSubKey in resume[key][subKey]) {
            console.log(subSubKey + ": " + resume[key][subKey][subSubKey]);
          }
        } else if (Array.isArray(resume[key][subKey])) {
          console.log(subKey + ":");
          resume[key][subKey].forEach(item => {
            console.log("-" + item);
          });
        } else {
          console.log(subKey + ": " + resume[key][subKey]);
        }
      }
    }
    console.log("\n");
  }
//-------------------------------------------------------------------------------------------------------  
//! for of loop
console.log(`                               ${"<--Using for of Loop-->"}`);
console.log("");

for (let [key, value] of Object.entries(resume)) {
    console.log(`                           ${key}`);
    if (typeof value === 'object') {
      for (let [subKey, subValue] of Object.entries(value)) {
        if (typeof subValue === 'object') {
          console.log("");
          for (let [subSubKey, subSubValue] of Object.entries(subValue)) {
            console.log(subSubKey + ": " + subSubValue);
          }
        } else if (Array.isArray(subValue)) {
          console.log(subKey + ":");
          subValue.forEach(item => {
            console.log("- " + item);
          });
        } else {
          console.log(subKey + ": " + subValue);
        }
      }
    }
    console.log("\n");
  }
 //------------------------------------------------------------------------------------------------------ 
//! forEach
console.log(`                               ${"<--Using forEach Loop-->"}`);
console.log("");

Object.entries(resume).forEach(([key, value]) => {
    console.log(`                           ${key}`);
    if (typeof value === 'object') {
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (typeof subValue === 'object') {
          console.log("");
          Object.entries(subValue).forEach(([subSubKey, subSubValue]) => {
            console.log(subSubKey + ": " + subSubValue);
          });
        } else if (Array.isArray(subValue)) {
          console.log(subKey + ":");
          subValue.forEach(item => {
            console.log("- " + item);
          });
        } else {
          console.log(subKey + ": " + subValue);
        }
      });
    }
    console.log("\n");
  });
  
