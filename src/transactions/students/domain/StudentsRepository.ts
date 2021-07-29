import { HttpStatus } from "@nestjs/common";
import { Observable } from "rxjs";

export const STUDENTS_REPOSITORY_TOKEN = 'StudentsRepositoryToken';

export interface StudentsRepository{
    deleteStudent(studentId: string, jwt: string): Promise<string | HttpStatus.INTERNAL_SERVER_ERROR | Observable<string>>;
}