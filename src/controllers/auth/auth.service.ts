import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwt: JwtService
    ) {}

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.usersService.getOne(email)
        if (!await bcrypt.compare(pass, user.password))
            throw new UnauthorizedException();
        const payload = { username: user.email, sub: user._id, role: user.role }
        return {
            acess_token: await this.jwt.signAsync(payload)
        }
    }
}
