import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { STUDENTS_REPOSITORY_TOKEN } from "../../domain/StudentsRepository";
import { StudentsRepositoryMemory } from "./StudentsRepositoryMemory";

@Module({
    imports: [HttpModule],
    providers: [{
        provide: STUDENTS_REPOSITORY_TOKEN,
        useClass: StudentsRepositoryMemory
    }],
    exports: [STUDENTS_REPOSITORY_TOKEN]
})
export class StudentsRepositoryModule{}