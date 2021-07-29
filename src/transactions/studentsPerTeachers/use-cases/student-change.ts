import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { FindStudentsResponseDTO } from "src/api/v1/studentsPerTeachers/dto/student.dto";
import { StudentRepository, STUDENT_REPOSITORY_TOKEN } from "../domain/StudentsRepository";

@Injectable()
export class StudentsChange{
    constructor(@Inject(STUDENT_REPOSITORY_TOKEN) private studentRepository: StudentRepository){}
    async execute(studentId: string, teacherId: string): Promise<FindStudentsResponseDTO | Observable<FindStudentsResponseDTO> | HttpStatus.INTERNAL_SERVER_ERROR >{
        return await this.studentRepository.changeStudent(studentId, teacherId);
    }
}