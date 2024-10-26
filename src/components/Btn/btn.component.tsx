type propsType = {
  children: string;
};

export default function Btn(props: propsType) {
  return (
    <div>
      <span className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        {props.children}
      </span>
    </div>
  );
}
