import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, ChevronRight, Bell } from "lucide-react";
import heroImg from "@/assets/hero-tennis.jpg";

const locations = [
  { id: 1, name: "Каштановая аллея, B2" },
  { id: 2, name: "Каштановая аллея, B1" },
  { id: 3, name: "Парковая ул., A1" },
];

const dates = [
  { day: 13, weekday: "Пн", month: "Янв" },
  { day: 14, weekday: "Вт", month: "Янв" },
  { day: 17, weekday: "Пт", month: "Янв" },
  { day: 19, weekday: "Вс", month: "Янв" },
];

const timeSlots = ["12:30 - 13:30", "13:45 - 14:45", "15:00 - 16:00"];

const Index = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative overflow-hidden">
      {/* Hero */}
      <div className="relative h-[360px] overflow-hidden">
        <img
          src={heroImg}
          alt="Tennis"
          className="w-full h-full object-cover scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

        {/* Top bar */}
        <div className="absolute top-6 left-5 right-5 flex justify-between items-center animate-fade-in">
          <div className="glass w-10 h-10 rounded-full flex items-center justify-center hover-scale cursor-pointer">
            <MapPin size={16} className="text-primary" />
          </div>
          <div className="flex items-center gap-2">
            <div className="glass w-10 h-10 rounded-full flex items-center justify-center hover-scale cursor-pointer relative">
              <Bell size={16} className="text-foreground" />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary animate-pulse-glow" />
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-float shadow-lg shadow-primary/30">
              <span className="text-primary-foreground text-sm">🎾</span>
            </div>
          </div>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-16 left-5 right-5">
          <p className="text-cream/60 text-xs font-semibold tracking-[0.3em] uppercase animate-fade-in stagger-1 opacity-0">
            Теннис
          </p>
          <h1 className="text-cream text-5xl font-black uppercase leading-none mt-1 animate-fade-in stagger-2 opacity-0 drop-shadow-lg">
            Корты
          </h1>
          <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase mt-1 animate-fade-in stagger-3 opacity-0">
            Бронирование
          </p>
        </div>
      </div>

      {/* Location pills */}
      <div className="px-4 -mt-5 flex gap-2 overflow-x-auto pb-3 no-scrollbar relative z-10">
        {locations.map((loc, i) => (
          <button
            key={loc.id}
            onClick={() => setSelectedLocation(i)}
            className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 hover-scale opacity-0 animate-fade-in ${
              i === 0 ? "stagger-1" : i === 1 ? "stagger-2" : "stagger-3"
            } ${
              i === selectedLocation
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "glass text-foreground"
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* Booking Card */}
      <div className="mx-4 mt-3 bg-cream rounded-3xl p-5 animate-slide-up shadow-2xl shadow-background/50">
        {/* Date selection */}
        <p className="text-cream-foreground text-sm font-bold mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-primary rounded-full inline-block" />
          Выберите дату
        </p>
        <div className="flex gap-2 mb-5">
          {dates.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setSelectedDate(i)}
              className={`flex-1 flex flex-col items-center py-3 rounded-2xl border-2 transition-all duration-300 hover-scale ${
                i === selectedDate
                  ? "border-primary/60 bg-primary/5 shadow-md shadow-primary/10"
                  : "border-transparent bg-cream-foreground/5 hover:bg-cream-foreground/10"
              }`}
            >
              <span className={`text-xl font-bold transition-colors ${
                i === selectedDate ? "text-primary" : "text-cream-foreground"
              }`}>{d.day}</span>
              <span className="text-cream-foreground/50 text-[10px] font-medium">{d.weekday}</span>
            </button>
          ))}
        </div>

        {/* Time selection */}
        <p className="text-cream-foreground text-sm font-bold mb-3 flex items-center gap-2">
          <Clock size={14} className="text-primary" />
          Выберите время
        </p>
        <div className="flex gap-2 mb-6">
          {timeSlots.map((slot, i) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(i)}
              className={`flex-1 py-3 rounded-2xl text-xs font-semibold transition-all duration-300 hover-scale ${
                i === selectedTime
                  ? "bg-card text-foreground shadow-lg"
                  : "bg-cream-foreground/5 text-cream-foreground/70 hover:bg-cream-foreground/10"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-cream-foreground/10 mb-4" />

        {/* Price & Book */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-cream-foreground/50 text-[10px] uppercase tracking-wider font-medium">Стоимость</p>
            <p className="text-cream-foreground text-3xl font-black">₽3 200</p>
          </div>
          <button
            onClick={() => navigate("/courts")}
            className="bg-card text-cream px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-1.5 hover-lift shadow-xl shadow-card/50 group"
          >
            Забронировать
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <p className="text-cream-foreground/30 text-[10px] mt-4 leading-relaxed">
          Подтверждая бронирование, вы оплачиваете залог 50%. Остаток оплачивается на месте.
        </p>
      </div>

      <div className="h-28" />
    </div>
  );
};

export default Index;
