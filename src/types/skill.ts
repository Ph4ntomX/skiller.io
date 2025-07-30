export interface Skill {
  id: string
  name: string
  description: string
  category: string
  progress: number // 0-100
  targetDate?: string
  createdAt: string
  updatedAt: string
  status: 'not-started' | 'in-progress' | 'completed'
}

export interface SkillCategory {
  id: string
  name: string
  color: string