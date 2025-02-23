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

export function getOrderBy(schema: SchemaType, sort: string | null, columnMap?: Record<string, string>): SortedField[] {
  if (!sort) return []
  const sortFields: SortedField[] = []
  for (const each of sort.split(',')) {
    if (!each) continue
    const f = each[0] === '-' ? desc : asc
    const key = each.replace('-', '').trim()
    if (!key) continue
    const mappedKey = columnMap ? (columnMap[key] ?? key) : key
    if (!mappedKey || !(mappedKey in schema)) continue
    const column = schema[mappedKey]
    if (column) sortFields.push(f(column))
  }
  return sortFields
}
