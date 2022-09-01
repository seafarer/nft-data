import ReactMarkdown from "react-markdown";

export default function Description() {
  return(
    <div className="collection-description">
      <ReactMarkdown>
        {item.description}
      </ReactMarkdown>
    </div>
  )
}