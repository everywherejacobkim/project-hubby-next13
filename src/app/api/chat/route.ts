export async function POST(req: Request, res: Response) {
  const { body } = req;
  const { message } = body;

  const chat = await Chat.create({ message });

  res.status(200).json({ chat });
}

