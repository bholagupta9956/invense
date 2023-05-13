import { combineReducers } from 'redux';
import DemoArticleReducer from './DemoArticleReducer';
import DemoListReducer from './DemoListReducer';
import CompanyReducer from "./CompanyReducer";
import ProjectReducer from './ProjectReducer';
import PanelReducer from './PanelReducer';
import DeviceReducer from './DeviceReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers(
    {
        DemoArticleReducer,
        DemoListReducer ,
        CompanyReducer ,
        ProjectReducer ,
        PanelReducer ,
        DeviceReducer ,
        UserReducer
    }
);

export default rootReducer;