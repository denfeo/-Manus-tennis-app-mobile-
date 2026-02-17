import { User, Settings, CreditCard, HelpCircle, LogOut } from "lucide-react";

const menuItems = [
  { icon: User, label: "Личные данные" },
  { icon: CreditCard, label: "Оплата" },
  { icon: Settings, label: "Настройки" },
  { icon: HelpCircle, label: "Поддержка" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto px-4 pt-14 pb-24">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-3">
          <User size={32} className="text-muted-foreground" />
        </div>
        <h1 className="text-foreground text-lg font-bold">Александр</h1>
        <p className="text-muted-foreground text-sm">tennispro@mail.ru</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {[
          { value: "12", label: "Игр" },
          { value: "4.8", label: "Рейтинг" },
          { value: "3", label: "Месяца" },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-xl p-4 text-center">
            <p className="text-foreground text-xl font-bold">{s.value}</p>
            <p className="text-muted-foreground text-[10px]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="bg-card rounded-2xl overflow-hidden">
        {menuItems.map((item, i) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-secondary/50 transition-colors ${
              i !== menuItems.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <item.icon size={18} className="text-muted-foreground" />
            <span className="text-foreground text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 mt-6 py-3 text-accent text-sm font-semibold">
        <LogOut size={16} />
        Выйти
      </button>
    </div>
  );
};

export default Profile;
