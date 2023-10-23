'use client'; // Error components must be Client components

import { useEffect } from 'react';
import Link from 'next/link';
import { Header, Main, Text } from '@/styles/ErrorStyle';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <Main>
            <Header>Something went wrong!</Header>
            <Text>
                Or go back to <Link href="/">Home 🏠</Link>
            </Text>
        </Main>
    );
}