import { HttpStatus, Injectable } from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { map, Observable } from "rxjs";
import { FindStudentsResponseDTO } from "src/api/v1/studentsPerTeachers/dto/student.dto";
import { StudentRepository } from "../../domain/StudentsRepository";

@Injectable()
export class studentRepositoryMemory implements StudentRepository{
    constructor(
        private httpService: HttpService
    ){}

    async getStudents(teacherId: string): Promise<FindStudentsResponseDTO[] | Observable<FindStudentsResponseDTO[]> | HttpStatus.INTERNAL_SERVER_ERROR >{
        try {
            const result = await this.httpService.get('http://localhost:4000/api/v1/students').toPromise();
            const findData = result.data.filter(student => student.teacherId == teacherId);
            return findData;
        } catch (error) {
            console.log(error);
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }

    async changeStudent(studentId: string, teacherId: string): Promise<FindStudentsResponseDTO | Observable<FindStudentsResponseDTO> | HttpStatus.INTERNAL_SERVER_ERROR >{
        try {
            return await this.httpService.put(`http://localhost:4000/api/v1/${studentId}/student/${teacherId}`).pipe(
                map(res => res.data)
            );
        } catch (error) {
            console.log(error);
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }
}