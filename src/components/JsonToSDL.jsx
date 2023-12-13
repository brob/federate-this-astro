import { useState } from "react";
import { jsonToSchema } from "@walmartlabs/json-to-simple-graphql-schema/lib";

export default function JsonToSDL() {
  const [schema, setSchema] = useState("");
  const [sdl, setSdl] = useState("");
  console.log(schema);
  return (
    <>
      <div
        className="not-content"
        style={{
          marginTop: "2rem",
          gap: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        }}
      >
        <label htmlFor="json">
          JSON
          <textarea
            onChange={(e) => {
              console.log(e.target.value);

              setSchema(e.target.value);
            }}
            value={schema}
            id="json"
            style={{ height: "200px" }}
            className="text-[#2D3A5F] h-[150px] md:h-[500px] text-sm leading-6 font-code p-4 border border-[#CED5E1] rounded-lg w-full focus:border-[#5B4CFF] focus:outline-none mb-4"
          />
        </label>
        <label htmlFor="sdl">
          SDL Output
          <textarea
            style={{ height: "200px" }}
            id="sdl"
            readOnly
            value={sdl}
            className="text-[#2D3A5F] h-[250px] md:h-[500px] text-sm leading-6 font-code p-4 border border-[#CED5E1] rounded-lg w-full focus:border-[#5B4CFF] focus:outline-none mb-4"
          />
        </label>
      </div>
      <button
        style={{
          display: "inline-block",
          padding: ".5rem 1rem",
          borderRadius: "4px",
          backgroundColor: "var(--sl-color-text-accent)",
          color: "var(--sl-color-black",
          margin: "0",
        }}
        onClick={() => {
          try {
            const schemaJson = JSON.parse(schema);
            const sdl = jsonToSchema({ jsonInput: schema });
            setSdl(sdl.value);
          } catch (e) {
            setSdl(e.message);
          }
        }}
      >
        Generate SDL
      </button>
    </>
  );
}
