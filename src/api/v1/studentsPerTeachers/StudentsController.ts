import { Controller,Get, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { StudentList } from "../../../transactions/studentsPerTeachers/use-cases/student-list";
import { DocumentationTags, Endpoint } from "../../../utils/Endpoint";
import { FindStudentsResponseDTO } from "./dto/student.dto";

@Controller()
export class StudentsController{
    constructor(private readonly studentList: StudentList){}

    @Endpoint({
        status: HttpStatus.OK,
        type: FindStudentsResponseDTO,
        isArray: true,
        description: 'Show a Student by teacher',
        tags: [DocumentationTags.STUDENTS]
    })
    @ApiQuery({
        name: 'teacher id',
        example: '610165f719dba314d653c6e8',
        required: true,
        description: 'Show a student by teacher'
    })
    @Get('/api/v1/students/:teacherId')
    async execute(
        @Param('teacherId') teacherId
    ): Promise<FindStudentsResponseDTO[] | Observable<FindStudentsResponseDTO[]> | HttpStatus.INTERNAL_SERVER_ERROR >{
        return await this.studentList.execute(teacherId);
    }
}