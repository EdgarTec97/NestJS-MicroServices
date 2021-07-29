import { Controller, HttpStatus, Param, ParseUUIDPipe, Put } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { StudentsChange } from "../../../transactions/studentsPerTeachers/use-cases/student-change";
import { DocumentationTags, Endpoint } from "../../../utils/Endpoint";
import { FindStudentsResponseDTO } from "./dto/student.dto";

@Controller()
export class StudentsChangeController{
    constructor(private readonly studentChange: StudentsChange){}

    @Endpoint({
        status: HttpStatus.OK,
        type: FindStudentsResponseDTO,
        description: 'Update a Student of teacher',
        tags: [DocumentationTags.STUDENTS]
    })
    @ApiQuery({
        name: 'student id and teacher id',
        example: {studentId: '610165f719dba314d653c6e8', teacherID: '610165f719dba314d653c6e8'},
        required: true,
        description: 'Update a student of teacher'
    })
    @Put('/api/v1/:studentId/student/:teacherId')
    async execute(
        @Param('studentId') studentId: string,
        @Param('teacherId') teacherId: string
    ): Promise<FindStudentsResponseDTO | Observable<FindStudentsResponseDTO> | HttpStatus.INTERNAL_SERVER_ERROR >{
        return await this.studentChange.execute(studentId, teacherId);
    }
}