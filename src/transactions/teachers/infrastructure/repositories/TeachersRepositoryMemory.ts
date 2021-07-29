import { HttpService } from "@nestjs/axios";
import { HttpStatus, Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { TeacherRepository } from "../../domain/TeachersRepository";

@Injectable()
export class TeachersRepositoryMemory implements TeacherRepository{
    constructor(
        private httpService: HttpService
    ){}
    async deleteTeacher(teacherId: string, jwt: string): Promise<string | HttpStatus.INTERNAL_SERVER_ERROR | Observable<string>> {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': jwt
            }  
            return await this.httpService.delete(`http://localhost:4000/api/v1/teacher/${teacherId}`,{headers}).pipe(
                map(res => res.data)
            );
        } catch (error) {
            console.log(error);
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }

}