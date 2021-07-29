import { HttpStatus } from "@nestjs/common";
import { Observable } from "rxjs";

export const TEACHER_REPOSITORY_TOKEN = 'TeacherRepositoryToken';

export interface TeacherRepository{
    deleteTeacher(teacherId: string, jwt: string): Promise<string | HttpStatus.INTERNAL_SERVER_ERROR | Observable<string>>;
}