import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
	try {
		
		const articles = await prisma.article.findMany();
    return NextResponse.json(
      {
        code: 200,
        message: null,
        error: false,
        data: articles,
      },
      { status: 200 }
    );
	} catch (error) {
    return NextResponse.json(
      { code: 400, message: null, error: true, data: null },
      { status: 400 }
    );
	}
};

export const POST = async (request: NextRequest) => {
  try {
    const article = await request.json();
    const createArticle = await prisma.article.create({ data: article });
    return NextResponse.json(
      {
        code: 201,
        message: 'Articulo creado con exito!.',
        error: false,
        data: createArticle,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { code: 400, message: null, error: true, data: null },
      { status: 400 }
    );
  }
};
