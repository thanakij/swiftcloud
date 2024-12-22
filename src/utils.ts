import type { ZodError } from 'zod'

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
