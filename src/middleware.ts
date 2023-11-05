import { chain } from './middlewares/chain';
import { middlewareUserAgent } from './middlewares/middlewareUsergent';

export default chain([middlewareUserAgent]);

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
