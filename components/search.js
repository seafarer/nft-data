import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, useInstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import Link from "next/link";

const algoliaId = process.env.NEXT_PUBLIC_ALGOLIA_APPID
const alogliaApi = process.env.NEXT_PUBLIC_ALGOLIA_API
const searchClient = algoliasearch(algoliaId, alogliaApi);

function Hit({ hit }) {
  return (
      <div>
        <Link href={`/collection/${hit.slug}`}>
          <a className="py-2 px-1.5 hover:bg-yellow-100 block">
            {hit.name}
          </a>
        </Link>
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

export default function Search({ classnames, hitStyles }) {
  return (
    <div className={classnames}>
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
            root: `${hitStyles}`
          }} />
        </EmptyQueryBoundary>
      </InstantSearch>
    </div>
  );
}