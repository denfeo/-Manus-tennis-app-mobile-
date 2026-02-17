import { useState } from "react";
import { ArrowLeft, Heart, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import courtHeader from "@/assets/court-header.jpg";
import coachImg from "@/assets/coach-lesson.jpg";

const courts = [
  { id: "B1", label: "B1", type: "outdoor" },
  { id: "B2", label: "B2", type: "outdoor" },
  { id: "A1", label: "A1", type: "indoor", large: true },
  { id: "C1", label: "C1", type: "indoor", premium: true },
  { id: "B3", label: "B3", type: "outdoor" },
];

const Courts = () => {
  const navigate = useNavigate();
  const [selectedCourt, setSelectedCourt] = useState("B2");
  const [filter, setFilter] = useState<"all" | "indoor" | "outdoor">("all");

  const filtered = filter === "all" ? courts : courts.filter((c) => c.type === filter);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {/* Header Image */}
      <div className="relative h-[220px] overflow-hidden rounded-b-3xl">
        <img src={courtHeader} alt="Court" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background/80" />
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-5 w-9 h-9 rounded-full bg-card/60 backdrop-blur flex items-center justify-center"
        >
          <ArrowLeft size={16} className="text-foreground" />
        </button>
        <div className="absolute bottom-5 left-5 right-5">
          <h1 className="text-foreground text-xl font-bold">Теннисный корт</h1>
          <p className="text-foreground/70 text-sm">Каштановая аллея</p>
          <span className="inline-block mt-2 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">
            Топ 10
          </span>
        </div>
      </div>

      {/* Court Selection */}
      <div className="px-4 mt-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-foreground text-sm font-semibold">Выберите корт</p>
          <div className="flex gap-1">
            {(["all", "indoor", "outdoor"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all ${
                  filter === f
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {f === "all" ? "Все" : f === "indoor" ? "Крытые" : "Открытые"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {filtered.map((court) => (
            <button
              key={court.id}
              onClick={() => setSelectedCourt(court.id)}
              className={`relative flex flex-col items-center justify-center py-5 rounded-xl border-2 transition-all ${
                court.large ? "col-span-1 row-span-1" : ""
              } ${
                selectedCourt === court.id
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {selectedCourt === court.id && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Check size={12} className="text-primary-foreground" />
                </div>
              )}
              {court.premium && (
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                  Premium
                </span>
              )}
              <span className="text-foreground text-lg font-bold">{court.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Coach Banner */}
      <div className="mx-4 mt-5 bg-card rounded-2xl p-3 flex gap-3 items-center">
        <img
          src={coachImg}
          alt="Coach"
          className="w-20 h-16 rounded-xl object-cover"
        />
        <div className="flex-1">
          <p className="text-foreground text-sm font-semibold">Занятие с тренером</p>
          <p className="text-muted-foreground text-xs mt-0.5">Лучшие тренеры города!</p>
          <button className="mt-2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1.5 rounded-full">
            Записаться
          </button>
        </div>
      </div>

      {/* Reserve Button */}
      <div className="mx-4 mt-5">
        <button
          onClick={() => navigate("/bookings")}
          className="w-full bg-cream text-cream-foreground py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Забронировать
        </button>
        <p className="text-muted-foreground text-[10px] text-center mt-2">
          Для занятий с тренером выберите корт и нажмите «Записаться» выше.
        </p>
      </div>

      {/* Subscription */}
      <div className="flex items-center justify-center gap-2 mt-5 pb-24">
        <Heart size={14} className="text-accent" />
        <span className="text-accent text-xs font-bold uppercase tracking-wider">
          Получить абонемент
        </span>
      </div>
    </div>
  );
};

export default Courts;
