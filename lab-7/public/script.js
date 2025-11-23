const list = document.getElementById("studentsList");
const form = document.getElementById("studentForm");
const filterInput = document.getElementById("filter");

async function loadStudents() {
  const res = await fetch("/api/students");
  let students = await res.json();

  const filter = filterInput.value.trim();
  if (filter) {
    students = students.filter(s => s.group.includes(filter));
  }

  list.innerHTML = "";
  students.forEach(s => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${s.name} (${s.group})
      <button onclick="editStudent(${s.id}, '${s.name}', '${s.group}')">Редагувати</button>
      <button onclick="deleteStudent(${s.id})">Видалити</button>
    `;
    list.appendChild(li);
  });
}

filterInput.addEventListener("input", loadStudents);

form.addEventListener("submit", async e => {
  e.preventDefault();

  const id = document.getElementById("studentId").value;
  const name = document.getElementById("name").value;
  const group = document.getElementById("group").value;

  if (id) {
    await fetch(`/api/students/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, group })
    });
  } else {
    await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, group })
    });
  }

  form.reset();
  loadStudents();
});

function editStudent(id, name, group) {
  document.getElementById("studentId").value = id;
  document.getElementById("name").value = name;
  document.getElementById("group").value = group;
}

async function deleteStudent(id) {
  await fetch(`/api/students/${id}`, { method: "DELETE" });
  loadStudents();
}

loadStudents();
