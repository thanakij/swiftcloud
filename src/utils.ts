import type { Column } from 'drizzle-orm'
import type { ZodError } from 'zod'

import { asc, desc } from 'drizzle-orm'

type FormattedErrors = {
  [key: string]: string[];
}

export function formatZodErrors(error: ZodError): string[] {
  const formattedErrors: FormattedErrors = {}
  for (const issue of error.issues) {
    const path = issue.path.join('.') || 'root'
    if (!formattedErrors[path]) {
      formattedErrors[path] = []
    }
    formattedErrors[path].push(issue.message)
  }
  return Object.keys(formattedErrors).map((path) => `[${path}] ${formattedErrors[path]}`)
}

type SchemaType = Record<string, Column>
type SortedField = ReturnType<typeof desc>

export function getOrderBy(schema: SchemaType, sort: string | null): SortedField[] {
  if (!sort) return [asc(schema['id'])] // default is to sort by 'id' column
  const sortFields: SortedField[] = []
  for (const each of sort.split(',')) {
    if (!each) continue
    const f = each[0] === '-' ? desc : asc
    sortFields.push(f(schema[each.replace('-', '')]))
  }
  return sortFields
}
