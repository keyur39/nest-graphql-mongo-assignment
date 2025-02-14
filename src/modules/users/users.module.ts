import { Module } from '@nestjs/common';
import { ShareServiceModule } from '../../shared/share-service.module';
import { UsersResolver } from './resolvers/user.resolver';

@Module({
  imports: [ShareServiceModule],
  providers: [UsersResolver],
})
export class UsersModule {}
