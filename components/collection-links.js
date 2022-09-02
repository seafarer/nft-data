import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/pro-solid-svg-icons";
import {faDiscord, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Etherscan from "./svgs/etherscan";

export default function CollectionLinks({ ...item }) {
  return (
    <div className="flex ml-3">
      {item.external_url &&
        <a href={item.external_url} target="_blank" rel="noreferrer" className="text-indigo-400">
          <div className="mr-4 w-5 text-slate-400"><FontAwesomeIcon icon={faGlobe} /></div>
        </a>
      }
      {item.twitter_username &&
        <a href={item.twitter_username} target="_blank" rel="noreferrer" className="text-slate-400">
          <div className="mr-4 w-5 text-slate-400"><FontAwesomeIcon icon={faTwitter} /></div>
        </a>
      }
      {item.discord_url &&
        <a href={item.discord_url} target="_blank" rel="noreferrer" className="text-slate-400">
          <div className="mr-4 w-6 text-slate-400"><FontAwesomeIcon icon={faDiscord} /></div>
        </a>
      }
      {item.instagram_username &&
        <a href={item.instagram_username} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      }
      <a href={`https://etherscan.io/address/${item.primary_asset_contracts[0].address}`} target="_blank" rel="noreferrer">
        <div className="mr-4 w-5"><Etherscan width={20} height={20} className="text-slate-400 fill-current" /></div>
      </a>
    </div>
  )
}