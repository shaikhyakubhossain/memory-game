export default function Grid() {

  const gridArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
  ];

  let prevBlock: HTMLSpanElement | null = null;

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.currentTarget as HTMLDivElement;
    console.log(target.children[0]);
    if (!prevBlock) {
      target.children[0].classList.remove("hidden");
      prevBlock = target.children[0] as HTMLSpanElement;
    } else{
      target.children[0].classList.remove("hidden");
      hideDelay(target.children[0] as HTMLSpanElement);
    }
  };

  const hideDelay = (current: HTMLSpanElement) => {
    setTimeout(() => {
      prevBlock?.classList.add("hidden");
      current.classList.add("hidden");
      prevBlock = null;
      }, 1000);
  }

  return (
    <div className="grid grid-cols-4 w-80 h-80 mx-auto text-center text-3xl text-white">
      {gridArr.map((num) => {
        return (
          <div
            onClick={(event) => handleClick(event)}
            key={num}
            className="flex justify-center w-20 h-20 bg-red-500 border border-red-800 m-auto items-center hover:bg-red-400 cursor-pointer"
          >
            <span className="hidden">
              {parseInt((Math.random() * 9 + 1).toString())}
            </span>
          </div>
        );
      })}
    </div>
  );
}
