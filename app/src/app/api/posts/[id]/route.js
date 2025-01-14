import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req, { params }) {
  return new Response(
    JSON.stringify(await prisma.post.findUnique({
      where: { id: Number(params.id) },
    }))
  )
}

export async function PUT(req, { params }) {
  try {
    const { title, content } = await req.json()
    return new Response(
      JSON.stringify(await prisma.post.update({
        where: { id: Number(params.id) },
        data: { title, content },
      }))
    )
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    return new Response(
      JSON.stringify(await prisma.post.delete({
        where: { id: Number(params.id) },
      }))
    )
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }
}
