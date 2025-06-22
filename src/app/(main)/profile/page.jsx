"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { User, FileText, History } from "lucide-react";

const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  balance: "$1,250.00",
};

const mockBets = [
  { id: 1, game: "Soccer", amount: "$50", status: "Won", date: "2024-06-01" },
  { id: 2, game: "Cricket", amount: "$30", status: "Lost", date: "2024-05-28" },
  { id: 3, game: "Tennis", amount: "$20", status: "Pending", date: "2024-05-25" },
];

const mockStatements = [
  { id: 1, type: "Deposit", amount: "$500", date: "2024-05-20" },
  { id: 2, type: "Bet Win", amount: "$100", date: "2024-05-21" },
  { id: 3, type: "Withdrawal", amount: "$200", date: "2024-05-22" },
];

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState("account");

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab') || 'account';
    setTab(tabFromUrl);
  }, [searchParams]);

  return (
    <div className="max-w-4xl mx-auto mt-4 md:mt-10 p-4 md:p-6 bg-gradient-to-br from-[#23234b]/90 to-[#1a1a2e]/80 rounded-3xl shadow-xl border-2 border-[var(--highlight)]">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        <button onClick={() => setTab("account")}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl font-bold transition text-sm sm:text-base ${tab === "account" ? "bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] text-white shadow-md" : "bg-white/10 border border-[var(--highlight)] text-[var(--highlight)]"}`}
        >
          <User /> Account
        </button>
        <button onClick={() => setTab("bet-history")}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl font-bold transition text-sm sm:text-base ${tab === "bet-history" ? "bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] text-white shadow-md" : "bg-white/10 border border-[var(--highlight)] text-[var(--highlight)]"}`}
        >
          <History /> Bet History
        </button>
        <button onClick={() => setTab("account-statement")}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl font-bold transition text-sm sm:text-base ${tab === "account-statement" ? "bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] text-white shadow-md" : "bg-white/10 border border-[var(--highlight)] text-[var(--highlight)]"}`}
        >
          <FileText /> Account Statement
        </button>
      </div>
      {tab === "account" && (
        <div className="text-white space-y-4">
          <h2 className="text-2xl font-bold mb-2">Account Info</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <User className="w-16 h-16 bg-gradient-to-br from-[var(--highlight)] to-[var(--accent)] text-white rounded-full p-2" />
            <div>
              <div className="font-bold text-xl">{mockUser.name}</div>
              <div className="text-base text-gray-300">{mockUser.email}</div>
              <div className="text-lg mt-2">Balance: <span className="font-bold text-[var(--highlight)]">{mockUser.balance}</span></div>
            </div>
          </div>
        </div>
      )}
      {(tab === "bet-history" || tab === "account-statement") && (
        <div className="overflow-x-auto text-white">
          <h2 className="text-2xl font-bold mb-4">{tab === 'bet-history' ? 'Bet History' : 'Account Statement'}</h2>
          <table className="w-full min-w-[500px] text-left bg-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="text-[var(--highlight)]">
                {tab === 'bet-history' ? 
                  (<>
                    <th className="py-2 px-3">Game</th>
                    <th className="py-2 px-3">Amount</th>
                    <th className="py-2 px-3">Status</th>
                  </>) : 
                  (<>
                    <th className="py-2 px-3">Type</th>
                    <th className="py-2 px-3">Amount</th>
                  </>)
                }
                <th className="py-2 px-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {(tab === 'bet-history' ? mockBets : mockStatements).map(item => (
                <tr key={item.id} className="hover:bg-[var(--highlight)]/10">
                  {tab === 'bet-history' ?
                    (<>
                      <td className="py-2 px-3">{item.game}</td>
                      <td className="py-2 px-3">{item.amount}</td>
                      <td className="py-2 px-3">{item.status}</td>
                    </>) :
                    (<>
                      <td className="py-2 px-3">{item.type}</td>
                      <td className="py-2 px-3">{item.amount}</td>
                    </>)
                  }
                  <td className="py-2 px-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 