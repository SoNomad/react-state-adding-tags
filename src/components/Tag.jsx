export default function Tag({ tags, removeHandler }) {
  return (
    <div className="tag-container">
      {tags.map((tag, id) => {
        return (
          <div className="tag" key={id}>
            <div className="tag-text">{tag}</div>
            <span className="close-btn" onClick={() => removeHandler(id)}>
              ×
            </span>
          </div>
        );
      })}
    </div>
  );
}
