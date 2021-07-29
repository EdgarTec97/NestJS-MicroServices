import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TEACHER_REPOSITORY_TOKEN } from "../../domain/TeachersRepository";
import { TeachersRepositoryMemory } from "./TeachersRepositoryMemory";

@Module({
    imports: [HttpModule],
    providers: [{
        provide: TEACHER_REPOSITORY_TOKEN,
        useClass: TeachersRepositoryMemory
    }],
    exports: [TEACHER_REPOSITORY_TOKEN]
})
export class TeachersRepositoryModule{}