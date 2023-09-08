import { OpenAIEdgeStream } from "openai-edge-stream";

export const config = {
  runtime: "edge",
};

export default async function handler(req: {
  json: PromiseLike<{ messages: any }> | { messages: any };
}) {
  try {
    const { message }: any = await req.json;
    const stream = await OpenAIEdgeStream(
      "https://api.openai.com/v1/chat/completions",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        method: "POST",
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ content: message, role: "user" }],
          stream: true,
        }),
      }
    );
    return new Response(stream);
  } catch (e) {
    console.error(e);
  }
}
