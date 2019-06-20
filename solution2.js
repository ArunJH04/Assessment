let students = [
  { id: 1, name: 'Anil' },
  { id: 2, name: 'Arun' },
  { id: 3, name: 'Krishna' },
  { id: 4, name: 'Raj' }
];

let addName = document.querySelector('#addName');
addName.addEventListener('change', function(event) {
  let newName = event.target.value;
  console.log(newName);
  students.push({ id: students.length + 1, name: newName });
  appendNode(students.map(student => student.name));
});

let container = document.querySelector('#container');

let appendNode = function(List) {
  container.innerHTML = `<ul>${studentList(List)}</ul>`;
};

let studentList = function(listItems) {
  return listItems
    .map(listItem => `<li>${listItem}  <a class="deleteName" id=${listItem} > x</a></li> `)
    .join(' ');
};

// let render = function() {
//   let template = `<ul>${studentList(students)}</ul>`;
//   document.getElementById('container').innerHTML = template;
// };
appendNode(students.map(student => student.name));

let deleteName = document.querySelectorAll('.deleteName');
console.log(deleteName);

let appendEvent = function() {
  deleteName.forEach(item => {
    item.addEventListener('click', function() {
      console.log(item.id);
      students.map(s => {
        if (s.name == item.id) {
          let index = students.indexOf(s);
          console.log(index);
          students.splice(index, 1);
        }
      });
      appendNode(students.map(student => student.name));
    });
  });
};

appendEvent();
