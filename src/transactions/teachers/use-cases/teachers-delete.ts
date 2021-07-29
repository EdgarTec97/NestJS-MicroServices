import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { TeacherRepository, TEACHER_REPOSITORY_TOKEN } from "../domain/TeachersRepository";

@Injectable()
export class TeachersDelete{
    constructor(
        @Inject(TEACHER_REPOSITORY_TOKEN) private readonly teacherRepository: TeacherRepository
    ){}
    async execute(teacherId: string, jwt: string): Promise<string | HttpStatus.INTERNAL_SERVER_ERROR | Observable<string>>{
        return await this.teacherRepository.deleteTeacher(teacherId,jwt);
    }   
}