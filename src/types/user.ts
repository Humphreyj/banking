export interface User {
    id: string
    email: string
    name: {
        first: string
        last: string
    }
    profileImage?: string
    createdAt: Date
    updatedAt: Date
    isActive: boolean
    isAdmin: boolean
}
