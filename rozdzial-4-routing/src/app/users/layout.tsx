export default function UsersLayout({
  children,
  stats,
  modal,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">{children}</div>
        <div>{stats}</div>
      </div>
        {modal}
    </div>
  );
}