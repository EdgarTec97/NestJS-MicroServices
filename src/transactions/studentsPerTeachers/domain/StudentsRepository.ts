import { HttpStatus } from "@nestjs/common";
import { Observable } from "rxjs";
import { FindStudentsResponseDTO } from "src/api/v1/studentsPerTeachers/dto/student.dto";

export const STUDENT_REPOSITORY_TOKEN = 'StudentRepositoryToken';

export interface StudentRepository{
    getStudents(teacherId: string): Promise<FindStudentsResponseDTO[] | Observable<FindStudentsResponseDTO[]> | HttpStatus.INTERNAL_SERVER_ERROR >;
    changeStudent(studentId: string,teacherId: string): Promise<FindStudentsResponseDTO | Observable<FindStudentsResponseDTO> | HttpStatus.INTERNAL_SERVER_ERROR >;
}