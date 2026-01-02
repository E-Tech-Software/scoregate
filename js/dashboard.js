const role = "admin"; // admin | teacher | student


const menu = document.getElementById("menu");
const stats = document.getElementById("stats");
const userRole = document.getElementById("userRole");
const card = document.querySelector(".chart")
const mainDom = document.querySelector(".card")
var user = JSON.parse(localStorage.getItem("data"));


userRole.textContent = role.toUpperCase();

const roleConfig = {
  admin: {
    menu: ["Dashboard", "WorkSpace", "Upgrade", "Developer", "CMS"],
    stats: ["Total C.A Sheet", "Plan", "Email"],
    content : [user.casheet,user.plan,user.email]
  },
  teacher: {
    menu: ["Dashboard", "My Classes", "Upload Results", "History"],
    stats: ["My Students", "Subjects", "Pending Uploads"]
  },
  student: {
    menu: ["Dashboard", "My Results", "Performance", "Download PDF"],
    stats: ["Average Score", "Position", "Subjects"]
  }
};

// MENU
roleConfig[role].menu.forEach(item => {
  const li = document.createElement("li");
  li.dataset.menu = item.toLowerCase().replace(/\s+/g, "_");
  li.innerHTML = `<i class="fas fa-circle"></i> ${item}`;
  menu.appendChild(li);
});


// STATS

roleConfig[role].stats.forEach((stat,index) => {
  const div = document.createElement("div");
  div.className = "stat";
  div.innerHTML = `<h3>${stat}</h3><p>--</p><h3>${roleConfig[role].content[index]}</h3>`;
  stats.appendChild(div);
});

// SIDEBAR TOGGLE
document.getElementById("toggleBtn").onclick = () => {
  document.querySelector(".sidebar").classList.toggle("active");
};

// CHART


menu.addEventListener("click", function (e) {
  const item = e.target.closest("li");

  if (!item) return;



  const menuName = item.dataset.menu;
  switch(role){
    case "admin" :
        adminSection(menuName);
        break;
    case "teacher" :
        teacherSection(menuName);
        break;
    case "student" : 
        studentSection(menuName);
        break;
    
  }
document.querySelector(".sidebar").classList.remove("active");
});
// getting the trick done all in one space

function adminSection(menuItemClicked){
      
      switch (menuItemClicked) {
        case "dashboard":
            dashBoardLoad()
            break;
        case "workspace" :
            loadWorkSpace();
            break;
        case "upgrade" : 
            upgradePan()
            break;
        case "developer" : 
            developer();
            break; 
        case "scratch_cards" :
            loadStudentCards();
            break;
        case "reports" :
            loadReport();
            break;

        default:
            break;
      }
    // This function loads every thing within the dashboard for admin view
    function dashBoardLoad(){
      // create and load canvas visuals
        mainDom.innerHTML  = ""

        var canvas = document.createElement("canvas");
         canvas.id = "chart"
         new Chart(canvas, {
          type: 'bar',
          data: {
            labels: ['Users', 'Generated Sheet', 'Complain', 'Resolved Issues'],
            datasets: [{
              label: 'Our Statistics',
              data: [75, 205, 10, 8]
    }]
  }
});
      mainDom.appendChild(canvas)

      
    }

    // This function loads every thing concerning teachers for the admin to view and related data
    function loadWorkSpace(){
      window.location.reload()


    }
    // This function loads every thing that has to do students for the admin
        function upgradePan(){
          window.location.href = "./plan.html"
    }
    // Loads all the students results 
    function developer(){
          window.location.href = "https://wa.me/2348147309259"  
    }
    // loads students pin card
    function loadStudentCards(){
          console.log("My students pin")  
    }
    // loads report
    function loadReport(){
          console.log("My students report")  
    }
}

// This is the teachers section
function teacherSection( menuItemClicked){
    console.log("teacher" + menuItemClicked)
}

// This the student section
function studentSection(menuItemClicked){
    console.log("student" + menuItemClicked)
}

