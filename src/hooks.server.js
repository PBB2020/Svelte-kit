import fs from 'fs';
import path from 'path';

export async function handle ({ event, resolve }) {
    try {
        return await resolve (event);
    } catch (error) {
        if (error.status == 404) {
            const notFoundPage = fs.readFileSync(path.resolve('build/404.html'), 'utf-8');
            return new Response(notFoundPage, { status: 404, headers: { 'Content-Type': 'text/html' } });
        }

        console.error('Hiba történt:', error);
        return new Response('Egy hiba történt a kiszolgálás során.', {status: 500});
    }
}