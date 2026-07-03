const kpis = [
  { label: "総Cost（当月）", value: "¥12,500,000" },
  { label: "総CV（当月）", value: "2,650件" },
  { label: "平均CPA", value: "¥4,717" },
  { label: "CPA超過案件数", value: "2件", danger: true },
  { label: "進行案件数", value: "6件" },
  { label: "昨日Cost", value: "¥410,000" },
  { label: "昨日CV", value: "88件" },
  { label: "昨日CPA", value: "¥4,659" },
];

const projects = [
  { name: "ABCコスメ 新規獲得キャンペーン", owner: "佐藤 花子", cost: "¥2,100,000", cpa: "¥4,375", over: false },
  { name: "フィットネスアプリ DL訴求", owner: "鈴木 一郎", cost: "¥1,750,000", cpa: "¥4,605", over: true },
  { name: "オンライン英会話 無料体験", owner: "山田 次郎", cost: "¥1,400,000", cpa: "¥6,666", over: true },
  { name: "不動産投資セミナー集客", owner: "佐藤 花子", cost: "¥980,000", cpa: "¥8,888", over: false },
];

export default function TeamKpiPage() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }} className="min-h-screen bg-slate-50">
      <h1 className="mb-6 text-lg font-semibold text-slate-900">チーム全体KPI進捗</h1>

      {/* KPIカード */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs text-slate-500">{k.label}</p>
            <p className={"mt-2 text-2xl font-semibold " + (k.danger ? "text-rose-600" : "text-slate-900")}>
              {k.value}
            </p>
          </div>
        ))}
      </div>

      {/* 案件一覧 */}
      <p className="mb-3 text-sm font-semibold text-slate-800">案件一覧</p>
      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs text-slate-500">
            <tr>
              <th className="px-3 py-2 text-left">案件名</th>
              <th className="px-3 py-2 text-left">担当者</th>
              <th className="px-3 py-2 text-right">実Cost</th>
              <th className="px-3 py-2 text-right">CPA</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.name} className="border-t border-slate-100">
                <td className="max-w-[220px] truncate px-3 py-2.5 font-medium">{p.name}</td>
                <td className="px-3 py-2.5 text-slate-500">{p.owner}</td>
                <td className="px-3 py-2.5 text-right">{p.cost}</td>
                <td className={"px-3 py-2.5 text-right font-medium " + (p.over ? "text-rose-600" : "")}>
                  {p.cpa}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
