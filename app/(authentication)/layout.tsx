export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex justify-center items-center">
      <main className="flex-1">{children}</main>
    </div>
  );
}
