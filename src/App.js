export default function Square() {
  return <button className="square">x</button>
}
export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">x</button>
        <button className="square">x</button>
        <button className="square">x</button>
      </div>
      <div className="board-row">
        <button className="square">x</button>
        <button className="square">x</button>
        <button className="square">x</button>
      </div>
      <div className="board-row">
        <button className="square">x</button>
        <button className="square">x</button>
        <button className="square">x</button>
      </div>
    </>
  );
}
