// Subject list based on semester
const subjectList = {
  "1": ["DMGT", "UHV", "JAVA", "AI", "JAVA"],
  "2": ["OT", "P&S", "DL&CO", "ML", "ADSAA"]
};

// Show login page
function showLogin() {
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}

// Fake login validation (can be extended later)
function login() {
  const fid = document.getElementById('faculty-id').value;
  const fpw = document.getElementById('password').value;
  if (fid && fpw) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('facultyOptions').style.display = 'block';
    document.getElementById('lokesh').style.display = 'block';
  } else {
    alert("Enter credentials!");
  }
}

// Handle semester change → update subjects
document.getElementById('semesterSelect').addEventListener('change', function () {
  const semester = this.value;
  const subjectSelect = document.getElementById('subjectSelect');
  subjectSelect.innerHTML = `<option value="">Select</option>`;
  
  if (subjectList[semester]) {
    subjectList[semester].forEach(sub => {
      const opt = document.createElement('option');
      opt.value = sub;
      opt.text = sub;
      subjectSelect.add(opt);
    });
  }
});

// Load dummy student data
function loadStudents() {
  const studentTable = document.getElementById('studentTableContainer');
  const tbody = document.getElementById('studentTableBody');
  tbody.innerHTML = "";

  const students = [
    { id: 1, name: "YESWANTH", reg: "1" },
    { id: 2, name: "SRUJAN", reg: "2" },
    { id: 3, name: "RATNANJALI", reg: "3" },
    { id: 4, name: "TEJESWINI", reg: "4" }
  ];

  students.forEach((stu, index) => {
    const row = `<tr>
      <td>${index + 1}</td>
      <td>${stu.name}</td>
      <td>${stu.reg}</td>
      <td><input type="checkbox" class="present" data-name="${stu.name}"></td>
    </tr>`;
    tbody.innerHTML += row;
  });

  studentTable.style.display = 'block';
}

// Save attendance
function saveAttendance() {
  const checked = document.querySelectorAll('.present:checked');
  const unchecked = document.querySelectorAll('.present:not(:checked)');
  
  let summary = `<h3>Attendance List</h3>`;
  
  checked.forEach(cb => {
    summary += `<p>${cb.dataset.name} - Present</p>`;
  });

  summary += `<h3>Absent List</h3>`;
  unchecked.forEach(cb => {
    summary += `<p>${cb.dataset.name} - Absent</p>`;
  });

  document.getElementById('summaryContainer').innerHTML = summary;
  alert("Attendance Saved!");
}
