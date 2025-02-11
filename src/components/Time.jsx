export default function Time({ time }) {
  const hours = Math.floor(time / 60); // Gets the whole number part (hours)
  const decimalPart = time / 60 - hours; // Gets the decimal part
  const minutes = (decimalPart * 60).toFixed(0); // Convert the decimal part to minutes and round

  return (
    <span>
      {hours} hr {minutes} m
    </span>
  );
}
