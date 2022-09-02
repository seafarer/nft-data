import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/pro-regular-svg-icons";

export default function Breadcrumb({...item}) {
  return (
    <div className="absolute top-0 left-0 bg-indigo-100 p-1.5 pr-2.5">
      <div className="text-xs flex align-center text-slate-500">
        <Link href="/">
          <a className="text-slate-800 hover:text-blue-600">Home</a>
        </Link>
        <span className="text-slate-600 mx-1">
          <FontAwesomeIcon icon={faChevronRight} className="w-1.5 inline" />
        </span> Collections
        <span className="text-slate-600 mx-1">
          <FontAwesomeIcon icon={faChevronRight} className="inline w-1.5" />
        </span> {item.name}
      </div>
    </div>
  )
}