import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
	try {
		const { id } = params;
		const article = await prisma.article.findUnique({
			where: { id },
		});
		return NextResponse.json(
			{
				code: 200,
				message: null,
				error: false,
				data: article,
			},
			{ status: 200 }
		);
	} catch (error) {
    return NextResponse.json(
      { code: 400, message: null, error: true },
      { status: 400 }
    );
	}
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
	try {
		const { id } = params;
		const body = await request.json();
		const updateArticle = await prisma.article.update({
			where: { id },
			data: body,
		});
		return NextResponse.json(
			{
				code: 200,
				message: 'Articulo actualizado con exito!.',
				error: false,
				data: updateArticle,
			},
			{ status: 200 }
		);
	} catch (error) {
    return NextResponse.json(
      { code: 400, message: null, error: true },
      { status: 400 }
    );
	}
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
	try {
		const { id } = params;
		const deleteArticle = await prisma.article.delete({
			where: { id },
		});
		return NextResponse.json(
			{
				code: 200,
				message: 'Articulo eliminado con exito!.',
				error: false,
				data: deleteArticle,
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
