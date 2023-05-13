import { Component } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { map, size } from "lodash";
import { CiLocationOn } from "react-icons/ci";
import CardComponent from "components/CardComponent";
import ProjectService from "services/ProjectService";

interface IProps extends RouteComponentProps {
  match: any;
}

interface IState {
  startDate: Date | Date[] | undefined;
  endDate: Date | Date[] | undefined;
  devices: Array<any>;
  projectDetails: any | undefined;
}

class Project extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      startDate: undefined,
      endDate: undefined,
      devices: [],
      projectDetails: undefined,
    };
  }

  componentDidMount(): void {
    const { projectId } = this.props.match.params;

    ProjectService.getDevices(projectId)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            devices: res.data?.items,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    ProjectService.getProjectDetails(projectId)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            projectDetails: res.data?.item,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { projectDetails, devices } = this.state;

    return (
      <div className="w-full">
        <div className="font-semibold text-base	text-slate-700">Company Name</div>
        <div className="mt-2 font-bold text-3xl	text-slate-800">{projectDetails?.name}</div>

        <div className="mt-2 w-full grid gap-x-12 grid-flow-row grid-cols-5">
          <div className="col-span-3">
            <div className="grid gap-3 grid-flow-row grid-cols-3">
              <CardComponent name="Total Devices" value={size(devices)}>
                <CiLocationOn/>
              </CardComponent>

              <CardComponent name="Active Devices" value={size(devices)}>
                <CiLocationOn/>
              </CardComponent>

              <CardComponent name="Depricated Devices" value={0}>
                <CiLocationOn/>
              </CardComponent>

              <CardComponent name="Alerts" value={0}>
                <CiLocationOn/>
              </CardComponent>

              <CardComponent name="Warnings" value={0}>
                <CiLocationOn />
              </CardComponent>
            </div>

            <div className="mt-6">
              <div className="font-bold">Devices</div>

              <div className="mt-2 flex flex-col gap-2">
                {devices.map((device) => {
                  return (
                    <Link
                      to={`/device/${device._id}`}
                      className="cursor-pointer p-3 rounded bg-red-200 flex gap-x-4"
                    >
                      <div className="flex-0">
                        <div>
                          <div className="font-semibold text-gray-500"> Device Name </div>
                          <div className="font-semibold text-gray-600"> {device.meta.name} </div>
                        </div>
                      </div>

                      <div className="flex-1 flex gap-x-4">
                        {map(device.parameters, (parameter) => {
                          return (
                            <div>
                              <div className="font-semibold text-gray-500"> {parameter.name} </div>
                              <div className="font-semibold text-gray-600">
                                {" "}
                                {parameter?.value || parameter?.default} {parameter?.unit}{" "}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex-0">
                        <div className="font-semibold text-gray-500"> View more details </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <div className="">
              <div className="font-bold">Alerts</div>
              <div className="mt-2">
                <div className="p-3 bg-primaryWhite rounded"> No Alerts </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="font-bold">Reports</div>
              <div className="mt-2">
                <div className="p-3 bg-primaryWhite rounded"> No Reports </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
