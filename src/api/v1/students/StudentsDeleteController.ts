import { Controller, HttpStatus, Param, Delete, Headers } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { STUDENTS } from "../../../transactions/shared/services/jwt/domain/Role";
import { GuardWithJwt } from "../../../transactions/shared/services/jwt/infrastructure/JwtAuthGuard";
import { StudentsDelete } from "../../../transactions/students/use-cases/students-delete";
import { DocumentationTags, Endpoint } from "../../../utils/Endpoint";
import { FindStudentsResponseDTO } from "../studentsPerTeachers/dto/student.dto";

@Controller()
export class StudentsDeleteController {
    constructor(private readonly studentsDelete: StudentsDelete){}

    @Endpoint({
        status: HttpStatus.OK,
        type: FindStudentsResponseDTO,
        description: 'Delete a Student',
        tags: [DocumentationTags.STUDENTS]
    })
    @ApiQuery({
        name: 'student id',
        example: '610165f719dba314d653c6e8',
        required: true,
        description: 'Delete student'
    })
    @GuardWithJwt(STUDENTS)
    @Delete('/api/v1/student/:studentId')
    async execute(
        @Param('studentId') studentId: string,
        @Headers('authorization') headers
    ): Promise<string | HttpStatus.INTERNAL_SERVER_ERROR | Observable<string>>{
        return await this.studentsDelete.execute(studentId,headers);
    }
}