type propsType = {
  children: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function Btn(props: propsType) {
  return (
    <div className="m-4" onClick={(event) => props.onClick(event)}>
      <span className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        {props.children}
      </span>
    </div>
  );
}
