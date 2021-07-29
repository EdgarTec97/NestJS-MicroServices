export enum Role {
    STUDENT = 'STUDENT',
    ALLOW_SET_PASSWORD = 'ALLOW_SET_PASSWORD',
    REGISTER_ALLOWED = 'REGISTER_ALLOWED',
    LOGIN_ALLOWED = 'LOGIN_ALLOWED',
    STUDENT_DEMO = 'STUDENT_DEMO',
    MANAGER = 'MANAGER',
    EMAIL_VERIFY = 'EMAIL_VERIFY',
    REFRESH_TOKEN = 'REFRESH_TOKEN',
    FINANCES_MANAGER = 'FINANCES_MANAGER'
}

export type StudentRole = Role.STUDENT | Role.STUDENT_DEMO;

export const ALL_ROLES = Object.values(Role);

export const MANAGERS = [Role.MANAGER, Role.FINANCES_MANAGER];

export const STUDENTS = [Role.STUDENT, Role.STUDENT_DEMO];