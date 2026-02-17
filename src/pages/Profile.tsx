import { User, Settings, CreditCard, HelpCircle, LogOut, ChevronRight, Edit3, Award } from "lucide-react";

const menuItems = [
  { icon: User, label: "Личные данные", desc: "Имя, телефон, email" },
  { icon: CreditCard, label: "Оплата", desc: "Карты и история" },
  { icon: Award, label: "Абонементы", desc: "Ваши подписки" },
  { icon: Settings, label: "Настройки", desc: "Уведомления, язык" },
  { icon: HelpCircle, label: "Поддержка", desc: "Помощь 24/7" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto px-4 pt-14 pb-28">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-8 animate-fade-in">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center ring-4 ring-primary/20">
            <User size={36} className="text-foreground" />
          </div>
          <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 hover-scale">
            <Edit3 size={12} className="text-primary-foreground" />
          </button>
        </div>
        <h1 className="text-foreground text-xl font-black mt-4">Александр</h1>
        <p className="text-muted-foreground text-sm">tennispro@mail.ru</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2.5 mb-6">
        {[
          { value: "12", label: "Игр", icon: "🎾" },
          { value: "4.8", label: "Рейтинг", icon: "⭐" },
          { value: "3", label: "Месяца", icon: "📅" },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`bg-card rounded-2xl p-4 text-center hover-lift cursor-pointer opacity-0 animate-fade-in ${
              i === 0 ? "stagger-1" : i === 1 ? "stagger-2" : "stagger-3"
            }`}
          >
            <span className="text-lg">{s.icon}</span>
            <p className="text-primary text-xl font-black mt-1">{s.value}</p>
            <p className="text-muted-foreground text-[10px] font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="bg-card rounded-2xl overflow-hidden opacity-0 animate-fade-in stagger-4">
        {menuItems.map((item, i) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-4 text-left transition-all duration-200 hover:bg-primary/5 active:bg-primary/10 group ${
              i !== menuItems.length - 1 ? "border-b border-border/50" : ""
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <item.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="flex-1">
              <span className="text-foreground text-sm font-semibold block">{item.label}</span>
              <span className="text-muted-foreground text-[10px]">{item.desc}</span>
            </div>
            <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5" />
          </button>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 mt-6 py-3.5 rounded-2xl glass text-accent text-sm font-bold hover-scale opacity-0 animate-fade-in stagger-5">
        <LogOut size={16} />
        Выйти
      </button>
    </div>
  );
};

export default Profile;
