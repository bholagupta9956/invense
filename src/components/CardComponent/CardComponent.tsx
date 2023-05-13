const FrameRate = require("../../assets/img/FrameRate.png");


interface IProps {
  name: string;
  value: string | number;
  children?: JSX.Element | JSX.Element[];}

function CardComponent(props: IProps ) {
  const { name, value , children } = props;
  return (
    <div className="p-5 w-full bg-primaryWhite rounded-lg flex flex-col justify-between">
      <div className="justify-between text-center text-gray-600 mt-2">
        <div className="text-xl font-semibold text-pink">{name}</div>
        <div className="text-3xl font-semibold text-center text-gray-700">{value}</div>
       
      </div>

      <div>
        {/* <img className="w-20 h-auto" src={FrameRate} alt="icon" /> */}
        {/* <img className="w-20 h-auto" src={} alt="icon" /> */}
        <div className="flex justify-center text-center mt-2">  
        {children}
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
