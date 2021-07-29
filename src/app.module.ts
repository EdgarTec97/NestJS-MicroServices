import { Module } from '@nestjs/common';
import { StudentsModule } from './transactions/students/students.module';
import { StudentsPertTeacherModule } from './transactions/studentsPerTeachers/students-per-teacher'; 
import { TeachersModule } from './transactions/teachers/teachers.module';

@Module({
  imports: [
    StudentsPertTeacherModule,
    StudentsModule,
    TeachersModule
  ],
  providers: [],
})
export class AppModule {}
