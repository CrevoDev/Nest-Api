import { SetMetadata } from '@nestjs/common';

// USER ROLE
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// PUBLIC ROUTE
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);