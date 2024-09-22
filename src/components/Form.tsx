type FormProps = {
  getWeatherData: () => void;
}

const Form = (props: FormProps) => {
  const { getWeatherData } = props;
  return (
    <div>
      <form>
        <input type="text" name="region" id="region" placeholder="地域名" required />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default Form