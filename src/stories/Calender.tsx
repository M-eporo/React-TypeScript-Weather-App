
export default function Calender({color}: {color: string}) {
  const now = new Date();
  const today = now.getDate();
  return (
    <ul style={{color: color}}>
      <li>
        <a href="/">
          <p>{new Intl.DateTimeFormat("ja-JP", {weekday: "short"}).format(new Date(today))}</p>
          <p>{today}</p>
        </a>
      </li>
    </ul>
  );
}