import { useState } from "react";
import { ArrowLeft, Heart, Check, Star, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import courtHeader from "@/assets/court-header.jpg";
import coachImg from "@/assets/coach-lesson.jpg";

const courts = [
  { id: "B1", label: "B1", type: "outdoor", rating: 4.5 },
  { id: "B2", label: "B2", type: "outdoor", rating: 4.8 },
  { id: "A1", label: "A1", type: "indoor", large: true, rating: 4.9 },
  { id: "C1", label: "C1", type: "indoor", premium: true, rating: 5.0 },
  { id: "B3", label: "B3", type: "outdoor", rating: 4.3 },
  { id: "A2", label: "A2", type: "indoor", rating: 4.6 },
];

const Courts = () => {
  const navigate = useNavigate();
  const [selectedCourt, setSelectedCourt] = useState("B2");
  const [filter, setFilter] = useState<"all" | "indoor" | "outdoor">("all");

  const filtered = filter === "all" ? courts : courts.filter((c) => c.type === filter);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative overflow-hidden">
      {/* Header Image */}
      <div className="relative h-[240px] overflow-hidden">
        <img src={courtHeader} alt="Court" className="w-full h-full object-cover animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-5 glass w-10 h-10 rounded-full flex items-center justify-center hover-scale"
        >
          <ArrowLeft size={16} className="text-foreground" />
        </button>
        <button className="absolute top-6 right-5 glass w-10 h-10 rounded-full flex items-center justify-center hover-scale">
          <Heart size={16} className="text-foreground" />
        </button>
        <div className="absolute bottom-5 left-5 right-5 animate-fade-in stagger-2 opacity-0">
          <h1 className="text-foreground text-2xl font-black">Теннисный корт</h1>
          <p className="text-foreground/60 text-sm font-medium">Каштановая аллея</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full shadow-md shadow-primary/30">
              Топ 10
            </span>
            <span className="flex items-center gap-1 text-foreground/70 text-xs">
              <Star size={12} className="text-primary fill-primary" />
              4.8
            </span>
          </div>
        </div>
      </div>

      {/* Court Selection */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-foreground text-sm font-bold flex items-center gap-2">
            <span className="w-1 h-4 bg-primary rounded-full inline-block" />
            Выберите корт
          </p>
          <div className="glass rounded-full flex p-0.5">
            {(["all", "indoor", "outdoor"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-semibold transition-all duration-300 ${
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f === "all" ? "Все" : f === "indoor" ? "Крытые" : "Открытые"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {filtered.map((court, i) => (
            <button
              key={court.id}
              onClick={() => setSelectedCourt(court.id)}
              className={`relative flex flex-col items-center justify-center py-6 rounded-2xl border-2 transition-all duration-300 hover-scale opacity-0 animate-fade-in ${
                i === 0 ? "stagger-1" : i === 1 ? "stagger-2" : i === 2 ? "stagger-3" : i === 3 ? "stagger-4" : "stagger-5"
              } ${
                selectedCourt === court.id
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {selectedCourt === court.id && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center animate-scale-in">
                  <Check size={12} className="text-primary-foreground" />
                </div>
              )}
              {court.premium && (
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[7px] font-bold px-1.5 py-0.5 rounded-full animate-pulse-glow">
                  Premium
                </span>
              )}
              <span className="text-foreground text-xl font-black">{court.label}</span>
              <span className="text-muted-foreground text-[9px] mt-1 flex items-center gap-0.5">
                <Star size={8} className="text-primary fill-primary" />
                {court.rating}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Coach Banner */}
      <div className="mx-4 mt-5 bg-card rounded-2xl p-4 flex gap-4 items-center hover-lift cursor-pointer opacity-0 animate-fade-in stagger-6">
        <div className="relative">
          <img
            src={coachImg}
            alt="Coach"
            className="w-20 h-20 rounded-2xl object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md">
            <span className="text-[10px]">🎓</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-foreground text-sm font-bold">Занятие с тренером</p>
          <p className="text-muted-foreground text-xs mt-0.5">Лучшие тренеры города!</p>
          <button className="mt-2.5 bg-primary text-primary-foreground text-[10px] font-bold px-4 py-2 rounded-full hover-scale shadow-md shadow-primary/20">
            Записаться
          </button>
        </div>
      </div>

      {/* Reserve Button */}
      <div className="mx-4 mt-5">
        <button
          onClick={() => navigate("/bookings")}
          className="w-full bg-cream text-cream-foreground py-4 rounded-2xl font-bold text-sm hover-lift shadow-xl transition-all duration-300 active:scale-[0.98]"
        >
          Забронировать
        </button>
        <p className="text-muted-foreground text-[10px] text-center mt-2.5 leading-relaxed">
          Для занятий с тренером выберите корт и нажмите «Записаться» выше.
        </p>
      </div>

      {/* Subscription */}
      <div className="flex items-center justify-center gap-2 mt-6 pb-28">
        <button className="flex items-center gap-2 hover-scale group">
          <Heart size={14} className="text-accent group-hover:text-primary transition-colors" />
          <span className="text-accent text-xs font-bold uppercase tracking-wider group-hover:text-primary transition-colors">
            Получить абонемент
          </span>
        </button>
      </div>
    </div>
  );
};

export default Courts;
