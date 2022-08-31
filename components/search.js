import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, useInstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import Link from "next/link";

const searchClient = algoliasearch('K3MEIZNB8A', '755bb252425e2ffb4c38d13d63d857b9');

function Hit({ hit }) {
  return (
    <article>
      <h1>
        <Link href={`/collection/${hit.slug}`}>{hit.name}</Link>
      </h1>
    </article>
  );
}

function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return fallback;
  }

  return children;
}

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_nftdata">
      <SearchBox
        classNames={{
          root: 'p-3 shadow-sm',
          form: 'relative',
          input: 'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1',
          submitIcon: 'absolute inset-y-2 left-2 w-5 h-5',
        }}
      />
      <EmptyQueryBoundary fallback="Enter your search term">
        <Hits hitComponent={Hit} />
      </EmptyQueryBoundary>
    </InstantSearch>
  );
}