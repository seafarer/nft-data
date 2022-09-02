import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, useInstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import Link from "next/link";

const algoliaId = process.env.NEXT_PUBLIC_ALGOLIA_APPID
const alogliaApi = process.env.NEXT_PUBLIC_ALGOLIA_API
console.log(alogliaApi)
const searchClient = algoliasearch(algoliaId, alogliaApi);

function Hit({ hit }) {
  return (
      <div className="py-2">
        <Link href={`/collection/${hit.slug}`}>{hit.name}</Link>
      </div>
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
    <div className="px-6 pt-10 md:w-1/2 relative">
      <InstantSearch searchClient={searchClient} indexName="dev_nftdata">
        <SearchBox
          classNames={{
            root: 'flex flex-col',
            form: 'relative',
            input: 'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 rounded-md focus:ring-1',
            submitIcon: 'absolute top-[10px] left-2 w-[22px] h-[22px]',
            resetIcon: 'hidden'
          }}
          placeholder="Find a collection"
        />
        <EmptyQueryBoundary fallback={null}>
          <Hits hitComponent={Hit} classNames={{
            root: 'absolute bg-white pt-2 px-3 pb-3 right-0 left-6 drop-shadow top-[84px] right-6'
          }} />
        </EmptyQueryBoundary>
      </InstantSearch>
    </div>
  );
}