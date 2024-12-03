export default function AuthRootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Auth Domain</h1>
                {children}
            </body>
        </html>
    );
}