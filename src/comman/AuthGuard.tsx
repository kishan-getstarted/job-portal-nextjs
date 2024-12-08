import { useSession } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { JSX, useEffect } from 'react';

const PUBLIC_ROUTES = [
    '/',
    '/login',
    '/sign-in',
    '/sign-up',
];

type Props = {
    children: JSX.Element | JSX.Element[];
};

export default function AuthGuard({ children }: Props) {
    const router = useRouter();
    const { isSignedIn, isLoaded } = useSession();
    
    const isPublicRoute = PUBLIC_ROUTES.some(route => {
        if (router.pathname.startsWith('/sign-in/') || 
            router.pathname.startsWith('/sign-up/')) {
            return true;
        }
        const routePattern = new RegExp(
            `^${route.replace(/\[.*?\]/g, '[^/]+')}$`
        );
        return routePattern.test(router.pathname);
    });

    useEffect(() => {
        if (isLoaded && !isSignedIn && !isPublicRoute) {
            router.push('/sign-in');
        }
    }, [isLoaded, isSignedIn, isPublicRoute, router]);

    if (!isLoaded) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (isPublicRoute) {
        return <>{children}</>;
    }

    if (!isSignedIn) {
        return (
            <div className="flex justify-center items-center h-screen">
                Redirecting to login...
            </div>
        );
    }

    return <>{children}</>;
}