import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'keiz',
      database: 'language_app',
      entities: [User],
      synchronize: true,
      logging: true
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

