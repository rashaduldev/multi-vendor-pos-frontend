import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <Link href="/dashboard">
          <p className="p-2 hover:bg-gray-700 rounded">Dashboard</p>
        </Link>
        <Link href="/dashboard/inventory">
          <p className="p-2 hover:bg-gray-700 rounded">Inventory</p>
        </Link>
        <Link href="/dashboard/pos">
          <p className="p-2 hover:bg-gray-700 rounded">POS</p>
        </Link>
        <Link href="/dashboard/vendors">
          <p className="p-2 hover:bg-gray-700 rounded">Vendors</p>
        </Link>
      </nav>
    </div>
  );
}
