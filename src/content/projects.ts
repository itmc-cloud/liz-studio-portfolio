export type ProjectCategory =
  | 'Graphic design & branding'
  | 'Illustration'
  | 'Photography'

export interface PortfolioProject {
  id: string
  title: string
  category: ProjectCategory
  description: string
  coverStyle: 'identity' | 'illustration' | 'photography'
  year?: string
  coverImage?: string
  gallery?: string[]
}

export const projects: PortfolioProject[] = [
  {
    id: 'graphic-design-placeholder',
    title: 'Project placeholder',
    category: 'Graphic design & branding',
    description:
      'Placeholder artwork — replace with an authorized graphic design or branding project.',
    coverStyle: 'identity',
  },
  {
    id: 'illustration-placeholder',
    title: 'Project placeholder',
    category: 'Illustration',
    description:
      'Placeholder artwork — replace with an original illustration supplied for the portfolio.',
    coverStyle: 'illustration',
  },
  {
    id: 'photography-placeholder',
    title: 'Project placeholder',
    category: 'Photography',
    description:
      'Placeholder artwork — replace with an authorized photograph supplied for the portfolio.',
    coverStyle: 'photography',
  },
]
