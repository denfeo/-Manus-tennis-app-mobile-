import { Calendar, MapPin, Clock, ChevronRight, Trophy } from "lucide-react";

const bookings = [
  { id: 1, court: "B2", location: "Каштановая аллея", date: "13 Янв, Пн", time: "12:30 - 13:30", price: "₽3 200", status: "Подтверждено" },
  { id: 2, court: "A1", location: "Каштановая аллея", date: "17 Янв, Пт", time: "15:00 - 16:00", price: "₽4 100", status: "Ожидание" },
  { id: 3, court: "C1", location: "Парковая ул.", date: "20 Янв, Пн", time: "10:00 - 11:00", price: "₽5 500", status: "Подтверждено" },
];

const Bookings = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto px-4 pt-14 pb-28">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 animate-fade-in">
        <div>
          <h1 className="text-foreground text-2xl font-black">Мои брони</h1>
          <p className="text-muted-foreground text-sm mt-0.5">Предстоящие игры</p>
        </div>
        <div className="glass w-10 h-10 rounded-full flex items-center justify-center hover-scale">
          <Trophy size={16} className="text-primary" />
        </div>
      </div>

      {/* Stats bar */}
      <div className="glass rounded-2xl p-4 flex justify-around mb-6 opacity-0 animate-fade-in stagger-1">
        {[
          { value: "3", label: "Активных" },
          { value: "12", label: "Всего" },
          { value: "₽12.8к", label: "Потрачено" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-primary text-lg font-black">{s.value}</p>
            <p className="text-muted-foreground text-[10px] font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {bookings.map((b, i) => (
          <div
            key={b.id}
            className={`bg-card rounded-2xl p-4 hover-lift cursor-pointer opacity-0 animate-fade-in ${
              i === 0 ? "stagger-2" : i === 1 ? "stagger-3" : "stagger-4"
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-black text-sm">{b.court}</span>
                </div>
                <div>
                  <p className="text-foreground font-bold">Корт {b.court}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={10} className="text-muted-foreground" />
                    <span className="text-muted-foreground text-[10px]">{b.location}</span>
                  </div>
                </div>
              </div>
              <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full ${
                b.status === "Подтверждено"
                  ? "bg-primary/15 text-primary"
                  : "bg-accent/15 text-accent"
              }`}>
                {b.status}
              </span>
            </div>
            <div className="flex gap-4 ml-15">
              <div className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1.5 rounded-lg">
                <Calendar size={10} className="text-muted-foreground" />
                <span className="text-foreground text-[10px] font-medium">{b.date}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1.5 rounded-lg">
                <Clock size={10} className="text-muted-foreground" />
                <span className="text-foreground text-[10px] font-medium">{b.time}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border/50 flex justify-between items-center">
              <span className="text-foreground font-black text-lg">{b.price}</span>
              <button className="text-primary text-xs font-bold flex items-center gap-0.5 hover-scale group">
                Подробнее
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state hint */}
      <div className="mt-6 glass rounded-2xl p-5 text-center opacity-0 animate-fade-in stagger-5">
        <p className="text-foreground text-sm font-bold">Хотите больше игр?</p>
        <p className="text-muted-foreground text-xs mt-1">Забронируйте корт на удобное время</p>
        <button className="mt-3 bg-primary text-primary-foreground px-5 py-2 rounded-full text-xs font-bold hover-scale shadow-md shadow-primary/20">
          Новая бронь
        </button>
      </div>
    </div>
  );
};

export default Bookings;
