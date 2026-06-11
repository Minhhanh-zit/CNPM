import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
  darkMode: boolean;
}

export default function MovieCard({ movie, darkMode }: Props) {
  return (
    <div className="group h-96 cursor-pointer" style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── MẶT TRƯỚC ── */}
        <div
          className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg ${
            darkMode ? "bg-gray-800 border border-gray-700" : "bg-white"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-3/4 overflow-hidden">
            <img
              src={movie.poster_url}
              alt={movie.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Badge độ tuổi */}
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2.5 py-1 rounded font-bold shadow-lg z-10">
              {movie.age_rating}
            </span>
          </div>
          <div className="p-3">
            <h3 className="font-bold text-sm truncate mb-1">{movie.title}</h3>
            <p className="text-xs text-gray-400">⏱ {movie.duration_minutes} phút</p>
          </div>

          {/* Flip hint */}
          <div className="absolute bottom-3 right-3 group-hover:opacity-0 transition-opacity duration-300">
            <span className="text-xs text-gray-400">🔄</span>
          </div>
        </div>

        {/* ── MẶT SAU ── */}
        <div
          className={`absolute inset-0 rounded-2xl shadow-lg flex flex-col justify-between p-5 ${
            darkMode ? "bg-gray-800 border border-gray-700" : "bg-white"
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Poster nhỏ + tên */}
          <div className="flex items-center gap-3 mb-3">
            <img
              src={movie.poster_url}
              alt={movie.title}
              className="w-12 h-16 object-cover rounded-lg shadow"
            />
            <div>
              <h3 className="font-extrabold text-sm leading-tight">{movie.title}</h3>
              <span className="inline-block mt-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded font-bold">
                {movie.age_rating}
              </span>
            </div>
          </div>

          {/* Thể loại */}
          <div className="flex flex-wrap gap-1 mb-3">
            {movie.genres.map((g) => (
              <span
                key={g}
                className="text-xs bg-blue-50 text-blue-500 border border-blue-200 px-2 py-0.5 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>

          {/* Thông tin */}
          <div className={`text-xs space-y-1 mb-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            <p>⏱ {movie.duration_minutes} phút</p>
            <p>🔞 Độ tuổi: {movie.age_rating}</p>
            <p>🎬 {movie.status === "NOW_SHOWING" ? "Đang chiếu" : "Sắp chiếu"}</p>
          </div>

          {/* Mô tả */}
          {movie.description && (
            <p className={`text-xs leading-relaxed mb-3 line-clamp-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {movie.description}
            </p>
          )}

          {/* Nút mua vé */}
          <button className="w-full bg-blue-500 text-white text-sm font-bold py-2.5 rounded-xl hover:bg-blue-600 active:scale-95 transition-all">
            🎟 MUA VÉ
          </button>
        </div>

        {/* CSS flip on hover */}
        <style>{`
          .group:hover > div {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    </div>
  );
}
