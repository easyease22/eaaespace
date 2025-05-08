
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

module.exports = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Missing code" });
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "查詢代碼",
        text: {
          equals: code
        }
      }
    });

    if (response.results.length === 0) {
      return res.status(404).json({ error: "No reply found" });
    }

    const page = response.results[0];
    const replyProperty = page.properties["回覆內容"];
    const reply = replyProperty?.rich_text?.[0]?.plain_text || "（尚未填寫回覆內容）";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Notion query error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
