import { useState, useEffect } from "react";
import Btn from "../Btn/btn.component";

type propsType = {
  gridSize: number;
};

export default function Grid(props: propsType) {

  const [gridArr, setGridArr] = useState<number[]>([]);

  let correctBlockCount: number = 0;
  let canClick: boolean = true;
  let prevBlock: HTMLSpanElement | null = null;

  const generateGrid = () => {
    const gridArr: number[] = [];
    for(let i = 0; i < props.gridSize / 2; i++) {
      gridArr.push(i + 1);
      gridArr.push(i + 1);
    }
    setGridArr(gridArr.sort(() => Math.random() - 0.5));
  }

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
      const matched = checkBlockMatch(
        prevBlock,
        current
      );
      if (!matched) {
        prevBlock?.classList.add("hidden");
        current.classList.add("hidden");
      } else {
        prevBlock?.parentElement?.classList.add("!bg-green-400");
        current.parentElement?.classList.add("!bg-green-400");
        correctBlockCount += 2;
        if(correctBlockCount === gridArr.length) {
          alert("You won!");
        }
      }
      canClick = true;
      prevBlock = null;
    }, 1000);
  };

  const checkBlockMatch = (prev: HTMLSpanElement | null, current: HTMLSpanElement | null) => {
    if (prev?.textContent === current?.textContent && prev?.parentElement?.id !== current?.parentElement?.id) {
      return true;
    } else {
      return false;
    }
  };

  const resetGame = (event: React.MouseEvent<HTMLDivElement>) => {
    const prevSibling = event.currentTarget.parentElement?.previousSibling as HTMLDivElement;
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

  useEffect(() => {
      generateGrid();
    // console.log((20 * (Math.sqrt(props.gridSize))) * Math.sqrt(props.gridSize));
    console.log(Math.sqrt(props.gridSize));
  }, [props.gridSize])

  return (
    <>
    <div
      className={`grid mx-auto text-center text-3xl text-black my-4`}
      style={{ gridTemplateColumns: `repeat(${Math.sqrt(props.gridSize)}, 1fr)`, width: 80 * Math.sqrt(props.gridSize) + "px"}}
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
    <div className="flex justify-center">
    <Btn onClick={(event) => resetGame(event)}>Reset Game</Btn>
    <a href="https://github.com/shaikhyakubhossain/memory-game"><Btn>Source Code</Btn></a>
    </div>
    </>
  );
}
