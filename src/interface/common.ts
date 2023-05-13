interface IObject {
    [key: string]: any;
  }
  
export interface ISimpleReactValidator {
    getErrorMessages: () => any;
    showMessages: () => void;
    hideMessages: () => void;
    showMessageFor: (field: string) => void;
    hideMessageFor: (field: string) => void;
    allValid: () => boolean;
    fieldValid: (field: string) => boolean;
    purgeFields: () => void;
    messageWhenPresent: (message: any, options?: IObject) => any;
    messageAlways: (field: string, message: any, options?: IObject) => any;
    check: (inputValue: any, validations: any, options?: IObject) => boolean;
    message: (field: string, inputValue: any, validations: any, options?: IObject) => any;
  }
  