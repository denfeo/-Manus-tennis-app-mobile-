import { Calendar, MapPin, Clock } from "lucide-react";

const bookings = [
  { id: 1, court: "B2", location: "Каштановая аллея", date: "13 Янв, Пн", time: "12:30 - 13:30", price: "₽3 200", status: "Подтверждено" },
  { id: 2, court: "A1", location: "Каштановая аллея", date: "17 Янв, Пт", time: "15:00 - 16:00", price: "₽4 100", status: "Ожидание" },
];

const Bookings = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto px-4 pt-14 pb-24">
      <h1 className="text-foreground text-xl font-bold mb-1">Мои бронирования</h1>
      <p className="text-muted-foreground text-sm mb-6">Предстоящие игры</p>

      <div className="space-y-3">
        {bookings.map((b) => (
          <div key={b.id} className="bg-card rounded-2xl p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-foreground font-bold text-lg">Корт {b.court}</p>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin size={12} className="text-muted-foreground" />
                  <span className="text-muted-foreground text-xs">{b.location}</span>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                b.status === "Подтверждено" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
              }`}>
                {b.status}
              </span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} className="text-muted-foreground" />
                <span className="text-foreground text-xs">{b.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} className="text-muted-foreground" />
                <span className="text-foreground text-xs">{b.time}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border flex justify-between items-center">
              <span className="text-foreground font-bold">{b.price}</span>
              <button className="text-primary text-xs font-semibold">Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
