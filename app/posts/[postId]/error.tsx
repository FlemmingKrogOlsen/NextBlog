'use client'; // Error components must be Client components

import { useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/error.module.css'

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
        <main className={styles.main}>
            <h2 className={styles.header}>Something went wrong!</h2>
            <p className={styles.text}>
                Or go back to <Link href="/">Home 🏠</Link>
            </p>
        </main>
    );
}