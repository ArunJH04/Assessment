let books = [
  { id: 1, title: 'Animal Farm', author: 'George Orwell', alreadyRead: false },
  { id: 2, title: 'Fahrenheit 451', author: 'Ray Bradbury', alreadyRead: false },
  { id: 3, title: 'The Kite Runner', author: 'Khaled Hosseini', alreadyRead: false },
  { id: 4, title: 'Catch-22', author: 'Joseph Heller', alreadyRead: false },
  { id: 5, title: 'The Hobbit', author: 'J. R. R. Tolkien', alreadyRead: false }
];

let bookList = function(books) {
  return books
    .map(
      book =>
        `<li>" ${book.title} by ${
          book.author
        } "<input type="checkbox" class="form-check-input" name="" id=${
          book.id
        } onclick="changeStatus(this)" ${checkedStatus(book)}>${alreadyRead(book)}</li>`
    )
    .join(' ');
};

let checkedStatus = book => {
  if (book.alreadyRead) {
    return 'checked';
  } else {
    return 'unchecked';
  }
};

let changeStatus = function(book) {
  books.map(x => {
    if (x.id == book.id) {
      x.alreadyRead = !x.alreadyRead;
    }
  });
  render();
};

let alreadyRead = function(book) {
  if (book.alreadyRead === false) {
    return 'Unread';
  } else return 'Read';
};

let render = function() {
  let template = `<h2>List of Books</h2> <br/><ul>${bookList(books)}</ul>`;
  document.getElementById('container').innerHTML = template;
};

render();
