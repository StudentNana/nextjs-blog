import "../styles/globals.css"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const header = (
        <header>
            <div className='text-center my-5 '>
                <p className="text-3xl text-blue-500">  Test Deploying Next.js App to Vercel </p>
            </div>
        </header>
    );

    const footer = (
        <footer>
            <div>
                <p>footer</p>
            </div>
        </footer>
    );

    return (
        <html>
            <head />
            <body>
                <div className='mx-auto max-w-2xl px-6'>
                    {header}
                    {children}
                </div>
            </body>
        </html>
    )
}