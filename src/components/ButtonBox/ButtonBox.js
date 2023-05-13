import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import React, { Component } from "react";

export const BUTTONS = {
  SAVE: "SAVE",
  CANCEL: "CANCEL",
};

const BUTTON_TYPE = {
  SAVE: {
    icon: "pi pi-save",
    isFilled: true,
  },
  CANCEL: {
    icon: "pi pi-times",
    isOutline: true,
  },
};

class ButtonBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
    };
  }

  getClassNames() {
    const { buttonType } = this.props;
    let className = "";
    if (!buttonType) {
      className =
        "border border-primaryColor bg-primaryColor w-96 text-base  h-primaryBtnHeight px-2 text-white ";
      return className;
    } else if (BUTTON_TYPE[buttonType].isFilled) {
      className =
        "border border-primaryColor bg-primaryColor text-base w-96 h-primaryBtnHeightpx-2 text-white ";
      return className;
    } else if (BUTTON_TYPE[buttonType].isOutline) {
      className =
        "border border-btnSecondaryColor bg-white text-base w-96  h-primaryBtnHeight px-2 text-btnSecondaryColor ";
      return className;
    }
  }

  getIcon = () => {
    let icon = "";
    const { buttonType } = this.props;
    console.log(buttonType);
    if (buttonType) {
      console.log(buttonType);
    }
  };

  render() {
    let className = this.getClassNames();
    let icon = this.getIcon();
    return (
      <div>
        <Button
          {...this.props}
          className={className}
          onClick={() => {
            if (this.props.onClick) {
              this.props.onClick();
            } else if (this.props.onClickWithLoader) {
              let res = this.props.onClickWithLoader();
              if (Promise.resolve(res) === res) {
                this.setState({ showLoader: true });
                res
                  .then(() => {
                    this.setState({ showLoader: false });
                  })
                  .catch(() => {
                    this.setState({ showLoader: false });
                  });
              }
            }
          }}
          icon={icon ? icon : ""}
          iconPos="right"
        >
          {this.state.showLoader ? (
            <ProgressSpinner
              style={{
                width: "18px",
                height: "18px",
                position: "absolute",
                right: "10px",
              }}
              strokeWidth="10"
              fill="transparent"
              animationDuration="15s"
            />
          ) : (
            <></>
          )}
        </Button>
      </div>
    );
  }
}
export default ButtonBox;
