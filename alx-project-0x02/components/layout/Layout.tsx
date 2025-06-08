import Link from 'next/link';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-xl font-semibold text-gray-900">
                            My App
                        </h1>
                        <nav>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a href="/about" className="text-gray-600 hover:text-gray-900">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            
            <footer className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-sm">
                        © 2024 My App. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;