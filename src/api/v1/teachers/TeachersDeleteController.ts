import { Controller, Delete, Headers, HttpStatus, Param } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { STUDENTS } from "../../../transactions/shared/services/jwt/domain/Role";
import { GuardWithJwt } from "../../../transactions/shared/services/jwt/infrastructure/JwtAuthGuard";
import { TeachersDelete } from "../../../transactions/teachers/use-cases/teachers-delete";
import { DocumentationTags, Endpoint } from "../../../utils/Endpoint";
import { FindStudentsResponseDTO } from "../studentsPerTeachers/dto/student.dto";

@Controller()
export class TeachersDeleteController{
    constructor(private readonly teachersDelete: TeachersDelete){}

    @Endpoint({
        status: HttpStatus.OK,
        type: FindStudentsResponseDTO,
        description: 'Delete a teacher',
        tags: [DocumentationTags.STUDENTS]
    })
    @ApiQuery({
        name: 'teacher id',
        example: '610165f719dba314d653c6e8',
        required: true,
        description: 'Delete teacher'
    })
    @GuardWithJwt(STUDENTS)
    @Delete('api/v1/teacher/:teacherId')
    async execute(
        @Param('teacherId') teacherId: string,
        @Headers('authorization') headers
    ): Promise<string | HttpStatus.INTERNAL_SERVER_ERROR | Observable<string>>{
        return await this.teachersDelete.execute(teacherId,headers);
    }
}