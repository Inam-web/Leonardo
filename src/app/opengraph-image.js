import { ImageResponse } from "next/og";

export const alt = "Leonardo Piccardi — author of Puck and Liara 1";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#101918",
          color: "#f0eadc",
          padding: "64px 76px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            border: "1px solid rgba(213, 185, 134, .28)",
            borderRadius: "50%",
            right: -34,
            top: 54,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 390,
            height: 390,
            border: "1px solid rgba(213, 185, 134, .22)",
            borderRadius: "50%",
            right: 31,
            top: 118,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 184,
            top: 214,
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #e2c98f, #8d7144 55%, #463c2d)",
            boxShadow: "0 0 70px rgba(214, 179, 100, .38)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#d6bd8e", fontSize: 18, letterSpacing: 4 }}>
            <span style={{ border: "1px solid #b69b6e", borderRadius: "50%", width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, letterSpacing: 0 }}>LP</span>
            LEONARDO PICCARDI
          </div>
          <div style={{ display: "flex", marginTop: 74, fontSize: 88, lineHeight: 0.96, letterSpacing: -3, maxWidth: 770 }}>
            PUCK AND LIARA
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 26, color: "#d6bd8e", letterSpacing: 2 }}>
            A MAGICAL ADVENTURE BEYOND THE STARS
          </div>
          <div style={{ display: "flex", marginTop: 42, fontSize: 18, color: "#b7b8ad", letterSpacing: 1 }}>
            THE TWO LITTLE ALIENS AND THE MAGIC STONE
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 48, right: 76, color: "#aab0a6", fontSize: 13, letterSpacing: 3 }}>
          AUTHOR · BOOKS · WORLDS
        </div>
      </div>
    ),
    { ...size },
  );
}
