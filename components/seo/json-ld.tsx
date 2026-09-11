/**
 * Structured data as a plain <script> in the page HTML, as the Next.js JSON-LD
 * guide recommends — search engines read it without running JavaScript.
 * "<" is escaped so no string inside the data can close the tag early.
 */
export function JsonLd({ data }: { data: object[] }) {
  return (
    <>
      {data.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
