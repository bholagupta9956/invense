interface IPropsLabel {
  label?: string;
  hideLabel?: boolean;
  className?: string;
}

const Label = (props: IPropsLabel) => {
  const { label, hideLabel, className } = props;
  return (
    <>
      {label ? (
        <span className={` pl-1  leading-tight font-semibold text-inputTextColor pb-2  `}>
          {label}
        </span>
      ) : hideLabel ? (
        <></>
      ) : (
        <div className={`h-8 text-gray-700   ${className}`} />
      )}
    </>
  );
};

export default Label;
