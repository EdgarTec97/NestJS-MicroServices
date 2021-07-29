import { Module } from "@nestjs/common";
import { HttpModule } from '@nestjs/axios';
import { STUDENT_REPOSITORY_TOKEN } from "../../domain/StudentsRepository";
import { studentRepositoryMemory } from "./StudentRepositoryMemory";

@Module({
    imports: [HttpModule],
    providers: [{
        provide: STUDENT_REPOSITORY_TOKEN,
        useClass: studentRepositoryMemory
    }],
    exports: [STUDENT_REPOSITORY_TOKEN]
})
export class StudentsPerTeacherRepositoryModule{}