import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { SignUpRequestDto } from '@modules/auth/dto';

export class UserRepository {
  constructor(
    @InjectModel(User)
    private readonly user: typeof User,
  ) {}

  async findOneEmail(email: string): Promise<User> {
    return await this.user.findOne({
      where: {
        email,
      },
      nest: true,
      raw: true,
    });
  }

  async findOnePhone(phone: string): Promise<User> {
    return await this.user.findOne({
      where: {
        phone,
      },
      nest: true,
      raw: true,
    });
  }

  async create(data: SignUpRequestDto): Promise<User> {
    return await this.user.create({ ...data });
  }
}
