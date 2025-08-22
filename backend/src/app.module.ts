import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EnviosModule } from './envios/envios.module';
import { MateriaisModule } from './materiais/materiais.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    EnviosModule,
    MateriaisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
