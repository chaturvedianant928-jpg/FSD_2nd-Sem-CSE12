const defaultSubjects = ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"];
const grid = document.getElementById("subjectsGrid");

for (let i = 0; i < 5; i++) {
  const row = document.createElement("div");
  row.className = "subject-row";
  row.innerHTML = `
    <input type="text" value="${defaultSubjects[i]}" placeholder="Subject ${i + 1}" />
    <input type="number" min="1" max="500" value="100" />
    <input type="number" min="0" placeholder="Marks" />
  `;
  grid.appendChild(row);
}

function getGrade(pct) {
  if (pct >= 90) return "A+";
  if (pct >= 75) return "A";
  if (pct >= 60) return "B";
  if (pct >= 50) return "C";
  if (pct >= 35) return "D";
  return "F";
}

function getBadgeClass(grade) {
  if (grade === "A+" || grade === "A") return "gA";
  if (grade === "B") return "gB";
  if (grade === "C") return "gC";
  if (grade === "D") return "gD";
  return "gF";
}

function getBarColor(grade) {
  const map = {
    "A+": "#1a7a45", "A": "#1a7a45",
    "B": "#1a4f8a",
    "C": "#8a6a00",
    "D": "#8a3d00",
    "F": "#8a0000"
  };
  return map[grade];
}

function calculate() {
  const name = document.getElementById("studentName").value.trim() || "Student";
  const rollNo = document.getElementById("rollNo").value.trim() || "N/A";
  const classInfo = document.getElementById("classInfo").value.trim() || "N/A";
  const rows = grid.querySelectorAll(".subject-row");

  let subjects = [];
  let totalObt = 0, totalMax = 0;
  let valid = true;

  for (let i = 0; i < rows.length; i++) {
    const inputs = rows[i].querySelectorAll("input");
    const subName = inputs[0].value.trim() || ("Subject " + (i + 1));
    const max = parseFloat(inputs[1].value);
    const obt = parseFloat(inputs[2].value);

    inputs[2].classList.remove("error");

    if (isNaN(obt) || obt < 0 || obt > max) {
      inputs[2].classList.add("error");
      valid = false;
      continue;
    }

    totalObt += obt;
    totalMax += max;
    const pct = (obt / max) * 100;
    subjects.push({ name: subName, obt, max, pct, grade: getGrade(pct) });
  }

  if (!valid || subjects.length === 0) return;

  const overallPct = (totalObt / totalMax) * 100;
  const avgMarks = totalObt / subjects.length;
  const overallGrade = getGrade(overallPct);
  const passed = subjects.every(s => s.grade !== "F");

  document.getElementById("nameOut").textContent = "Name: " + name;
  document.getElementById("metaOut").textContent = "Roll No: " + rollNo + "   |   Class: " + classInfo;
  document.getElementById("dateOut").textContent = "Date: " + new Date().toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric"
  });

  document.getElementById("totalOut").textContent = totalObt + " / " + totalMax;
  document.getElementById("pctOut").textContent = overallPct.toFixed(1) + "%";
  document.getElementById("avgOut").textContent = avgMarks.toFixed(1);
  document.getElementById("gradeOut").textContent = overallGrade;
  document.getElementById("gradeOut").style.color = getBarColor(overallGrade);

  const tbody = document.getElementById("marksBody");
  tbody.innerHTML = "";

  for (let i = 0; i < subjects.length; i++) {
    const s = subjects[i];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.name}</td>
      <td>${s.obt} / ${s.max}</td>
      <td>${s.pct.toFixed(1)}%</td>
      <td><span class="badge ${getBadgeClass(s.grade)}">${s.grade}</span></td>
    `;
    tbody.appendChild(tr);
  }

  const bar = document.getElementById("barFill");
if (bar) {
    bar.style.width = "0%";
    bar.style.background = getBarColor(overallGrade);
    setTimeout(() => {
        bar.style.width = Math.min(overallPct, 100).toFixed(1) + "%";
    }, 80);
}

  const statusBar = document.getElementById("statusBar");
  if (passed) {
    statusBar.className = "status pass";
    statusBar.textContent = "Result: PASS — Congratulations " + name + "!";
  } else {
    statusBar.className = "status fail";
    statusBar.textContent = "Result: FAIL — One or more subjects not cleared.";
  }

  document.getElementById("resultCard").style.display = "block";
}