import { Module } from "@nestjs/common";
import { StudentsDeleteController } from "src/api/v1/students/StudentsDeleteController";
import { JWT_SERVICE_TOKEN } from "../shared/services/jwt/domain/JwtService";
import { JwtServiceNest } from "../shared/services/jwt/infrastructure/JwtServiceNest";
import { StudentsRepositoryModule } from "./infrastructure/repositories/students-repository.module"; 
import { StudentsDelete } from "./use-cases/students-delete";

@Module({
    imports: [StudentsRepositoryModule],
    controllers: [StudentsDeleteController],
    providers: [
        StudentsDelete,
        {
            provide: JWT_SERVICE_TOKEN,
            useClass: JwtServiceNest
        }
    ]
})
export class StudentsModule{}