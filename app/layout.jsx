import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "VODirectory",
    description: "All you need as a VO, right here."
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body className='bg-slate-500 p-5'>
            <main className="app">
              <Nav></Nav>
              <section className="w-full flex flex-col items-center gap-5">
                {children}
              </section>
            </main>
        </body>
    </html>
  )
}

export default RootLayout