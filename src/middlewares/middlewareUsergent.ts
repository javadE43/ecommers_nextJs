import { NextRequest, NextFetchEvent, NextMiddleware, NextResponse, userAgent } from 'next/server';

export function middlewareUserAgent(middleware: NextMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent) => {
        // Parse user agent
        const { device, cpu, engine, browser, isBot, os, ua } = userAgent(request);

        // Check the viewport
        const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

        // Update the expected url
        request.nextUrl.pathname = `_viewport/${viewport}`;
        const result = {
            device,
            cpu,
            engine,
            browser,
            isBot,
            os,
            ua,
        };
        console.log(viewport);
        console.log(result);
        console.log(request.nextUrl.pathname);
        // Return rewrited response
        return middleware(request, event);
    };
}
