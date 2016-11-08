interface Author {
  name: string;
  age: number;
}

interface Book {
  title: string;
  pages: number;
  authors: Author | Author[];
}

const got: Book = {
  title: 'A Game of Thrones',
  pages: 694,
  authors: {
    name: "George R. R. Martin",
    age: 68
  }
}