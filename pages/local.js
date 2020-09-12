import { NotionRenderer } from "react-notion";
import Head from "next/head";
import fetch from "node-fetch";

const NOTION_PAGE_ID = "f4de11857b8549ad87f27fb5b52cea6d";

export async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/page/191ae871606f4e47b3cacb0cd3313e0f"
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

function Home({ blockMap }) {
  return (
    <div
      style={{
        maxWidth: 768,
      }}
    >
      <NotionRenderer blockMap={blockMap} />
    </div>
  );
}

export default Home;
