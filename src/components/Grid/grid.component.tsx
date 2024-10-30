import { useState } from "react";
import Btn from "../Btn/btn.component";

type propsType = {
  gridSize: number;
};

export default function Grid(props: propsType) {

  const [gridArr, setGridArr] = useState<number[]>([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8].sort(() => Math.random() - 0.5));;

  console.log(props.gridSize);

  let canClick: boolean = true;
  let prevBlock: HTMLSpanElement | null = null;

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.currentTarget as HTMLDivElement;
    if(target.classList.contains("!bg-green-400")) {
      return;
    }
    if (!prevBlock) {
      target.children[0].classList.remove("hidden");
      prevBlock = target.children[0] as HTMLSpanElement;
    } else {
      canClick = false;
      target.children[0].classList.remove("hidden");
      hideDelay(target.children[0] as HTMLSpanElement);
    }
  };

  const hideDelay = (current: HTMLSpanElement) => {
    setTimeout(() => {
      const matched = checkWin(
        prevBlock,
        current
      );
      if (!matched) {
        prevBlock?.classList.add("hidden");
        current.classList.add("hidden");
      } else {
        prevBlock?.parentElement?.classList.add("!bg-green-400");
        current.parentElement?.classList.add("!bg-green-400");
      }
      canClick = true;
      prevBlock = null;
    }, 1000);
  };

  const checkWin = (prev: HTMLSpanElement | null, current: HTMLSpanElement | null) => {
    if (prev?.textContent === current?.textContent && prev?.parentElement?.id !== current?.parentElement?.id) {
      return true;
    } else {
      return false;
    }
  };

  // const arrReSize = () => {
  //   if
  //   for(){

  //   }
  // }

  const resetGame = (event: React.MouseEvent<HTMLDivElement>) => {
    const prevSibling = event.currentTarget.previousSibling as HTMLDivElement;
    for (let i = 0; i < gridArr.length; i++) {
      prevSibling.children[i].children[0].classList.add("hidden");
      prevSibling.children[i].classList.remove("!bg-green-400");
    }
    setGridArr((prev) => {
      const newArr = [...prev]
      newArr.sort(() => Math.random() - 0.5);
      return newArr;
    });
    prevBlock = null;
    canClick = true;
  };

  return (
    <>
    <div
      className="grid grid-cols-4 w-80 h-80 mx-auto text-center text-3xl text-black my-4"
    >
      {gridArr.map((num, index) => {
        return (
          <div
            onClick={(event) => canClick && handleClick(event)}
            id={index.toString()}
            key={index}
            className="flex justify-center w-20 h-20 bg-slate-200 border-4 border-white rounded-lg items-center hover:bg-slate-300 cursor-pointer"
          >
            <span className="hidden">{num}</span>
          </div>
        );
      })}
    </div>
    <Btn onClick={(event) => resetGame(event)}>Reset Game</Btn>
    </>
  );
}
