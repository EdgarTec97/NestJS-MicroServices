import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { StudentsRepository, STUDENTS_REPOSITORY_TOKEN } from "../domain/StudentsRepository";

@Injectable()
export class StudentsDelete{
    constructor(
        @Inject(STUDENTS_REPOSITORY_TOKEN) private readonly studentsRepository: StudentsRepository
    ){}
    async execute(studentId: string,headers: string): Promise<string | HttpStatus.INTERNAL_SERVER_ERROR | Observable<string>>{
        return await this.studentsRepository.deleteStudent(studentId, headers);
    }
}