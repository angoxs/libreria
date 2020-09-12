import fs from "fs";
import path from "path";
import matter from "gray-matter";

const booksDirectory = path.join(process.cwd(), "books");

export function getSortedBooksData() {
  const fileNames = fs.readdirSync(booksDirectory);
  const allBooksData = fileNames.map((fileName) => {
    // Remueve '.md' del archivo para odtener id
    const id = fileName.replace(/\.md$/, "");

    // Lee markdown archivo como string
    const fullPath = path.join(booksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Usa gray-matter para parsar el post metadata
    const matterResult = matter(fileContents);

    // Combina la data con el id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sortea los posts por fecha
  return allBooksData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
