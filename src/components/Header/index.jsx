export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b px-8 py-4">
      <h1 className="text-2xl font-bold">Apple</h1>
      <div className="flex gap-2">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </header>
  );
};
