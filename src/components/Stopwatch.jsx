const Stopwatch = ({seconds}) => {

  return (
    <div>
      <h1>- С каждой секундой противник становится сильнее</h1>
      <p>- Каждые 10 секунд наносится удaр</p>
      <p>- {seconds}</p>
    </div>
  );
};

export default Stopwatch;

