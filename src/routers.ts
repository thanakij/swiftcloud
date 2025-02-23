import type { ResponseConfig } from '@asteasolutions/zod-to-openapi'

import { createRoute as _createRoute } from '@hono/zod-openapi'

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options' | 'trace'

export function createRoute<
  RequestSchema extends object,
  ResponsesSchema extends { [statusCode: number]: ResponseConfig },
>(
  method: Method,
  path: string,
  request: RequestSchema,
  responses: ResponsesSchema,
) {
  const tags = [path.split('/')[1] ?? '']
  const route = _createRoute({ method, path, request, responses, tags })
  return route
}

export function GET<
  RequestSchema extends object,
  ResponsesSchema extends { [statusCode: number]: ResponseConfig },
>(path: string, request: RequestSchema, responses: ResponsesSchema) {
  return createRoute('get', path, request, responses)
}

export function POST<
  RequestSchema extends object,
  ResponsesSchema extends { [statusCode: number]: ResponseConfig },
>(path: string, request: RequestSchema, responses: ResponsesSchema) {
  return createRoute('post', path, request, responses)
}

export function PUT<
  RequestSchema extends object,
  ResponsesSchema extends { [statusCode: number]: ResponseConfig },
>(path: string, request: RequestSchema, responses: ResponsesSchema) {
  return createRoute('put', path, request, responses)
}

export function DELETE<
  RequestSchema extends object,
  ResponsesSchema extends { [statusCode: number]: ResponseConfig },
>(path: string, request: RequestSchema, responses: ResponsesSchema) {
  return createRoute('delete', path, request, responses)
}
