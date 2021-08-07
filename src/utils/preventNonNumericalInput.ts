const preventNonNumericalInput = (
  event: React.KeyboardEvent<HTMLInputElement>,
): void => {
  const charCode =
    typeof event.which === 'undefined' ? event.keyCode : event.which;
  const charStr = String.fromCharCode(charCode);
  const numberType = /^[0-9 *]+$/;

  if (!charStr.match(numberType)) {
    event.preventDefault();
  }
};

export default preventNonNumericalInput;
