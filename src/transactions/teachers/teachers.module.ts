import { Module } from "@nestjs/common";
import { TeachersDeleteController } from "src/api/v1/teachers/TeachersDeleteController";
import { JWT_SERVICE_TOKEN } from "../shared/services/jwt/domain/JwtService";
import { JwtServiceNest } from "../shared/services/jwt/infrastructure/JwtServiceNest";
import { TeachersRepositoryModule } from "./infrastructure/repositories/teachers-repository.module";
import { TeachersDelete } from "./use-cases/teachers-delete";

@Module({
    imports: [TeachersRepositoryModule],
    controllers: [TeachersDeleteController],
    providers: [
        TeachersDelete,
        {
            provide: JWT_SERVICE_TOKEN,
            useClass: JwtServiceNest
        }
    ]
})
export class TeachersModule{}