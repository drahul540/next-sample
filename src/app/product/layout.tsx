
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
        <h2 className='text-center text-3xl mt-4'>Product Page</h2>
        {children}
        </>
  );
}
