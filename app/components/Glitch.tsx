const Glitch = ({text}: {text: string}) => {
  return (
    <div
      className="hero glitch layers font-[anotherDanger] text-center"
      data-text={text}
    >
      <span className="text-nowrap">{text}</span>
    </div>
  );
};

export default Glitch;
