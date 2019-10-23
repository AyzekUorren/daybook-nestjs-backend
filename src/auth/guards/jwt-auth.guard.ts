import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        JwtAuthGuard.canLogin(context);
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        if (err || !user) {
            Logger.error(err, user, info);
            Logger.error('JwtAuthGuard->handleRequest: User not found');
            throw err || new UnauthorizedException('User not found');
        }
        return user;
    }

    private static canLogin(context: ExecutionContext) {
        const headers = this.getHeaders(context);
        Logger.debug(headers);
        if (headers && !headers.authorization) {
            Logger.error('JwtAuthGuard->init: authorization token not found');
            throw new UnauthorizedException('authorization token not found');
        }
    }

    private static getHeaders(context: ExecutionContext): any {
        let headers: any;
        const httpContext = context.switchToHttp();
        if (
            httpContext &&
            httpContext.getRequest() &&
            httpContext.getRequest().headers
        ) {
            headers = httpContext.getRequest().headers;
        }

        if (!headers) {
            return null;
        }

        return headers;
    }
}
