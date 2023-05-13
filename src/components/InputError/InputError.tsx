interface IPropsError {
  hideErrorRow?: boolean;
  validation?: any;
}
function InputError(props: IPropsError) {
  const { hideErrorRow, validation } = props;
  return (
    <div>
      {hideErrorRow ? (
        <></>
      ) : validation ? (
        <div className="flex flex-row justify-start items-center h-5 text-sm text-inputErrorColor">
          <div className="mt-px">
            <i className="pi pi-info-circle" />
          </div>
          <div className="text-inputErrorTextSize text-left text-inputErrorColor leading-tight truncate pl-2">
            {validation.props.children}
          </div>
        </div>
      ) : (
        <div className="h-5 " />
      )}
    </div>
  );
}

export default InputError;
