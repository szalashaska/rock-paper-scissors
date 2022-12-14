import "./Attribution.scss";

function Attribution() {
  return (
    <div className="attribution">
      <div>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="attribution__link"
        >
          Frontend Mentor
        </a>
      </div>
      <div>
        Coded by{" "}
        <a
          href="https://szalashaska.github.io/my-homepage/"
          rel="noreferrer"
          className="attribution__link"
        >
          Kamil Petryniak
        </a>
      </div>
    </div>
  );
}

export default Attribution;
