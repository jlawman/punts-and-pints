export function DictionaryDefinition() {
  return (
    <section className="border-y border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-3xl px-8">
        <div className="text-center">
          {/* Headword */}
          <h2 className="text-3xl font-serif font-normal tracking-tight text-gray-900 md:text-4xl">
            Taking a Punt
          </h2>

          {/* Part of speech */}
          <p className="mt-2 text-xs font-medium uppercase tracking-widest text-gray-400">
            verb
          </p>

          {/* Definition */}
          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            To take a chance on something new.
          </p>
        </div>
      </div>
    </section>
  );
}
