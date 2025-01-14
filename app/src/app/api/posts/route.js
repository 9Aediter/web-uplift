import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  return Response.json(await prisma.post.findMany());
}

export async function POST(req) {
  try {
    const { title, content, userId } = await req.json();
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        userId,
        status: "DRAFT",
      },
    });
    return Response.json(newPost);
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}
