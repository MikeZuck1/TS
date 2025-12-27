interface Author {
  name: string;
  email: string;
  bio?: string;
}

interface Article {
  title: string;
  content: string;
  author: Author;
  publicationDate: Date;
  tags: string[];
}

// interface Comment extends Article {}

