import { Module } from '@nestjs/common';
import { StudentsChangeController } from 'src/api/v1/studentsPerTeachers/StudentsChangeController';
import { StudentsController } from 'src/api/v1/studentsPerTeachers/StudentsController';
import { StudentsPerTeacherRepositoryModule } from './infrastructure/repositories/students-per-teacher-repository.module';
import { StudentsChange } from './use-cases/student-change';
import { StudentList } from './use-cases/student-list';

@Module({
    imports: [StudentsPerTeacherRepositoryModule],
    controllers: [
        StudentsController,
        StudentsChangeController
    ],
    providers: [
        StudentList,
        StudentsChange
    ],
})
export class StudentsPertTeacherModule {}
