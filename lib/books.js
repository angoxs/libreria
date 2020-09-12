import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const booksDirectory = path.join(process.cwd(), "books");

export async function getBookData(id) {
  const fullPath = path.join(booksDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllBooksIds() {
  const fileNames = fs.readdirSync(booksDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

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
