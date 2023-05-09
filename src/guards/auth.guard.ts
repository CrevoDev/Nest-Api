import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from '../controllers/auth/constants';
import { IS_PUBLIC_KEY } from '../decorators/auth.decorator';

interface IUser {
    username: string,
    sub: string,
    role: string
}

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private jwt: JwtService,
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
          ]);
        if (isPublic)
          return true
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        const request = context.switchToHttp().getRequest()
        const token = this.extractTokenFromHeader(request);
        let user : IUser
        if (!token) throw new UnauthorizedException()
        try {
            const payload = await this.jwt.verifyAsync(
                token,
                {
                    secret: jwtConstants.secret
                }
            );

            request['user'] = payload;
            user = request.user
        } catch {
            throw new UnauthorizedException()
        }

        if ((!roles && token) || roles.includes(user.role))
            return true
        throw new UnauthorizedException()
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}