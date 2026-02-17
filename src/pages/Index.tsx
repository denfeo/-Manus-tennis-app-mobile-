import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-tennis.jpg";

const locations = [
  { id: 1, name: "Каштановая аллея, B2" },
  { id: 2, name: "Каштановая аллея, B1" },
  { id: 3, name: "Парковая ул., A1" },
];

const dates = [
  { day: 13, weekday: "Пн" },
  { day: 14, weekday: "Вт" },
  { day: 17, weekday: "Пт" },
  { day: 19, weekday: "Вс" },
];

const timeSlots = ["12:30 - 13:30", "13:45 - 14:45", "15:00 - 16:00"];

const Index = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {/* Hero */}
      <div className="relative h-[340px] overflow-hidden rounded-b-3xl">
        <img src={heroImg} alt="Tennis" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        <div className="absolute top-6 left-5 right-5 flex justify-between items-center">
          <div className="w-9 h-9 rounded-full bg-card/60 backdrop-blur flex items-center justify-center">
            <MapPin size={16} className="text-primary" />
          </div>
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">🎾</span>
          </div>
        </div>
        <div className="absolute bottom-12 left-5">
          <p className="text-cream/70 text-xs font-semibold tracking-widest uppercase">Теннис</p>
          <h1 className="text-cream text-4xl font-black uppercase leading-tight">Корты</h1>
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">Бронирование</p>
        </div>
      </div>

      {/* Location pills */}
      <div className="px-4 -mt-3 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {locations.map((loc, i) => (
          <button
            key={loc.id}
            onClick={() => setSelectedLocation(i)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              i === selectedLocation
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground border border-border"
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* Booking Card */}
      <div className="mx-4 mt-4 bg-cream rounded-2xl p-5 animate-slide-up">
        {/* Date selection */}
        <p className="text-cream-foreground text-sm font-semibold mb-3">Выберите дату</p>
        <div className="flex gap-2 mb-5">
          {dates.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setSelectedDate(i)}
              className={`flex-1 flex flex-col items-center py-3 rounded-xl border-2 transition-all ${
                i === selectedDate
                  ? "border-card bg-card/5"
                  : "border-transparent bg-cream-foreground/5"
              }`}
            >
              <span className="text-cream-foreground text-xl font-bold">{d.day}</span>
              <span className="text-cream-foreground/60 text-xs">{d.weekday}</span>
            </button>
          ))}
        </div>

        {/* Time selection */}
        <div className="flex items-center gap-1 mb-3">
          <Clock size={14} className="text-cream-foreground/60" />
          <p className="text-cream-foreground text-sm font-semibold">Выберите время</p>
        </div>
        <div className="flex gap-2 mb-5">
          {timeSlots.map((slot, i) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(i)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-medium transition-all ${
                i === selectedTime
                  ? "bg-card text-foreground"
                  : "bg-cream-foreground/5 text-cream-foreground/80"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Price & Book */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-cream-foreground/60 text-xs">Стоимость</p>
            <p className="text-cream-foreground text-2xl font-bold">₽3 200</p>
          </div>
          <button
            onClick={() => navigate("/courts")}
            className="bg-card text-cream px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-1 hover:opacity-90 transition-opacity"
          >
            Забронировать
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="text-cream-foreground/40 text-[10px] mt-3 leading-tight">
          Подтверждая бронирование, вы оплачиваете залог 50%. Остаток оплачивается на месте.
        </p>
      </div>

      <div className="h-24" />
    </div>
  );
};

export default Index;
