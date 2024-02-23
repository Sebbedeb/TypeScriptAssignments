import mongoose from "mongoose";

interface Book extends mongoose.Document {
  title: string;
  author: Author; // Assuming Author is another Mongoose model
  library: Library;
  pages: number;
  genre: string;
  createdAt: Date;
}

interface Author extends mongoose.Document {
  name: string;
  age: number;
  books: Book[];
  createdAt: Date;
}

interface Library extends mongoose.Document {
  name: string;
  books: Book[];
  createdAt: Date;
}



async function main() {
  await mongoose.connect("mongodb+srv://Sebbedeb:DetteErEnKode@cluster0.xi8mejd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  const librarySchema = new mongoose.Schema({
    name: { type: String, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
    createdAt: { type: Date, default: Date.now },
  });

  const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
    createdAt: { type: Date, default: Date.now },
  });

  const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
    library: { type: mongoose.Schema.Types.ObjectId, ref: "Library" },
    pages: { type: Number, required: true },
    genre: {
      type: String,
      enum: [
        "fiction",
        "non-fiction",
        "fantasy",
        "mystery",
        "thriller",
        "romance",
        "biography",
        "history",
        "science",
        "other",
      ],
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
  });
  authorSchema.pre("save", function (next) {
    this.createdAt = new Date();
    next();
});

bookSchema.pre("save", function (next) {
    this.createdAt = new Date();
    next();
});

librarySchema.pre("save", function (next) {
    this.createdAt = new Date();
    next();
});

  try {
    const AuthorModel = mongoose.model<Author>("Author", authorSchema);
    const BookModel = mongoose.model<Book>("Book", bookSchema);
    const LibraryModel = mongoose.model<Library>("Library", librarySchema);

        await Promise.all([
            BookModel.deleteMany({}),
            AuthorModel.deleteMany({}),
            LibraryModel.deleteMany({}),
            console.log("Cleared the database")
        ]);

    const theLibrary = new LibraryModel({
      name: "The Best Library",
      books: [],
    });

    const theAuthor = new AuthorModel({
      name: "John Doe",
      age: 25,
      books: [],
    });

    const theFirstBook = new BookModel({
      title: "The First Book",
      author: theAuthor._id,
        library: theLibrary._id,
        pages: 250,
        genre: "fiction",
    });

    const TheSecondBook = new BookModel({
        title: "The Second Book",
        pages: 250,
        genre: "fiction",
    });

    /* use the pre middleware to add the current date to the createdAt property of the all the models before saving it to the database. */






    await theLibrary.save();
    await theAuthor.save();
    await theFirstBook.save();
    await TheSecondBook.save();

    const foundLibrary = await LibraryModel.findOne({ name: "The Best Library" }) as Library;
    const foundAuthor = await AuthorModel.findOne({ name: "John Doe" }) as Author;
    const foundBook1 = await BookModel.findOne({ title: "The First Book" }) as Book;
    const foundBook2 = await BookModel.findOne({ title: "The Second Book" }) as Book;


    async function addBookToAuthor(authorId: string, bookId: string) {
        const author = await AuthorModel.findById(authorId);
        const book = await BookModel.findById(bookId);
    
        if (!author || !book) {
            throw new Error("Author or book not found");
        }
        if (book.author) {
            throw new Error("Book already has an author");
        }
        author.books.push(book);
        book.author = author;
    
        await author.save();
        await book.save();
    
        return author;
    }
    

      /* The same logic as the previous step, but now for the library and the book. */

      async function addBookToLibrary(libraryId: string, bookId: string) {
        const library = await LibraryModel.findById(libraryId);
        const book = await BookModel.findById(bookId);
    
        if (!library || !book) {
            throw new Error("Library or book not found");
        }
        if (book.library) {
            throw new Error("Book already belongs to a library");
        }
    
        library.books.push(book);
        book.library = library;
    
        await Promise.all([
            library.save(),
            book.save()
        ]);
    
        return library;
    }
    

    const updatedAuthor = await addBookToAuthor(foundAuthor._id, foundBook2._id);
    const updatedLibrary = await addBookToLibrary(foundLibrary._id, foundBook2._id);




  } catch (error) {
    console.error("Error connecting to database:", error);
  } finally {
    mongoose.disconnect();
  }
}

main();
