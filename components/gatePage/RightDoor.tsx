import UpLine from "./UpLine";
import MidLine from "./MidLine";

const LeftDoor: React.FC = (): JSX.Element => {
  return (
    <div className=" bg-blue-300/20  w-1/2 h-full relative" style={{ transform: "scaleX(-1)" }}>
      <img src="/gate2.jpg" style={{ transform: "scaleX(-1)" }} className="w-full h-screen object-left" />
      <div className="flex flex-col absolute top-0 right-0">
      <div>
        <UpLine />
      </div>
      <div className=" flex flex-col justify-center items-end">
        <div>
          <MidLine />
        </div>
        <div className="" style={{ transform: "scaleY(-1)" }}>
          <MidLine />
        </div>
      </div>
      <div className="" style={{ transform: "scaleY(-1)" }}>
        <UpLine />
      </div>
      </div>
    </div>
  );
};

export default LeftDoor;
